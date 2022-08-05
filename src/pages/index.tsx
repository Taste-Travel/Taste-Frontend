import type { NextPage } from "next";
import Head from "next/head";
import { Map } from "../components/Map";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Taste travel</title>
      </Head>
      <Map />
    </>
  );
};

export default Home;
