import "../styles/globals.css";
import React from "react";
import ReactDOM from "react-dom";
import { MoralisProvider } from "react-moralis";

//NEXT_PUBLIC means we dont mind these credentials to be on the client
//if no NEXT_PUBLIC it will be only rendered on the server not on client
//So we will have these credentials on the browser

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      appId={process.env.NEXT_PUBLIC_APP_ID}
      serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}
    >
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
