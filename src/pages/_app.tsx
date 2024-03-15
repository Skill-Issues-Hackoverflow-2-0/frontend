import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="bg-[#081A3C] min-h-screen">
      <Component {...pageProps} />
    </main>
  )
}
