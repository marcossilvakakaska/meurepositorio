import "../src/styles/styles.scss";

import Head from "next/head";
import NProgress from "nprogress";
import Router from "next/router";

import "bootstrap/dist/css/bootstrap.min.css";

import Layout from "../src/components/Layout";

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});

Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <base href="/" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1.0, minimal-ui"
        />
        <meta name="robots" content="index,nofollow" />
        <meta name="author" content="Moonkode (moonkode.com)" />
        <meta name="copyright" content="TwinsHost" />
        <meta name="designer" content="Moonkode (moonkode.com)" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta property="og:title" content="TwinsHost" />
        <meta
          property="og:description"
          content="A TwinsHost pode ajudar você a impulsionar seu projeto com rapidez e segurança. Nossa prioridade atualmente é entregar um serviço de qualidade a nossos clientes, temos um suporte especializado que pode te ajudar a resolver problemas em que você tenha dificuldade, além disso nossas máquinas são super potentes para entregar sempre a rapidez que o seu projeto necessita."
        />
        <meta property="og:url" content="https://twinshost.com.br" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:image" content="/logo.png" />
        <meta property="twitter:image" content="/logo.png" />
        <meta property="twitter:card" content="summary" />
        <meta name="keywords" content="" />
        <meta
          name="abstract"
          content="A TwinsHost pode ajudar você a impulsionar seu projeto com rapidez e segurança. Nossa prioridade atualmente é entregar um serviço de qualidade a nossos clientes, temos um suporte especializado que pode te ajudar a resolver problemas em que você tenha dificuldade, além disso nossas máquinas são super potentes para entregar sempre a rapidez que o seu projeto necessita."
        />
        <meta
          name="description"
          content="A TwinsHost pode ajudar você a impulsionar seu projeto com rapidez e segurança. Nossa prioridade atualmente é entregar um serviço de qualidade a nossos clientes, temos um suporte especializado que pode te ajudar a resolver problemas em que você tenha dificuldade, além disso nossas máquinas são super potentes para entregar sempre a rapidez que o seu projeto necessita."
        />
        <link rel="shortcut icon" href="/logo.png" />
        <link
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
