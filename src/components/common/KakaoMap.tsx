import { useEffect } from "react";

interface KakaoMapProps {
  style: string;
}

export default function KakaoMap({ style }: KakaoMapProps) {
  const { kakao } = window;
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 2,
    };

    const map = new kakao.maps.Map(container, options);
  }, []);
  return <div id="map" className={style}></div>;
}
