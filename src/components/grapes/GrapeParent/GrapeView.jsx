import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { GrapeContext } from './GrapeContext';

function GrapeView() {
  const  {grapeId} = useParams();
  const [selectedGrape, setSelectedGrape] = useState(0);
//   console.log(selectedGrapeId)

  useEffect(() => {
    // console.log("Selected Grape ID:", selectedGrapeId);
    const fetchSelectedGrape = async () => {
      if (grapeId) {
        try {
          const response = await fetch(`http://127.0.0.1:5555/grapes/${grapeId}`);
          const data = await response.json();
          setSelectedGrape(data);
        } catch (error) {
          console.error('Error fetching selected grape:', error);
        }
      }
    };

    fetchSelectedGrape();
  }, [grapeId]);

  return (
    <div className='grape-name-header fixed flex items-center flex-col top-02  '>
      <h1>{selectedGrape.name}</h1>
          <img src={selectedGrape.image}/>
          <p>{selectedGrape.subregion}</p>

        </div>

  );
}

export default GrapeView;





// import React, { useContext, useEffect, useState } from 'react';
// import { GrapeContext } from './GrapeContext';

// function GrapeView({grape}) {
//   const { grapes, setSelectedGrapeId } = useContext(GrapeContext);
//   const [selectedGrape, setSelectedGrape] = useState(null);

//   // Fetch selected grape data on component mount or update
//   useEffect(() => {
//     const fetchSelectedGrape = async () => {
//     //   if (selectedGrapeId) {
//         try {
//         //   const response = await fetch(`http://127.0.0.1:5555/grapes/${selectedGrapeId}`);
//           const response = await fetch(`http://127.0.0.1:5555/grapes/${window.location.href.slice(-1)}`);
//           const data = await response.json();
//           setSelectedGrape(data);
//         } catch (error) {
//           console.error('Error fetching selected grape:', error);
//         }
//     //   }
//     };

//     fetchSelectedGrape();
//   }, [selectedGrape]); // Re-run effect when selectedGrapeId changes

//   return (
//     <div>
//       <h2>Selected Grape</h2>
//       {selectedGrape ? (
//         <div>
//           <p>Name: {selectedGrape.name}</p>
//           {/* Display other grape details here */}
//         </div>
//       ) : (
//         <p>No grape selected</p>
//       )}
//     </div>
//   );
// }

// export default GrapeView;




// import React, { useContext, useEffect, useState } from 'react';
// import { GrapeContext } from './GrapeContext';

// function GrapeView() {
//   const { grapes, setSelectedGrapeId } = useContext(GrapeContext);
//   const [selectedGrape, setSelectedGrape] = useState(null);

//   // Fetch selected grape data on component mount or update
//   useEffect(() => {
//     const fetchSelectedGrape = async () => {
//       if (setSelectedGrapeId) {
//         const response = await fetch(`http://127.0.0.1:5555/grapes/${setSelectedGrapeId}`);
//         const data = await response.json();
//         setSelectedGrape(data);
//       }
//     };

//     fetchSelectedGrape();
//   }, [setSelectedGrapeId]); // Re-run effect when setSelectedGrapeId changes

//   return (
//     <div>
//       <h2>Selected Grape</h2>
//       {selectedGrape ? (
//         <div>
//           <p>Name: {selectedGrape.name}</p>
//           {/* Display other grape details here */}
//         </div>
//       ) : (
//         <p>No grape selected.</p>
//       )}
//     </div>
//   );
// }

// export default GrapeView;
