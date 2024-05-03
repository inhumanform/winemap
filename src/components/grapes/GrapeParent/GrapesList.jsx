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



// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import { GrapeContext } from './GrapeContext';
// // import { GrapeView } from './GrapeView';

// function GrapesList({ asLink = false }) {
//   const { filteredGrapes, setSelectedGrapeId, selectedGrapeId } = useContext(GrapeContext);

//   // const handleGrapeClick = (grapeId) => {
//   const handleGrapeClick = (event) => {
//     const grapeId = event.target.id
//     console.log(grapeId)
//     setSelectedGrapeId(grapeId); // Update context value on click
//   };

//   return (
//     <div>
//       <ul>
//         {filteredGrapes.map((grape) => (
//           // <li key={grape.id} >
//            <li key={grape.id}  >
//             {asLink ? (
//               <Link to={`/grapes/${grape.id}`} id = {grape.id} onClick={(e) => handleGrapeClick(e)}>
//                 {grape.name}
//               </Link>
//             ) : (
//               <span id={grape.id} >{grape.name}</span>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default GrapesList;





// import React, { useContext } from 'react';
// import { GrapeContext } from './GrapeContext';

// function GrapesList({ asLink = false }) {
//   const { grapes, filteredGrapes, searchQuery, setSelectedGrapeId } = useContext(GrapeContext);

//   const handleGrapeClick = (grapeId) => {
//     setSelectedGrapeId(grapeId); // Update context value on click
//   };

//   return (
//     <div>
//       <ul>
//         {filteredGrapes.map((grape) => (
//           <li key={grape.id}>
//             {asLink ? (
//               <a href="" onClick={() => handleGrapeClick(grape.id)}>{grape.name}</a>
//             ) : (
//               <span>{grape.name}</span>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default GrapesList;





// import React, { useContext, useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { GrapeContext } from './GrapeContext'; // Import GrapeContext

// const Grapes = () => {
//   const { grapes, fetchGrapes, getGrapeById } = useContext(GrapeContext);
//   const { grapeId } = useParams(); // Access captured grape ID
//   const [selectedGrape, setSelectedGrape] = useState(null);

//   // Fetch grapes on initial render (if not already fetched)
//   useEffect(() => {
//     if (grapes.length === 0) {
//       fetchGrapes();
//     }
//   }, [grapes, fetchGrapes]);

//   // Fetch specific grape details if grapeId is available
//   useEffect(() => {
//     if (grapeId) {
//       const foundGrape = getGrapeById(grapeId);
//       setSelectedGrape(foundGrape);
//     }
//   }, [grapeId, getGrapeById]);

//   return (
//     <div className="grapes-container mx-auto mt-4">
//       {/* Search bar component (if applicable) */}
//       {selectedGrape ? (
//         <div>
//           <h2>{selectedGrape.name}</h2>  {/* Display grape name */}
//           {/* Display other grape details (e.g., description, regions) */}
//         </div>
//       ) : (
//         <ul className="grape-list grid grid-cols-1 md:grid-cols-3 gap-4">
//           {grapes.map((grape) => (
//             <li key={grape.id}>
//               <Link to={`/grapes/${grape.id}`}>{grape.name}</Link> {/* Link to specific grape details */}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Grapes;



