import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/x-icon" href="/ej.ico" sizes="16x16" />
      </Head>
      <body className="bg-background text-zinc-950 antialiased selection:bg-accent selection:text-background">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
