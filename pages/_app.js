import React, { useEffect } from "react";
import Head from "next/head";
import App from "next/app";
import { Provider } from "react-redux";
import globalStyles from "../src/utils/styles.js";
import store from "../src/redux/store";
import Router from "next/router";
import Script from "next/script";

function trackPageView(url) {
  try {
    window.gtag('config', 'UA-141654226-3', {
      page_location: url
    });
  } catch (error) {
    console.error("Error tracking page view:", error);
  }
}

class MyApp extends App {
  componentDidMount() {
    Router.events.on('routeChangeComplete', trackPageView);
  }

  componentWillUnmount() {
    Router.events.off('routeChangeComplete', trackPageView);
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <div>
        <Head>
          <title>ProjectLearn</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=UA-141654226-3`}
          strategy="afterInteractive"
        />
        <Script
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-141654226-3');
            `,
          }}
        />
        <style jsx global>
          {globalStyles}
        </style>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </div>
    );
  }
}

export default MyApp;
