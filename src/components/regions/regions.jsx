import React, { useState, useEffect } from 'react';

  function Regions() {

    const [regions, setRegions] = useState([]);
    const [filteredRegions, setFilteredRegions] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
  
    useEffect(() => {
      fetch('http://127.0.0.1:5555/subregions')
        .then(response => response.json())
        .then(data => {
          // console.log('data', data)
          setRegions(data);
          setFilteredRegions(data); 
        })
        .catch(error => {
          console.error('Error fetching regions:', error);
        });
    }, []);

    const handleSearch = () => {
      const query = searchQuery.trim().toLowerCase();
      if (query === '') {
        setFilteredRegions(regions); 
      } else {
        const filtered = regions.filter(region =>
          region.name.toLowerCase().includes(query)
        );
        setFilteredRegions(filtered);
      }
    };
  
    const handleChange = event => {
      setSearchQuery(event.target.value);
    };
  
    return (
      <div className="region-container fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <h1>Regions</h1>
        <div className="searchbar-container fixed right-0 top-0 mr-4 mt-4">
          <input
            type="text"
            placeholder="Search regions..."
            value={searchQuery}
            onChange={handleChange}
          />
          <button onClick={handleSearch}>Search</button>
          <div className="dropdown">
            {searchQuery !== '' && (
              <ul>
                {filteredRegions.map(region => (
                  <li key={region.id}>
                    {region.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="region-info-container flex flex-col items-center">
          <ul>
            {filteredRegions.map(region => (
              <a href = '/'key={region.id} >
                <h4>{region.name}</h4>
              </a>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  
  
  
  
    // return (
    //     <div className="regions-container fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
    //       <p>Region Container</p>
    //       <li className="region-picture">
    //         <img src={'https://bordeauxwinevacations.com/wp-content/uploads/2023/10/BWV-Regions-Medoc.jpg'} alt={name} />
    //     <h4>{name}</h4>
    //     </li>
    //     </div>
    //   );
  // }
  export default Regions;