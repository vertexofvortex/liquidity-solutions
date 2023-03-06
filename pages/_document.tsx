import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.svg" />

        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta property="og:site_name" content="Liquidity Solutions" />
        <meta property="og:url" content="https://liquidity-solutions.pl" />

        {/* <meta property="og:title" content="Assets Management" /> */}
        <meta property="og:description" content="Our company is dedicated to delivering exceptional service and execution quality to our clients, leveraging our deep expertise and cutting-edge technology to help them achieve their trading goals." />
        <meta property="og:image" content="/lsog.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
