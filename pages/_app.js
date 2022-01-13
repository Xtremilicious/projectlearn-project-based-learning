import React from "react";
import Head from "next/head";
import App from "next/app";
import withRedux from "next-redux-wrapper";
import { Provider } from "react-redux";
import globalStyles from "../src/utils/styles.js";
import store from "../src/redux/store";
import Router from "next/router";
import withAnalytics from "next-analytics";
import "bootstrap/dist/css/bootstrap.css";

// function trackPageView(url) {
//   try {
//     window.gtag('config', 'UA-141654226-3', {
//       page_location: url
//     });
//   } catch (error) {
//     // silences the error in dev mode
//     // and/or if gtag fails to load
//   }
// }

const _App = withRedux(store)(
  class _App extends App {
    // componentDidMount() {
    //   Router.onRouteChangeComplete = url => {
    //     trackPageView(url);
    //   };
    // }
    static async getInitialProps({ Component, ctx }) {
      return {
        pageProps: Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {},
      };
    }

    render() {
      const { Component, pageProps, store } = this.props;

      return (
        <div>
          <Head>
            <title>ProjectLearn</title>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
            <link
              href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
              rel="stylesheet"
              integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
              crossorigin="anonymous"
            />
            <script
              src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
              integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
              crossorigin="anonymous"
            ></script>
            <script
              src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
              integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
              crossorigin="anonymous"
            ></script>
            <script
              src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
              integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
              crossorigin="anonymous"
            ></script>
          </Head>
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
);

export default withAnalytics(Router, { ga: "UA-141654226-3" })(_App);
