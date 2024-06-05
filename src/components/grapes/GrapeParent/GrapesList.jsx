import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GrapeContext } from './GrapeContext';

function GrapesList({ asLink = false }) {
  const { filteredGrapes, setSelectedGrapeId } = useContext(GrapeContext);

  const handleGrapeClick = (grapeId) => {
    setSelectedGrapeId(grapeId);
  };

  return (
    <div className="grid grid-cols-3 gap-4 pt-4">
      {filteredGrapes.sort((a, b) => a.name.localeCompare(b.name)).map((grape) => (
        <li
          key={grape.id}
          className="flex items-center p-2 rounded-md bg-gray-100 hover:bg-gray-200"
        >
          {asLink ? (
            <Link
              to={`/grapes/${grape.id}`}
              onClick={() => handleGrapeClick(grape.id)}
              className="text-blue-500 hover:underline"
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
    </div>
  );
}

export default GrapesList;






// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { GrapeContext } from './GrapeContext';

// function GrapesList({ asLink = false }) {
//   const { filteredGrapes, setSelectedGrapeId } = useContext(GrapeContext);

//   const handleGrapeClick = (grapeId) => {
//     setSelectedGrapeId(grapeId);
//   };
//   console.log(filteredGrapes)
//   return (
//     <div >
//       <ul>
//         {filteredGrapes.map((grape) => (
//           <li key={grape.id}>
//             {asLink ? (
//               <Link
//                 to={`/grapes/${grape.id}`}
//                 onClick={() => handleGrapeClick(grape.id)}
//               >
//                 {grape.name}
//               </Link>
//             ) : (
//               <span id={grape.id} onClick={() => handleGrapeClick(grape.id)}>
//                 {grape.name}
//               </span>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default GrapesList;

// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { GrapeContext } from './GrapeContext';

// function GrapesList({ asLink = false, searchQuery }) {
//   const { grapes, setSelectedGrapeId } = useContext(GrapeContext);

//   const handleGrapeClick = (grapeId) => {
//     setSelectedGrapeId(grapeId);
//   };

//   const filteredGrapes = grapes.filter((grape) =>
//     grape.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div>
//       <ul>
//         {filteredGrapes.map((grape) => (
//           <li key={grape.id}>
//             {asLink ? (
//               <Link
//                 to={`/grapes/${grape.id}`}
//                 onClick={() => handleGrapeClick(grape.id)}
//               >
//                 {grape.name}
//               </Link>
//             ) : (
//               <span id={grape.id} onClick={() => handleGrapeClick(grape.id)}>
//                 {grape.name}
//               </span>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default GrapesList;



