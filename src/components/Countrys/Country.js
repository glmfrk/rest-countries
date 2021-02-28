import React from 'react';
import "./Country.css"

const Country = (props) => {
    const {name, region,population,flag} = props.country;
    // console.log(props.country)
    const handleAddCountry = props.handleAddCountry;
    return (
        <div className="content-wrapper">
           <h2>This is country : {name} </h2>
           <h4>Population : {population}</h4>
           <small>Region : {region}</small> 
           <p> flags : <img height="100" width="200" src={flag} alt="country flags" srcSet=""/> </p>
           <button onClick={() => handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;