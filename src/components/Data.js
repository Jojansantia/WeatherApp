import React, { useState } from 'react';

const Data = ({setSearch, setConsult}) => {

  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')

  const handleSumit = (e) =>  {
    e.preventDefault();
    let info = {
      city,
      country
    }
    setSearch(info);
    setConsult(true)
  }

  return ( 
    <>
      <div className="card p-2 w-full col-md-6" >
        <form onSubmit={handleSumit}>

          <div className="form-group">
            <label htmlFor="city">City</label>
            <input 
              type="text" className="form-control" id="city" 
              placeholder="Enter a city"
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="country">Country</label>
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

          <button type="submit" className="btn btn-primary col-md-5">Search</button>

        </form>
      </div>
    </>
  );
}
 
export default Data;