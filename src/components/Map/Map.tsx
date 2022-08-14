import { useCallback, useEffect, useRef } from "react";
import Script from "next/script";
import styled from "@emotion/styled";
const MapAPI = process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY;

declare global {
  interface Window {
    kakao: any;
  }
}

export const MapComponent = () => {
  useEffect(() => {
    const mapScript = document.createElement("script");

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${MapAPI}&libraries=services,clusterer&autoload=false`;

    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      kakao.maps.load(() => {
        const container: HTMLElement | null = document.getElementById("map");
        const options = {
          center: new kakao.maps.LatLng(35.14272287312003, 126.8007504489608),
          level: 3,
        };
        new kakao.maps.Map(container, options);
      });
    };
    mapScript.addEventListener("load", onLoadKakaoMap);

    return () => mapScript.removeEventListener("load", onLoadKakaoMap);
  });

  return (
    <>
      <MapContainer id="map" />
    </>
  );
};

const MapContainer = styled.div`
  width: 500px;
  height: 550px;
`;
