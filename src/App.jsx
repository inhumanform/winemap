import './index.css'
import Navbar from './components/navbar/navbar.jsx';
import MapContainer from '/home/drewnix/Development/code/phase-5/phase5project/winemap/src/components/map.jsx';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '/home/drewnix/Development/code/phase-5/phase5project/winemap/src/components/home/home.jsx'

function App() {

    return (
      <React.StrictMode>
      <div className="flex">
      <Navbar />
      </div>
      <div>
      <MapContainer />
      //     </div>
      </ React.StrictMode>
        
    );
  }

// function App() {
// return (
//   <Router>
//       <Navbar />
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/map' element={<MapContainer />} />
//         <Route path='/grapes' element={<Grapes />} />
//         <Route path='/regions' element={<Regions />} />
//         <Route path='/about' element={<About />} />
//         <Route path='/login' element={<Login />} />
//       </Routes>
//   </Router>
// );
// }


export default App;
