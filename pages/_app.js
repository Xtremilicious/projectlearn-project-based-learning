import React from "react";
import Head from "next/head";
import App from "next/app";
import withRedux from "next-redux-wrapper";
import { Provider } from "react-redux";
import globalStyles from "../src/utils/styles.js";
import store from "../src/redux/store";


const _App = withRedux(store)(
  class _App extends App {
    static async getInitialProps({ Component, ctx }) {
      return {
        pageProps: Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}
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



export default _App;
