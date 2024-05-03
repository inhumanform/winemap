import React from 'react';
import { GrapeProvider } from './GrapeContext';
import GrapesList from './GrapesList';
import GrapeView from './GrapeView';
import GrapesSearch from './GrapesSearch';


function Grapes() {
  return (
    <GrapeProvider>
      <GrapesSearch />
      <GrapesList asLink={true} />
      <GrapeView />
    </GrapeProvider>
  );
}

export default Grapes;
