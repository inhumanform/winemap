import './index.css'
import Navbar from './components/navbar/navbar.jsx';
import MapContainer from './components/map/map.jsx';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Grapes from './components/grapes/GrapeParent/grapes.jsx'
import GrapeView from './components/grapes/GrapeParent/GrapeView.jsx'
import { GrapeContext } from './components/grapes/GrapeParent/GrapeContext.jsx';
import { useContext } from 'react';
import About from './components/about/about.jsx'
import { LoginForm, SignupForm } from './components/login/login.jsx'
import { SubregionContext } from './components/regions/SubregionContext.jsx'
import SubregionView from './components/regions/SubregionView.jsx';
import Subregion from './components/regions/regions.jsx';
// import { CombinedContextProvider } from './components/combinedContext/combinedContext.jsx';


function App() {

  const value = useContext(GrapeContext)
  const [user, setUser] = useState([null])
  const subRegionvalue = useContext(SubregionContext)

 
  useEffect(() => {
    // 'wristband'
    fetch("/check_session")
    .then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (

    <div className="navbar">
      <Navbar />
      <div className="app-container">
      <Routes>
        <Route path='/about' element={<About />} />
        <Route className='map-container' path='/map' element={<MapContainer />} />
        <Route path="/grapes/:grapeId" element={<GrapeView />} />  
        <Route path="/grapes" element={<Grapes />} /> 
        <Route path='/subregions/:subregionId' element={<SubregionView />} />
        <Route path='/subregions' element={<Subregion />} />
        <Route path='login' element={<LoginForm />} />
        <Route path='/signup' element={<SignupForm />} />
      </Routes>
      </div>
    </div>


  );
}


export default App;
