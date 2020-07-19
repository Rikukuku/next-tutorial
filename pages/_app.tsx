import "../styles/global.css";
import { AppProps } from "next/app";
import { Component } from "react";

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
