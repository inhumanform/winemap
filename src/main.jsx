import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {MapProvider} from 'react-map-gl';
import { BrowserRouter } from "react-router-dom";
import { GrapeProvider } from './components/grapes/GrapeParent/GrapeContext.jsx';
import { SubregionProvider } from './components/regions/SubregionContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>

  <GrapeProvider>
    <SubregionProvider>
    <MapProvider>
      <App />
    </MapProvider>
    </SubregionProvider>
    </GrapeProvider>

  </BrowserRouter>
)