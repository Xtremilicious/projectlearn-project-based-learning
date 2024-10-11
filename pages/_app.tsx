import { useEffect } from "react";
import Head from "next/head";
import Router from "next/router";
import Script from "next/script";
import { Provider } from "react-redux";

// Custom imports
import { analytics } from '../src/lib/analytics';
import store from "../src/redux/store";
import { ThemeProvider } from "@/components/theme-provider";

// Types
import type { AppProps } from "next/app";

import globalStyles from "../src/utils/styles";
import '../styles/globals.css';

function trackPageView(url: string) {
  try {
    window.gtag('config', 'UA-141654226-3', {
      page_location: url,
    });
  } catch (error) {
    console.error("Error tracking page view:", error);
  }
}

const AppWrapper = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    // Initialize Amplitude
    analytics.init();

    // Track page views on route change
    const handleRouteChange = (url: string) => {
      trackPageView(url);
    };

    Router.events.on('routeChangeComplete', handleRouteChange);

    // Cleanup the event listener on unmount
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <div>
      <Head>
        <title>ProjectLearn</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </div>
  );
};

export default AppWrapper;
