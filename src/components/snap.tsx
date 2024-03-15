import axios from 'axios'

// const getSnapFunction = () => {
//     let map;
//   axios
//     .get(
//       'https://api.tomtom.com/snap-to-roads/1/snapToRoads?points=4.6104,52.3757:4.6140,52.393&interpolate=true&key=YOUR_API_KEY'
//     )
//     .then((res) => {
//       console.log(res.data)
//       res.data.snappedPoints.forEach((point) => {
//         map.addLayer({
//           id: Math.random().toString(),
//           type: 'circle',
//           source: {
//             type: 'geojson',
//             data: {
//               type: 'FeatureCollection',
//               features: [
//                 {
//                   type: 'Feature',
//                   geometry: {
//                     type: 'Point',
//                     coordinates: [
//                       point.location.longitude,
//                       point.location.latitude,
//                     ],
//                   },
//                 },
//               ],
//             },
//           },
//           paint: {
//             'circle-radius': 6,
//             'circle-color': '#ff0000',
//           },
//         })
//       })
//       // Set the map center to the first snapped point
//       if (res.data.snappedPoints.length > 0) {
//         const firstPoint = res.data.snappedPoints[0].location
//         map.setCenter([firstPoint.longitude, firstPoint.latitude])
//       }
//     })
//     .catch((err) => console.error(err))
// }

// getSnapFunction()

