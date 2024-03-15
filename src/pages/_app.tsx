import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="min-h-screen bg-base-800">
      <Component {...pageProps} />;
    </main>
  );
}
