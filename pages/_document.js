import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800&display=swap" 
          rel="stylesheet"/>
          <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-H6QETN9482"/>
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <Script strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-H6QETN9482');
          `,
          }}
        />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument