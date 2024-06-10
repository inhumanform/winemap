import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './subregion.css';
import './regionview.css'


function SubregionView() {
  const  {subregionId} = useParams('0');
  const [selectedSubregion, setSelectedSubregion] = useState(0);
  const fetchSelectedSubregion = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:5555/subregions/${subregionId}`);
      const data = await response.json();
      console.log('Fetched subregion:', data)
      setSelectedSubregion(data);
    } catch (error) {
      console.error('Error fetching selected subregion:', error);
    }
};


  useEffect(() => {;

    if (subregionId) { 
      fetchSelectedSubregion();
    }
  }, [subregionId]);

  //   const fetchSelectedSubregion = async () => {
  //     if (subregionId) {
  //       try {
  //         const response = await fetch(`http://127.0.0.1:5555/subregions/${subregionId}`);
  //         const data = await response.json();
  //         console.log('Fetched subregion:', data)
  //         setSelectedSubregion(data);
  //       } catch (error) {
  //         console.error('Error fetching selected subregion:', error);
  //       }
  //     }
  //   };

  //   fetchSelectedSubregion();
  // }, [subregionId]);

  // console.log('Selected Subregion State:', selectedSubregion);



  return (
    
      <div className='subregion-name-header fixed flex items-center flex-col top-02 font-display text-6xl'>
        <h1>{selectedSubregion.name}</h1>
        <p>{selectedSubregion.Within}</p>

      <div className="wiki-window">
        <a href={`https://www.wikipedia.org/wiki/${selectedSubregion.name?.replaceAll(" ", "_")}_AVA`} target="_blank" rel="noopener noreferrer">
          <iframe className='subregion-wiki'src={`https://www.wikipedia.org/wiki/${selectedSubregion.name?.replaceAll(" ", "_")}_AVA`} title="Wiki for {selectedSubregion.name}"></iframe>
        </a>
        </div>
      </div>
    );
}

export default SubregionView;