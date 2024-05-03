import * as React from 'react';
import Map from 'react-map-gl';
import './map.css';
import 'mapbox-gl/dist/mapbox-gl.css';


function MapContainer() {
  return (
   
    <Map

      mapboxAccessToken="pk.eyJ1IjoibGNhdG9lIiwiYSI6ImNsMjU3end6dzFuOHUzYmpydzVvd2xyajcifQ.1KnX7kxeyNOmBvMdATH3vQ"
      initialViewState={{
        longitude: -98.48,
        latitude: 39.0,
        zoom: 4
      }}
      style={{width: 2500, height: 1270, left: 60, padding: '6px, 12px', position: 'absolute' }}
      mapStyle="mapbox://styles/lcatoe/clvh0cis305qp01pk7875ar8m"
    />
  );
}
export default MapContainer;

