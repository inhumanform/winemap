
import React, { useState, useEffect } from 'react';

function Grapes() {
  const [grapes, setGrapes] = useState([]);
  const [filteredGrapes, setFilteredGrapes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:5555/grapes')
      .then(response => response.json())
      .then(data => {
        setGrapes(data);
        setFilteredGrapes(data); 
      })
      .catch(error => {
        console.error('Error fetching grapes:', error);
      });
  }, []);

  const handleSearch = () => {
    const query = searchQuery.trim().toLowerCase();
    if (query === '') {
      setFilteredGrapes(grapes); 
    } else {
      const filtered = grapes.filter(grape =>
        grape.name.toLowerCase().includes(query) ||
        grape.color.toLowerCase().includes(query) ||
        grape.subregions.toLowerCase().includes(query)
      );
      setFilteredGrapes(filtered);
    }
  };

  const handleChange = event => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="grape-container fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
      <h1>Grapes</h1>
      <div className="searchbar-container fixed right-0 top-0 mr-4 mt-4">
        <input
          type="text"
          placeholder="Search grapes..."
          value={searchQuery}
          onChange={handleChange}
        />
        <button onClick={handleSearch}>Search</button>
        <div className="dropdown">
          {searchQuery !== '' && (
            <ul>
              {filteredGrapes.map(grape => (
                <li key={grape.id}>
                  {grape.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="grape-info-container flex flex-col items-center">
        <ul>
          {filteredGrapes.map(grape => (
            <li key={grape.id} className="grape-picture">
              <img src={grape.image} alt={grape.name} />
              <h4>{grape.name}</h4>
              <p>{grape.color}</p>
              <p>{grape.subregions}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Grapes;






  //   return (
  //       <div className="grape-container fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
  //         <p>Grape Container Goes Here</p>
  //       <li className="grape-picture">
  //           <img src={'https://media.istockphoto.com/id/1035264688/photo/red-grapes-in-the-vineyard.jpg?s=1024x1024&w=is&k=20&c=ffTeCj_uXurPeMxYnI7RrZ951Q3bf7PbvZjOuFj_Ra8='} alt={name} />
  //       <h4>{name}</h4>
  //       </li>
  //       </div>
  //   );
  // }
  // export default Grapes;


     // const { id, name, color, subregions } = grapes;
    // const [grapes, setGrapes] = useState([]);
    // const [searchTerm, setSearchTerm] = useState("");

    // useEffect(() => {
    //     fetch('/grapes')
    //     .then((r) => r.json())
    //     .then((grapesArray) => {
    //         setGrapes(grapesArray);
    // });
    // }, []);

    // const displayedGrape = grapes.filter((grapes) => {
    //     return grapes.name.toLowerCase().inckudes(searchTerm.toLowerCase());

    // });

    // function Grapes() {
    //   const [grapes, setGrapes] = useState([]);
    //   const [filteredGrapes, setFilteredGrapes] = useState([]);
    //   const [searchQuery, setSearchQuery] = useState('');
    
    //   useEffect(() => {
    //     fetch('/grapes')
    //       .then(response => response.json())
    //       .then(data => {
    //         setGrapes(data);
    //         setFilteredGrapes(data); // Initialize filteredGrapes with all grapes initially
    //       })
    //       .catch(error => {
    //         console.error('Error fetching grapes:', error);
    //       });
    //   }, []);
   