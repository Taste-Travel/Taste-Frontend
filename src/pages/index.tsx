import type { NextPage } from "next";
import Head from "next/head";
import { Main } from "../components/Main";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Taste travel</title>
        <meta name="title" content="Taste travel" />
        <meta
          name="description"
          content="교내 주변의 맛집을 탐방하고 리뷰하세요!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Main />
    </>
  );
};

export default Home;
