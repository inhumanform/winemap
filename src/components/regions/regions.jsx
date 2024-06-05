import React from 'react';
import { SubregionProvider } from './SubregionContext';
import SubregionList from './SubregionList';
import SubregionView from './SubregionView';
import SubregionSearch from './SubregionSearch';


function Subregion() {
  return (
    <SubregionProvider>
      <SubregionSearch />
      <SubregionList asLink={true} />
      <SubregionView />
    </SubregionProvider>
  );
}

export default Subregion;

  
  
