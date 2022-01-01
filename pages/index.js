import Head from "next/head";
import Login from "../components/Login";
import { useMoralis } from "react-moralis";

export default function Home() {
  //this returns all functions for login,logout etc
  const { isAuthenticated, logout, isInitializing } = useMoralis();

  if (!isAuthenticated) {
    return <Login />;
  }

  /*
  In web 3 for login we have to send a req to metamask wallet and then
  it will authenticate by signing in
  */

  return (
    <div className="h-screen">
      <Head>
        <title>Metaverse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Welcome</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
