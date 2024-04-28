import * as React from 'react';
import Map from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';


function MapContainer() {
  return (
    <Map
      mapboxAccessToken="pk.eyJ1IjoibGNhdG9lIiwiYSI6ImNsMjU3end6dzFuOHUzYmpydzVvd2xyajcifQ.1KnX7kxeyNOmBvMdATH3vQ"
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14
      }}
      style={{width: 600, height: 400}}
      mapStyle="mapbox://styles/lcatoe/clvh0cis305qp01pk7875ar8m"
    />
  );
}
export default MapContainer;

