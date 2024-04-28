import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Map from 'react-map-gl';
import {MapProvider} from 'react-map-gl';
import Navbar from '/home/drewnix/Development/code/phase-5/phase5project/winemap/src/components/navbar.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MapProvider>
    <App />

    </MapProvider>
    {/* <Map /> */}
    {/* <Navbar /> */}
  </React.StrictMode>
)