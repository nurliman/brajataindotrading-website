import React from "react";
import { AppProps } from "next/app";
import "../styles/global.scss";
import "normalize.css";

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default App;
