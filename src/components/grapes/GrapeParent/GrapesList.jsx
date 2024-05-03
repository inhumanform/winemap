import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GrapeContext } from './GrapeContext';

function GrapesList({ asLink = false }) {
  const { filteredGrapes, setSelectedGrapeId } = useContext(GrapeContext);

  const handleGrapeClick = (grapeId) => {
    setSelectedGrapeId(grapeId);
  };

  return (
    <div>
      <ul>
        {filteredGrapes.map((grape) => (
          <li key={grape.id}>
            {asLink ? (
              <Link
                to={`/grapes/${grape.id}`}
                onClick={() => handleGrapeClick(grape.id)}
              >
                {grape.name}
              </Link>
            ) : (
              <span id={grape.id} onClick={() => handleGrapeClick(grape.id)}>
                {grape.name}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GrapesList;


