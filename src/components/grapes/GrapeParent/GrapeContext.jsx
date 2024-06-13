import React, { createContext, useState, useEffect } from 'react';

const GrapeContext = createContext();

const GrapeProvider = ({ children }) => {
  const [grapes, setGrapes] = useState([]);
  const [filteredGrapes, setFilteredGrapes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGrapeId, setSelectedGrapeId] = useState(0); 


  const fetchGrapes = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5555/grapes');
      const data = await response.json();
      setGrapes(data);
      setFilteredGrapes(data);
    } catch (error) {
      console.error('Error fetching grapes:', error);
    }
  };

  const addGrape = async (newGrape) => {
    try {
      const response = await fetch('http://127.0.0.1:5555/grapes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newGrape),
      });

      if (!response.ok) {
        throw new Error('Error adding grape');
      }

      const data = await response.json();
      setGrapes([...grapes, data]);
      setFilteredGrapes([...filteredGrapes, data]);
    } catch (error) {
      console.error('Error adding grape:', error);
    }
  };

  const updateGrape = async (id, updatedGrape) => {
    try {
      const response = await fetch(`http://127.0.0.1:5555/grapes/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedGrape),
      });

      if (!response.ok) {
        throw new Error('Error updating grape');
      }

      const data = await response.json();
      const updatedGrapes = grapes.map((grape) =>
        grape.id === id ? data : grape
      );
      setGrapes(updatedGrapes);
      setFilteredGrapes(updatedGrapes);
    } catch (error) {
      console.error('Error updating grape:', error);
    }
  };

  const deleteGrape = async (id) => {
    try {
      const response = await fetch(`http://127.0.0.1:5555/grapes/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Error deleting grape');
      }

      const updatedGrapes = grapes.filter((grape) => grape.id !== id);
      setGrapes(updatedGrapes);
      setFilteredGrapes(updatedGrapes);
    } catch (error) {
      console.error('Error deleting grape:', error);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = grapes.filter((grape) =>
      grape.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredGrapes(filtered);
  };

  useEffect(() => {
    fetchGrapes();
  }, []);

  const value = {
    grapes,
    filteredGrapes,
    searchQuery,
    fetchGrapes,
    addGrape,
    updateGrape,
    deleteGrape,
    handleSearch,
    setSelectedGrapeId,
    selectedGrapeId,
  };

  return (
    <GrapeContext.Provider value={value}>{children}</GrapeContext.Provider>
  );
};

export { GrapeContext, GrapeProvider };




