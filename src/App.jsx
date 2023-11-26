import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import Nav from './ExcCode/Nav';
import DogsList from './ExcCode/DogsList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <DogsList />
      </BrowserRouter>
    </div>
  );
}

export default App;
