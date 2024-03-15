import axios from "axios"

export const useAuth = async () => {
  try {
    const response = await axios.post(
      'https://localhost:5000/api/auth/me',
      {},
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        withCredentials: true,
      }
    )
    return response.data.user
  } catch (error) {
    return null
  }
}
