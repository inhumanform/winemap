import * as React from 'react';
import { useState, useEffect, useRef, useContext } from 'react';
import Map, { Source, Layer, Marker, Popup, useMap } from 'react-map-gl';
import * as avaData from "./american-viticultural-areas.json"
import './map.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
// import { SubregionContext } from '../regions/SubregionContext';

function MapContainer() {
  const multiPolygons = avaData.features.filter((ft) => ft.geometry.type == 'MultiPolygon')
  const polygons = avaData.features.filter((ft) => ft.geometry.type == 'Polygon')
  // const bb_regions = avaData.features.filter((ft) => ft.properties.Contains_ == 'None')
  // console.log('bbbbbb', bb_regions)
  console.log('avaData', avaData.features)

  const [selectedAVA, setSelectedAVA] = useState([1]);
  const [showPopUp, setshowPopUp] = useState(false);
  // const { filteredRegions, setSelectedRegionId } = useContext(SubregionContext);
  // const handleRegionClick = (regionId) => {
  //   setSelectedRegionId(regionId);
  // };


  // useEffect(() => {
  //   popupRef.current?.trackpointer();

  // }, [popupRef.current])
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

        {avaData.features.map(ava => (
          <Marker

            key={ava.properties.Name}
            latitude={ava.geometry.type == 'MultiPolygon' ? ava.geometry.coordinates[0][0][0][1] : ava.geometry.coordinates[0][0][1]}
            longitude={ava.geometry.type == 'MultiPolygon' ? ava.geometry.coordinates[0][0][0][0] : ava.geometry.coordinates[0][0][0]}

          >

            <button className='marker-btn'
              id={ava.properties.Name}
              onClick={(e) => {
                e.preventDefault();
                setSelectedAVA(ava);
                setshowPopUp(true)
                // console.log(e.target)
              }}
            >
              {ava.properties.Contains_ == 'None' ? <img src='/assets/big-peen.svg' alt='AVA Icon' /> : <img src='/assets/widdle-peen.svg' alt='AVA Icon' />}

            </button>
          </Marker>
        ))}
        {console.log('selectedAVA', selectedAVA)}
        {showPopUp && (
          <Popup
            latitude={selectedAVA.geometry.type == 'MultiPolygon' ? selectedAVA.geometry.coordinates[0][0][0][1] : selectedAVA.geometry.coordinates[0][0][1]}
            longitude={selectedAVA.geometry.type == 'MultiPolygon' ? selectedAVA.geometry.coordinates[0][0][0][0] : selectedAVA.geometry.coordinates[0][0][0]}
            // longitude={-100} latitude={40}
            anchor="bottom"
            closeOnClick={false}
            onClose={() => {
              // setSelectedAVA(null);
              setshowPopUp(false)
            }}
          >
            <div className='popup font-display'>
            <span id={selectedAVA.id} onClick={() => handleRegionClick(selectedAVA.id)}>
              {selectedAVA.properties.Name + ' AVA'}</span>
              <p>{selectedAVA.properties.States}</p>
            </div>
          </Popup>
        )}
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