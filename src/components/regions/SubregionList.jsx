import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SubregionContext } from './SubregionContext';

function SubregionsList({ asLink = false }) {
  const { filteredSubregions, setSelectedSubregionId } = useContext(SubregionContext);

  const handleSubregionClick = (subregionId) => {
    console.log('subregionid', subregionId)
    
    setSelectedSubregionId(subregionId);
  };
  console.log(filteredSubregions.id)

  return (
    <div className="grid grid-cols-3 gap-4 pt-4">
      {filteredSubregions.sort((a, b) => a.name.localeCompare(b.name)).map((subregion) => (
        <li
          key={subregion.id}
          className="flex items-center p-2 rounded-md bg-gray-100 hover:bg-gray-200"
        >
          {asLink ? (
            <Link
              to={`/subregions/${subregion.id}`}
              onClick={() => handleSubregionClick(subregion.id)}
              className="text-blue-500 hover:underline"
            >
              {subregion.name}
            </Link>
          ) : (
            <span id={subregion.id} onClick={() => handleSubregionClick(subregion.id)}>
              {subregion.name}
            </span>
          )}
        </li>
      ))}
    </div>
  );
}

export default SubregionsList;


// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { SubregionContext } from './SubregionContext';

// function SubregionsList({ asLink = false }) {
//   const { filteredSubregions, setSelectedSubregionId } = useContext(SubregionContext);

//   const handleSubregionClick = (subregionId) => {
//     setSelectedSubregionId(subregionId);
//   };
// console.log(filteredSubregions)
//   return (
//     <div>
//       <ul>
//         {filteredSubregions.map((subregion) => (
//           <li key={subregion.id}>
//             {asLink ? (
//               <Link
//                 to={`/subregions/${subregion.id}`}
//                 onClick={() => handleSubregionClick(subregion.id)}
//               >
//                 {subregion.name}
//               </Link>
//             ) : (
//               <span id={subregion.id} onClick={() => handleSubregionClick(subregion.id)}>
//                 {subregion.name}
//               </span>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default SubregionsList;