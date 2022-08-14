import type { NextPage } from "next";
import Head from "next/head";
import { Maps } from "../components/Map";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Taste travel</title>
      </Head>
      <Maps />

      <h1>Hello Everyone</h1>
    </>
  );
};

export default Home;
