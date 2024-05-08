import './index.css'
import Navbar from './components/navbar/navbar.jsx';
import MapContainer from './components/map/map.jsx';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/home.jsx'
import Grapes from './components/grapes/GrapeParent/grapes.jsx'
import GrapeView from './components/grapes/GrapeParent/GrapeView.jsx'
import { GrapeContext } from './components/grapes/GrapeParent/GrapeContext.jsx';
import { useContext } from 'react';
import About from './components/about/about.jsx'
import Regions from './components/regions/regions.jsx'
import { LoginForm, SignupForm } from './components/login/login.jsx'


function App() {

  const value = useContext(GrapeContext)
  const [user, setUser] = useState([null])
  console.log(value)

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
        <Route path='/' element={<Home />} />
        <Route path='/map' element={<MapContainer />} />
        <Route path="/grapes/:grapeId" element={<GrapeView />} />  
        <Route path="/grapes" element={<Grapes />} /> 
        <Route path='/regions' element={<Regions />} />
        <Route path='/about' element={<About />} />
        <Route path='login' element={<LoginForm />} />
        <Route path='/signup' element={<SignupForm />} />
      </Routes>
      </div>
    </div>

  );
}


export default App;
