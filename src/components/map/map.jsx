import * as React from 'react';
import {useState, useEffect} from 'react';
import Map, { Source, Layer, Marker, Popup, useMap} from 'react-map-gl';
import * as avaData from "./american-viticultural-areas.json"
import './map.css';
import 'mapbox-gl/dist/mapbox-gl.css';

function MapContainer() {
const multiPolygons = avaData.features.filter((ft) => ft.geometry.type == 'MultiPolygon')
const polygons = avaData.features.filter((ft) => ft.geometry.type == 'Polygon')
const bb_regions = avaData.features.filter((ft) => ft.properties.Contains_ == 'None')

const [selectedAVA, setSelectedAVA] = useState(null);

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedAVA(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

// console.log('bb_regions', bb_regions)
// console.log('polygon', polygons[0].geometry.coordinates[0][0][0])
// console.log('multiPolygons', multiPolygons[0], multiPolygons[1], multiPolygons[2])

// console.log('multipolygon_names', multiPolygons.map((mp)=>mp.properties.Name))
// console.log('polygon_names', polygons.map((p)=>p.properties.Name))

// console.log('testy', avaData.features[0])
// console.log('first_multiPolygon', multiPolygons[0], multiPolygons[12], multiPolygons[20])
// console.log('first_polygon', polygons[0], polygons[1], polygons[87])

return (
   <div>
    <Map
      mapboxAccessToken="pk.eyJ1IjoibGNhdG9lIiwiYSI6ImNsMjU3end6dzFuOHUzYmpydzVvd2xyajcifQ.1KnX7kxeyNOmBvMdATH3vQ"
      initialViewState={{
        longitude: -98.48,
        latitude: 39.0,
        zoom: 4
      }}
      style={{width: 2500, height: 1270, left: 60, padding: '6px, 12px', position: 'absolute' }}
      mapStyle="mapbox://styles/lcatoe/clvh0cis305qp01pk7875ar8m"
    >
    {/* {avaData.features.map(ava => (
      <Marker 
      key={ava.properties.Name}
      latitude={ava.geometry.coordinates[0][0][0][1]}
      longitude={ava.geometry.coordinates[0][0][0][0]}
      >
        <button className='marker-btn'>
          <img src='/assets/grapes.svg' alt='AVA Icon' />
          </button>
      </Marker>
    ))} */}
    
        {/* {multiPolygons.map(ava => (
      <Marker 
      key={ava.properties.Name}
      latitude={ava.geometry.coordinates[0][0][0][1]}
      longitude={ava.geometry.coordinates[0][0][0][0]}
      >
        <button className='marker-btn'>
          <img src='/assets/orange-pin.svg' alt='AVA Icon' />
          </button>
      </Marker>
    ))} */}
            {/* {polygons.map(ava => (
      <Marker 
      key={ava.properties.Name}
      latitude={ava.geometry.coordinates[0][0][1]}
      longitude={ava.geometry.coordinates[0][0][0]}
      >
        <button className='marker-btn'>
          <img src='/assets/orange-pin.svg' alt='AVA Icon' />
          </button>
      </Marker>
    ))} */}
    {bb_regions.map(ava => (
      // if ava.
      <Marker 
      key={ava.properties.Name}
      latitude={ava.geometry.type == 'MultiPolygon' ? ava.geometry.coordinates[0][0][0][1] : ava.geometry.coordinates[0][0][1]  }
      longitude={ava.geometry.type == 'MultiPolygon' ?  ava.geometry.coordinates[0][0][0][0] :  ava.geometry.coordinates[0][0][0]}
      >
        <button className='marker-btn'>
          <img src='/assets/orange-pin.svg' alt='AVA Icon' />
          </button>
      </Marker>
    ))}

{selectedAVA ? (
          <Popup
          latitude={selectedAVA.geometry.type == 'MultiPolygon' ? selectedAVA.geometry.coordinates[0][0][0][1] : selectedAVA.geometry.coordinates[0][0][1]  }
          longitude={selectedAVA.geometry.type == 'MultiPolygon' ?  selectedAVA.geometry.coordinates[0][0][0][0] :  selectedAVA.geometry.coordinates[0][0][0]}
            onClose={() => {
              setSelectedAVA(null);
            }}
          >
            <div>
              <h2>{selectedAVA.properties.Name}</h2>
              <p>{selectedAVA.properties.States}</p>
            </div>
          </Popup>
        ) : null}
</Map>
    </div>
  );
}
export default MapContainer;

