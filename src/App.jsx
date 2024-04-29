import './index.css'
import Navbar from './components/navbar/navbar.jsx';
import MapContainer from './components/map/map.jsx';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '/home/drewnix/Development/code/phase-5/phase5project/winemap/src/components/home/home.jsx'
import Grapes from './components/grapes/grapes.jsx'
// import Login from './components/login/login.jsx'
import About from './components/about/about.jsx'
import Regions from './components/regions/regions.jsx'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/map' element={<MapContainer />} />
        <Route path='/grapes' element={<Grapes />} />
        <Route path='/regions' element={<Regions />} />
        <Route path='/about' element={<About />} />
        {/* <Route path='/login' element={<Login />} /> */}
      </Routes>
    </div>
  );
}


export default App;
