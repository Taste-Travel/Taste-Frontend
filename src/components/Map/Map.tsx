import { Map, MapMarker } from "react-kakao-maps-sdk";

export const MapComponent = () => {
  return (
    <>
      <Map
        center={{
          lat: 35.14288482851821,
          lng: 126.80057447973579,
        }}
        style={{
          width: "100%",
          height: "1000px",
        }}
        level={3}
      >
        {/* <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
          <div style={{ color: "#000" }}>Hello World!</div>
        </MapMarker> */}
      </Map>
    </>
  );
};
