import React, { useState } from 'react';

const Data = ({setSearch, setConsult, Alerta}) => {

  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')

  const handleSumit = (e) =>  {
    e.preventDefault();

    if(city.trim() === '' && country.trim() === ''){
      Alerta('All fields are required.')
      return
    }
    if(city.trim() === '' ){
      Alerta('City is required.')
      return
    }
    if(country.trim() === '' ){
      Alerta('Country is required.')
      return
    }

    let info = {
      city,
      country
    }
    setSearch(info);
    setConsult(true)
  }

  return ( 
    <>
      <div className="p-2 w-full col-md-6 border-right border-left mt-2" >
        <form onSubmit={handleSumit}>

          <div className="form-group d-flex my-4">
            <label className="my-auto mr-2" htmlFor="city">City</label>
            <input 
              type="text" className="form-control" id="city" 
              placeholder="Enter a city"
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <div className="form-group d-flex my-4">
            <label className="my-auto mr-2" htmlFor="country">Country</label>
            <select 
              onChange={(e) => setCountry(e.target.value)} 
              className="form-control " id="country"
            >
              <option value="" >-- Select a country --</option>
              <option value="US">Estados Unidos</option>
              <option value="MX">México</option>
              <option value="AR">Argentina</option>
              <option value="CO">Colombia</option>
              <option value="CR">Costa Rica</option>
              <option value="ES">España</option>
              <option value="PE">Perú</option>
            </select>
          </div>

          <div className="text-center my-4">
            <button type="submit" className="btn btn-secondary col-5 ">Search</button>
          </div>

        </form>
      </div>
    </>
  );
}
 
export default Data;