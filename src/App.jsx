import './index.css'
import Navbar from './components/navbar/navbar.jsx';
import MapContainer from './components/map/map.jsx';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '/home/drewnix/Development/code/phase-5/phase5project/winemap/src/components/home/home.jsx'
import Grapes from './components/grapes/GrapeParent/grapes.jsx'
import GrapeView from './components/grapes/GrapeParent/GrapeView.jsx'
import { GrapeContext } from './components/grapes/GrapeParent/GrapeContext.jsx';
import { useContext } from 'react';
import About from './components/about/about.jsx'
import Regions from './components/regions/regions.jsx'


function App() {

  const value = useContext(GrapeContext)
  console.log(value)

  return (

    <div className="navbar">
      <Navbar />
      <div className="app-container">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/map' element={<MapContainer />} />
        <Route path="/grapes/:grapeId" element={<GrapeView />} />  
        <Route path="/grapes" element={<Grapes />} /> 
        <Route path='/regions' element={<Regions />} />
        <Route path='/about' element={<About />} />
      </Routes>
      </div>
    </div>

  );
}


export default App;
