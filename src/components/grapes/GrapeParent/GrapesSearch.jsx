import React, { useState, useContext, useEffect } from 'react';
import { GrapeContext } from './GrapeContext';
import GrapesList from './GrapesList';

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

  // const handleSearch = (event) => {
  //   event.preventDefault(); // Prevent default form submission
  //   const query = searchQuery.trim().toLowerCase();
  //   if (query === '') {
  //     setFilteredGrapes(grapes);
  //   } else {
  //     const filtered = grapes.filter(
  //       (grape) =>
  //         grape.name.toLowerCase().includes(query) ||
  //         grape.color.toLowerCase().includes(query) ||
  //         grape.subregions.toLowerCase().includes(query)
  //     );
  //     setFilteredGrapes(filtered);
  //   }
  // };

  const handleSearch = (event) => {
    event.preventDefault(); // Prevent default form submission
    const query = searchQuery.trim().toLowerCase();
    if (query === '') {
      setFilteredGrapes(grapes);
    } else {
      const filtered = grapes.filter(
        (grape) =>
          (grape.name?.toLowerCase().includes(query) || // Optional chaining here
          grape.color?.toLowerCase().includes(query) ||
          (grape.subregions && grape.subregions.join(', ').toLowerCase().includes(query))) // Check if subregions exists before accessing it
      );
      setFilteredGrapes(filtered);
    }
  };
  


  return (
    <div>
      
<form onSubmit={handleSearch} className="max-w-md mx-auto">   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-emerald-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500" placeholder="Search Grapes..." value={searchQuery} onChange={(e) =>setSearchQuery(e.target.value)} required/>
        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">Search</button>
    </div>
</form>
{/* <GrapesList searchQuery={searchQuery} /> */}
    </div>
  );
}

export default GrapesSearch;
