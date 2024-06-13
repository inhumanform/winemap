import * as React from 'react';
import { useState, useEffect, useRef, useContext } from 'react';
import Map, { Source, Layer, Marker, Popup, useMap } from 'react-map-gl';
import * as avaData from "./american-viticultural-areas.json"
import './map.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';



function MapContainer() {
  const multiPolygons = avaData.features.filter((ft) => ft.geometry.type == 'MultiPolygon')
  const polygons = avaData.features.filter((ft) => ft.geometry.type == 'Polygon')


  const [selectedAVA, setSelectedAVA] = useState([1]);
  const [showPopUp, setshowPopUp] = useState(false);


  return (
    <div>
      <Map
        // Put this access token into an environment variable
        mapboxAccessToken= {import.meta.env.VITE_REACT_APP_ACCESS_TOKEN}
        initialViewState={{
          longitude: -98.48,
          latitude: 39.0,
          zoom: 2.75
        }}
        style={{ width: "97vw", height: "100vh", left: 5, position: 'relative' }}
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
            anchor="bottom"
            closeOnClick={false}
            onClose={() => {
              setshowPopUp(false)
            }}
          >
            <div className='popup font-display'>
              <span id={selectedAVA.id} onClick={() => handleRegionClick(selectedAVA.id)}>
                {selectedAVA.properties.Name + ' AVA'}</span>
              <p>Established in: {selectedAVA.properties.Establishe}</p>
              <p>State: {selectedAVA.properties.States}</p>
              <p>Within the AVA(s) of: {selectedAVA.properties.Within}</p>
              <p>Contains the AVA(s): {selectedAVA.properties.Contains_}</p>
            </div>
          </Popup>
        )}
      </Map>
    </div>
  );
}
export default MapContainer;
