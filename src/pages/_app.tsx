import type { AppProps } from "next/app";
import Head from "next/head";
import GlobalStyle from "../styles/global";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>MKS sistemas</Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default App;
