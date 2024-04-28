import './index.css'
import Navbar from '/home/drewnix/Development/code/phase-5/phase5project/winemap/src/components/navbar.jsx';
import MapContainer from '/home/drewnix/Development/code/phase-5/phase5project/winemap/src/components/map.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

    return (
      <React.StrictMode>
      <div className="flex">
      <Navbar />
      <MapContainer />
      //     </div>
      <h1>Literally Anything Please</h1>
      </ React.StrictMode>
        
    );
  }


export default App;
