import Document, { Html, Head, Main, NextScript } from 'next/document'
//Dentro de document é colocado tudo que é estatico independente de qual
//página for acessar. Ele não renderiza novamente.
export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
          />
          <link
            rel="shortcut icon"
            href="favicon-32x32.png"
            type="image/x-icon"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap"
            rel="stylesheet"
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