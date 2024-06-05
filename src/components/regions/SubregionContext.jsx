import React, { createContext, useState, useEffect } from 'react';

const SubregionContext = createContext();

const SubregionProvider = ({ children }) => {
  const [subregions, setSubregions] = useState([]);
  const [filteredSubregions, setFilteredSubregions] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubregionId, setSelectedSubregionId] = useState(0);
//   console.log("Initial Selected Subregion ID:", selectedSubregionId);
//   console.log("setSelectedSubregionId function:", setSelectedSubregionId); 


  const fetchSubregions = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5555/subregions');
      const data = await response.json();
      setSubregions(data);
      setFilteredSubregions(data);
    } catch (error) {
      console.error('Error fetching subregions:', error);
    }
  };

  const addSubregion = async (newSubregion) => {
    try {
      const response = await fetch('http://127.0.0.1:5555/subregions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newSubregion),
      });

      if (!response.ok) {
        throw new Error('Error adding subregion');
      }

      const data = await response.json();
      setSubregions([...subregions, data]);
      setFilteredSubregions([...filteredSubregions, data]);
    } catch (error) {
      console.error('Error adding subregion:', error);
    }
  };

  const updateSubregion = async (id, updatedSubregion) => {
    try {
      const response = await fetch(`http://127.0.0.1:5555/subregions/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedSubregion),
      });

      if (!response.ok) {
        throw new Error('Error updating subregion');
      }

      const data = await response.json();
      const updatedSubregions = subregions.map((subregion) =>
        subregion.id === id ? data : subregion
      );
      setSubregions(updatedSubregions);
      setFilteredSubregions(updatedSubregions);
    } catch (error) {
      console.error('Error updating subregion:', error);
    }
  };

  const deleteSubregion = async (id) => {
    try {
      const response = await fetch(`http://127.0.0.1:5555/subregions/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Error deleting subregion');
      }

      const updatedSubregions = subregions.filter((subregion) => subregion.id !== id);
      setSubregions(updatedSubregions);
      setFilteredSubregions(updatedSubregions);
    } catch (error) {
      console.error('Error deleting subregion:', error);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = subregions.filter((subregion) =>
      subregion.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredSubregions(filtered);
  };

  useEffect(() => {
    fetchSubregions();
  }, []);

  const subRegionvalue = {
    subregions,
    filteredSubregions,
    searchQuery,
    fetchSubregions,
    addSubregion,
    updateSubregion,
    deleteSubregion,
    handleSearch,
    setSelectedSubregionId,
    selectedSubregionId,
  };

  return (
    <SubregionContext.Provider value={subRegionvalue}>{children}</SubregionContext.Provider>
  );
};

export { SubregionContext, SubregionProvider };




