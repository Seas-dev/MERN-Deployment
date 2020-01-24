import React from 'react';
import { Router } from '@reach/router';
import CreatePet from './components/CreatePet';
import AllPets from './components/AllPets';
import EditPet from './components/EditPet';
import PetDetails from './components/PetDetails';

function App() {
  return (
    <div className="container">
      <h1>Pet Shelter</h1>
      <Router>
        <AllPets path="/" />
        <CreatePet path="/pets/new" />
        <EditPet path="/pets/:_id/edit" />
        <PetDetails path="/pets/:_id" />
      </Router>  
      
    </div>
  );
}

export default App;
