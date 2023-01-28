import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import GlobalStyle from "../styles/global";
import store from "../../src/features/store";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>MKS sistemas</Head>
      <Provider store={store}>
        <GlobalStyle />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default App;
