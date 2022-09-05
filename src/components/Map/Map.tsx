import { useEffect } from "react";
import styled from "@emotion/styled";
import { useSideStore } from "../../Store/Store";
const MapAPI = process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY;

declare global {
  interface Window {
    kakao: any;
  }
}

export const MapComponent = () => {
  const { sidebarOn } = useSideStore();

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
  }, []);
  // sdk 오류로 ... js로 했움..
  return (
    <>
      <MapContainer side={sidebarOn} id="map" />
    </>
  );
};

const MapContainer = styled.div`
  width: 100%;
  height: 92vh;
`;
