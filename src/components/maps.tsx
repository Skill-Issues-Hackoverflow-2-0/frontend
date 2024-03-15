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
    if (mapElement.current && mapElement) {
      mapElement.current.style.overflow = "visible";
      let map = tt.map({
        key: "nG6oY1L34rbTfoLz0D205CrB42a3mf8m",
        container: mapElement.current,
        center: [-0.2046175878910219, 51.52327158962092],
        zoom: mapZoom,
      });

      map.on("load", () => {
        map.addLayer({
          id: "overlay",
          type: "fill",
          source: {
            type: "geojson",
            data: {
              properties: {},
              type: "Feature",
              geometry: {
                type: "Polygon",
                coordinates: [
                  [
                    [-0.2046175878910219, 51.52327158962092],
                    [-0.05355557617221507, 51.53523241868879],
                    [-0.13045987304786877, 51.46299250930767],
                  ],
                ],
              },
            },
          },
          layout: {},
          paint: {
            "fill-color": "#db356c",
            "fill-opacity": 0.5,
            "fill-outline-color": "black",
          },
        });
      });

      setMap(map);
      return () => map.remove();
    }
  }, []);
  return <div ref={mapElement} className="mapDiv h-screen" />;
}
