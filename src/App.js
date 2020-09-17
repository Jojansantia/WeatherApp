import React, { useState, useEffect } from 'react';

import Results from './components/Results';
import Data from './components/Data';
import Header from './components/Header';
import Message from './components/Message';

function App() {

  const [consult, setConsult] = useState(false);
  const [result, setResult] = useState({});
  const [search, setSearch] = useState({ 
      city: '',
      country: ''
    });

  const { city, country } = search

  useEffect(() => {
    const consultAPI = async () => {

      if(consult){
      
        const appId = '2e2fe3eb83fbb700e42c8fda8e2794bd';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;

        const respuesta = await fetch(url);
        const res = await respuesta.json();

        setResult(res)
        setConsult(false)

        // if(resultado.cod === "404") {
        //     guardarError(true);
        // } else {
        //     guardarError(false);
        // }
      }
    }
    consultAPI();
    // eslint-disable-next-line
  },[consult]);


  return (
    <div className="container border text-center mt-5 p-2 font-weight-bold text-monospace text-uppercase">
      <Header/>
      <div className="d-flex justify-content-center flex-fill">
        <Data setSearch={setSearch} setConsult={setConsult} />
        <Results/>
      </div>
    </div>
  );
}

export default App;
