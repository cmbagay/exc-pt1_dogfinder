import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios'

import Nav from './ExcCode/Nav';
import DogsList from './ExcCode/DogsList';
import { useState, useEffect } from 'react';

function App() {
  const [dogs, setDogs] = useState([])

  useEffect(() => {
    async function loadDogs() {
      const res = await axios.get("http://localhost:5001/dogs")
      console.log(`this is the data, ${JSON.stringify(res.data)}`);
      setDogs(res.data)
    }
    loadDogs();
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <DogsList dogs={dogs} />

      </BrowserRouter>
    </div>
  );
}

export default App;
