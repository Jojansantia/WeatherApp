import React from 'react';

const Results = ({result}) => {

  const { name, main } = result;
  const kelvin = 273.15;

  let temp = parseFloat( main.temp - kelvin, 10 ).toFixed(2)
  let tempMin = parseFloat( main.temp_min - kelvin, 10 ).toFixed(2)
  let tempMax = parseFloat( main.temp_max - kelvin, 10 ).toFixed(2)

  return ( 
    <>
      <div className=" p-2 col-md-6 text-center mt-2 border-right border-left black-text" >
        <h2>The Weather in  {name} is </h2>
        <p>
          { temp }  <span> &#x2103; </span>
        </p>
        <p>
          {`Min Temperature: ${tempMin}`}  <span> &#x2103; </span>
        </p>
        <p>
          {`Max Temperature: ${tempMax}`}  <span> &#x2103; </span>
        </p>
      </div>
    </>
  );
}
 
export default Results;