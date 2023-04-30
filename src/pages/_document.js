import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="dark:bg-slate-950  dark:text-white text-gray-200 container">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
