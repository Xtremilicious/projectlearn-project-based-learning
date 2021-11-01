import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(
      (App) => (props) => sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  // setGoogleTags() {
  //   return {
  //     __html: `
  //     window.dataLayer = window.dataLayer || [];
  //     function gtag(){dataLayer.push(arguments);}
  //     gtag('js', new Date());

  //     gtag('config', 'UA-141654226-3');
  //     `
  //   };
  // }

  render() {
    return (
      <Html>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link rel="icon" href="/projectlearn.png" type="image/x-icon" />
          <meta name="author" content="Nilarjun Das" />

          <link rel="apple-touch-icon" href="/projectlearn.png" />

          <link
            rel="preload"
            href="/fonts/Lato-Bold.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Lato-Regular.ttf"
            as="font"
            crossOrigin=""
          />

          <script
            async={true}
            src="https://app.appzi.io/bootstrap/bundle.js?token=OQNTh"
          />
         <script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="xtremilicious" data-description="Support me on Buy me a coffee!" data-message="" data-color="#FFDD00" data-position="Right" data-x_margin="18" data-y_margin="18"></script>

          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* <script async src="https://www.googletagmanager.com/gtag/js?id=UA-141654226-3"/>

          <script dangerouslySetInnerHTML={this.setGoogleTags()} /> */}
        </body>
      </Html>
    );
  }
}
