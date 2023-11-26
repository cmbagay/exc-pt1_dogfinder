import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import DogsList from './ExcCode/DogsList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <DogsList />
      </BrowserRouter>
    </div>
  );
}

export default App;
