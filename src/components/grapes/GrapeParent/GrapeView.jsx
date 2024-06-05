import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './grapeview.css';


function GrapeView() {
  const  {grapeId} = useParams('0');
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
      <div className='grape-name-header fixed flex items-center flex-col top-02 font-display text-6xl'>
        <h1>{selectedGrape.name}</h1>
        <img className='grape-img size-1/5' src={selectedGrape.image} />
        <p>{selectedGrape.subregion}</p>
        {/* {console.log('name', selectedGrape.name?.replaceAll(" ", "_"))}
        {selectedGrape.name?.replaceAll(" ", "_")} */}
      <div className="wiki-window">
        <a href={`https://www.wikipedia.org/wiki/${selectedGrape.name?.replaceAll(" ", "_")}`} target="_blank" rel="noopener noreferrer">
          <iframe className='grape-wiki'src={`https://www.wikipedia.org/wiki/${selectedGrape.name?.replaceAll(" ", "_")}`} title="Wiki for {selectedGrape.name}"></iframe>
        </a>
        </div>
      </div>
    );
}

export default GrapeView;





