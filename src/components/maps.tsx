import { useState, useEffect, useRef } from "react";

import "@tomtom-international/web-sdk-maps/dist/maps.css";
import * as tt from "@tomtom-international/web-sdk-maps";

const MAX_ZOOM = 17;

export default function Maps() {
  const mapElement = useRef<HTMLDivElement>(null);
  const [mapLongitude, setMapLongitude] = useState(73.17794394595518);
  const [mapLatitude, setMapLatitude] = useState(18.893115376388657);
  const [mapZoom, setMapZoom] = useState(13);
  const [map, setMap] = useState({});

  useEffect(() => {
    if(mapElement.current && mapElement)  {
      mapElement.current.style.overflow = "visible";
      let map = tt.map({
        key: "nG6oY1L34rbTfoLz0D205CrB42a3mf8m",
        container: mapElement.current,
        center: [mapLongitude, mapLatitude],
        zoom: mapZoom
      });    
      setMap(map);
    }
    // return () => map.remove();
  }, []);
  return (
    <div ref={mapElement} className="mapDiv h-screen" /> 
  );
}
