import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/favicon.png" />
          <script
            type="text/javascript"
            src="https://widget.droplabs.pl/widget.js"
          ></script>
        </Head>
        <body>
          <script
            type="text/javascript"
            src="https://widget.droplabs.pl/bubble.js"
            id="dl-bubble"
            data-uuid="bdd1bf01-26a0-40de-941c-380f8667e458"
          ></script>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
