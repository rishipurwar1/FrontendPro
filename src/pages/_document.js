import { Head, Html, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </Head>
      <body className="bg-gray-800 max-w-screen-2xl 2xl:mx-auto">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
