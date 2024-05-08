import * as React from 'react';
import { useState, useEffect } from 'react';
import Map, { Source, Layer, Marker, Popup, useMap } from 'react-map-gl';
import * as avaData from "./american-viticultural-areas.json"
import './map.css';
import 'mapbox-gl/dist/mapbox-gl.css';

function MapContainer() {
  const multiPolygons = avaData.features.filter((ft) => ft.geometry.type == 'MultiPolygon')
  const polygons = avaData.features.filter((ft) => ft.geometry.type == 'Polygon')
  const bb_regions = avaData.features.filter((ft) => ft.properties.Contains_ == 'None')

  const [selectedAVA, setSelectedAVA] = useState([1]);
  // useEffect(() => () => console.log('unmounting'), [])

  // useEffect(() => {
  //   const listener = e => {
  //     if (e.key === "Escape") {
  //       setSelectedAVA(null);
  //     }
  //   };
  //   window.addEventListener("keydown", listener);

  //   return () => {
  //     window.removeEventListener("keydown", listener);
  //   };
  // }, []);

  // console.log('bb_regions', bb_regions)
  // console.log('polygon', polygons[0].geometry.coordinates[0][0][0])
  // console.log('multiPolygons', multiPolygons[0], multiPolygons[1], multiPolygons[2])

  // console.log('multipolygon_names', multiPolygons.map((mp)=>mp.properties.Name))
  // console.log('polygon_names', polygons.map((p)=>p.properties.Name))

  // console.log('testy', avaData.features[0])
  // console.log('first_multiPolygon', multiPolygons[0], multiPolygons[12], multiPolygons[20])
  // console.log('first_polygon', polygons[0], polygons[1], polygons[87])


  function getAvaProperties(ava) {
  }
  return (
    <div>
      <Map
        mapboxAccessToken="pk.eyJ1IjoibGNhdG9lIiwiYSI6ImNsMjU3end6dzFuOHUzYmpydzVvd2xyajcifQ.1KnX7kxeyNOmBvMdATH3vQ"
        initialViewState={{
          longitude: -98.48,
          latitude: 39.0,
          zoom: 4
        }}
        style={{ width: 2500, height: 1270, left: 60, padding: '6px, 12px', position: 'absolute' }}
        mapStyle="mapbox://styles/lcatoe/clvh0cis305qp01pk7875ar8m"
      >

        {bb_regions.map(ava => (
          // if ava.
          <Marker

            key={ava.properties.Name}
            latitude={ava.geometry.type == 'MultiPolygon' ? ava.geometry.coordinates[0][0][0][1] : ava.geometry.coordinates[0][0][1]}
            longitude={ava.geometry.type == 'MultiPolygon' ? ava.geometry.coordinates[0][0][0][0] : ava.geometry.coordinates[0][0][0]}

          >

            <button className='marker-btn'
              id={ava.properties.Name}
              onClick={event => {
                event.preventDefault();
                // console.log('ava', ava)
                setSelectedAVA(ava);
              }}
            >
              <img src='/assets/orange-pin.svg' alt='AVA Icon' />
            </button>
          </Marker>
        ))}


        {/* {console.log('avaaaaaa', Object.entries(selectedAVA).slice(1,3))} */}
        {/* {Object.entries(selectedAVA).slice(1,3).map((prop) => (
    // console.log('keyname', keyName, 'i', i)
    console.log('properties', i, selectedAVA[keyName])
))} */}
        <div>
          {Object.entries(selectedAVA).slice(1, 3).map((prop) => (
            //  {console.log('avaaaaaa', ava[1])}
            <Popup
              // latitude={selectedAVA.geometry.type == 'MultiPolygon' ? selectedAVA.geometry.coordinates[0][0][0][1] : selectedAVA.geometry.coordinates[0][0][1]  }
              // longitude={selectedAVA.geometry.type == 'MultiPolygon' ?  selectedAVA.geometry.coordinates[0][0][0][0] :  selectedAVA.geometry.coordinates[0][0][0]}
              longitude={-100} latitude={40}
              anchor="bottom"
            // onClose={() => {
            //   setSelectedAVA(null);
            // }}
            >
              {console.log('ptop', prop[0] == 'properties' ? prop[1].Name  : null)}
              <div className='popup'>
                <h1>Hello</h1>
                {prop[0] == 'properties' ? <h2> prop[1].Name </h2> : null}
                {/* <h2>{selectedAVA[keyName]}</h2> */}
                {/* <p>{selectedAVA.properties.States}</p>  */}
              </div>
            </Popup>


          )

)}
        </div>
        {/* <Popup
          latitude={selectedAVA.geometry.type == 'MultiPolygon' ? selectedAVA.geometry.coordinates[0][0][0][1] : selectedAVA.geometry.coordinates[0][0][1]  }
          longitude={selectedAVA.geometry.type == 'MultiPolygon' ?  selectedAVA.geometry.coordinates[0][0][0][0] :  selectedAVA.geometry.coordinates[0][0][0]}
          longitude={-100} latitude={40}
          anchor="bottom"
        onClose={() => {
          setSelectedAVA(null);
        }}
        >
          <div className='popup'>
            <h1>Hello</h1>
            <h2>{selectedAVA.properties.Name}</h2>
              <p>{selectedAVA.properties.States}</p>
          </div>
        </Popup>
        ) : null} */}
      </Map>
    </div>
  );
}
export default MapContainer;







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