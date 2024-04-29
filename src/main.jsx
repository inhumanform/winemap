import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {MapProvider} from 'react-map-gl';
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MapProvider>
      <App />
    </MapProvider>
  </BrowserRouter>
)