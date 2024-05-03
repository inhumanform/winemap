import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {MapProvider} from 'react-map-gl';
import { BrowserRouter } from "react-router-dom";
import { GrapeProvider } from './components/grapes/GrapeParent/GrapeContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <GrapeProvider>
    <MapProvider>
      <App />
    </MapProvider>
    </GrapeProvider>
  </BrowserRouter>
)