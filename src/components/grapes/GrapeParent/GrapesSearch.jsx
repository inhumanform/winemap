import React, { useState, useContext, useEffect } from 'react';
import { GrapeContext } from './GrapeContext';

function GrapesSearch() {
  // const { searchQuery, handleSearch } = useContext(GrapeContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredGrapes, setFilteredGrapes] = useState([]);
  const [grapes, setGrapes] = useState([]);


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

  return (
    <div>
      <label htmlFor="grape-search" className="block mb-2 text-sm font-medium text-emerald-900 dark:text-emerald-900">Search Grapes:</label>
      <input
        type="text"
        id="grape-search"
        className="coolGray-500 border border-gray-300 "
        value={searchQuery}
        onChange={(event) => handleSearch(event.target.value)}
      />
    </div>
  );
}

export default GrapesSearch;
