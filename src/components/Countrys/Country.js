import React from 'react';

const Country = (props) => {
    const {name, region,population,flag} = props.country;
    console.log(props.country)
    return (
        <div>
           <h2>This is country : {name} </h2>
           <h4>Population : {population}</h4>
           <small>Region : {region}</small> 
           <p> flags : <img height="100" width="200" src={flag} alt="country flags" srcSet=""/> </p>
        </div>
    );
};

export default Country;