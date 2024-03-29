import axios from "axios"

export const getUser = async () => {
  try {
    const response = await axios.post(
      'http://localhost:5000/api/auth/me',
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
