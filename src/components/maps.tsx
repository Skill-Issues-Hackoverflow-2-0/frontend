import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import '@tomtom-international/web-sdk-maps/dist/maps.css'
import * as tt from '@tomtom-international/web-sdk-maps'

const MAX_ZOOM = 17

export default function Maps() {
  const mapElement = useRef<HTMLDivElement>(null)
  const [map, setMap] = useState<tt.Map | null>(null)

  useEffect(() => {
    if (mapElement.current) {
      mapElement.current.style.overflow = 'visible'
      const mapInstance = tt.map({
        key: 'nG6oY1L34rbTfoLz0D205CrB42a3mf8m',
        container: mapElement.current,
        center: [73.17794394595518, 18.893115376388657],
        zoom: 13,
      })
      setMap(mapInstance)

      return () => mapInstance.remove()
    }
  }, [mapElement])

  const getSnapFunction = () => {
    if (!map) return

    axios
      .get(
        'https://api.tomtom.com/routing/1/calculateRoute/52.50931%2C13.42936%3A52.50274%2C13.43872/json?key=nG6oY1L34rbTfoLz0D205CrB42a3mf8m'
      )
      .then((res) => {
        console.log(res.data)
        const snappedPoints = res.data.snappedPoints

        map.addLayer({
          id: Math.random().toString(),
          type: 'circle',
          source: {
            type: 'geojson',
            data: {
              type: 'FeatureCollection',
              features: [
                {
                  type: 'Feature',
                  geometry: {
                    type: 'Polygon',
                    coordinates: [
                      [
                        [73.17794394595518, 18.893115376388657],

                        [73.17794394595518, 18.893115376388657],
                      ],
                    ],
                  },
                  properties: {},
                },
              ],
            },
          },
          paint: {
            'circle-radius': 6,
            'circle-color': '#000000',
          },
        })

        // Set the map center to the first snapped point
        if (res.data.snappedPoints.length > 0) {
          const firstPoint = res.data.snappedPoints[0].location
          map.setCenter([firstPoint.longitude, firstPoint.latitude])
        }
      })
      .catch((err: Error) => console.error(err))
  }

  useEffect(() => {
    getSnapFunction()
  }, [map])

  return <div ref={mapElement} className="mapDiv h-screen" />
}
