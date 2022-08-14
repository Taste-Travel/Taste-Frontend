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

      <div>안녕하세요</div>
    </>
  );
};

export default Home;
