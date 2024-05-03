import React, { useContext } from 'react';
import { GrapeContext } from './GrapeContext';

function GrapesSearch() {
  const { searchQuery, handleSearch } = useContext(GrapeContext);

  return (
    <div>
      <label htmlFor="grape-search" class="block mb-2 text-sm font-medium text-emerald-900 dark:text-emerald-900">Search Grapes:</label>
      <input
        type="text"
        id="grape-search"
        class="coolGray-500 border border-gray-300 "
        value={searchQuery}
        onChange={(event) => handleSearch(event.target.value)}
      />
    </div>
  );
}

export default GrapesSearch;
