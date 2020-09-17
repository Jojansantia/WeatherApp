import React, { useState, useEffect } from 'react';

import Results from './components/Results';
import Data from './components/Data';
import Header from './components/Header';
import Message from './components/Message';

function App() {

  const [consult, setConsult] = useState(false);
  const [msg, setMsg] = useState('')
  const [result, setResult] = useState({});
  const [search, setSearch] = useState({ 
      city: '',
      country: ''
    });
  const [color, setColor] = useState('#58D68D')

  const { city, country } = search

  const changeColor = (temperature) => {
    if(temperature <= 10){
      setColor('#19BFCB')
    }else if( temperature > 10 && temperature <= 25){
      setColor('#58D68D')
    }else if(temperature > 25){
      setColor('#FA8072')
    }
  }

  const Alerta = (message) => {
    setMsg(message);
    setTimeout(() => {
      setMsg('');
    }, 3000);
  }

  useEffect(() => {
    const consultAPI = async () => {

      if(consult){
      
        const appId = '2e2fe3eb83fbb700e42c8fda8e2794bd';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;

        const respuesta = await fetch(url);
        const res = await respuesta.json();
        setConsult(false)

        if(respuesta.status === 404) {
          Alerta('No results found')
          return
        } else {
            setMsg('');
        }

        setResult(res)
        let temperature = parseInt( res.main.temp - 273.15, 10 )
        changeColor(temperature)
      }
    }
    consultAPI();
    // eslint-disable-next-line
  },[consult]);


  return (
    <div id="fondo" className="pt-5">
        <div className="container border p-2 font-weight-bold text-white shadow rounded-lg " style={{background: color}}>
            <Header/>
          <div className="d-flex justify-content-center flex-fill">
            <Data setSearch={setSearch} setConsult={setConsult} Alerta={Alerta} />
            <Results result={result} setColor={setColor}/>
          </div>
          <Message msg={msg} />
        </div>
    </div>
  );
}

export default App;
