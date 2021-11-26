import { DualActionModalContainer } from "components/Modal/DualActionModalContainer";
import DualActionWideModalContainer from "components/Modal/DualActionWideModalContainer";
import { SingleActionModalContainer } from "components/Modal/SingleActionModalContainer";
import NotificationsContainer from "components/Notifications/NotificationsContainer";
import Head from "next/head";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import { StateProvider } from "../context/store";
import "../styles/globals.css";

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Router.events.on("routeChangeStart", () => {
      setLoading(true);
    });
    Router.events.on("routeChangeComplete", () => {
      setLoading(false);
    });
    Router.events.on("routeChangeError", () => {
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Popcorn - DeFi for the People</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <StateProvider>
        <SingleActionModalContainer />
        <DualActionModalContainer />
        <DualActionWideModalContainer />
        <Component {...pageProps} />
        <NotificationsContainer />
      </StateProvider>
    </React.Fragment>
  );
}
