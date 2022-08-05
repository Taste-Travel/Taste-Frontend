import Script from "next/script";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=e83dabc58817d8d237cb095af7222a35&libraries=services,clusterer&autoload=false"
        strategy="beforeInteractive"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
