import type { AppProps } from "next/app";
import Script from "next/script";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&libraries=services,clusterer&autoload=false`}
        strategy="beforeInteractive"
        // onLoad={() => {
        //   kakao.maps.load(() => {
        //     isAlreadyLoaded = true;
        //     setLoaded(true);
        //   });
        // }}
      /> */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
