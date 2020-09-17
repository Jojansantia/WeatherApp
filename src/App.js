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
  const [color, setColor] = useState('#58D68D')

  const { city, country } = search

  const changeColor = (temperature) => {
console.log(typeof(temperature), temperature);

    if(temperature <= 10){
console.log("entre1");
      setColor('#19BFCB')
    }else if( temperature > 10 && temperature <= 25){
console.log("entre2");
      setColor('#58D68D')
    }else if(temperature > 25){
console.log("entre");
      setColor('#FA8072')
    }
  }

  useEffect(() => {
    const consultAPI = async () => {

      if(consult){
      
        const appId = '2e2fe3eb83fbb700e42c8fda8e2794bd';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;

        const respuesta = await fetch(url);
        const res = await respuesta.json();

        setResult(res)
        setConsult(false)
        let temperature = parseInt( res.main.temp - 273.15, 10 )
        changeColor(temperature)

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
    <div className="container border mt-5 p-2 font-weight-bold text-white shadow rounded-lg " style={{background: color}}>
        <Header/>
      <div className="d-flex justify-content-center flex-fill">
        <Data setSearch={setSearch} setConsult={setConsult} />
        <Results result={result} setColor={setColor}/>
      </div>
    </div>
  );
}

export default App;
