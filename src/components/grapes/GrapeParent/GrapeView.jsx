import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function GrapeView() {
  const  {grapeId} = useParams();
  const [selectedGrape, setSelectedGrape] = useState(0);


  useEffect(() => {;
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





