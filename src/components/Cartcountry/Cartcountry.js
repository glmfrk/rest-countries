import React from 'react';
import './Cartcountry.css';

const Cartcountry = (props) => {
    const cartCountry = props.cartCountry;
    // let totalPopulation = 0;
    // for (let i = 0; i < cartCountry.length; i++) {
    //     const selectCountry = cartCountry[i];
    //     totalPopulation = totalPopulation + selectCountry.population;
        
    // }
    const totalPopulation = cartCountry.reduce( (sum, country) => sum + country.population, 0)

    return (
        <div>
            <h3>This is Cart Country : {cartCountry.length} </h3>
            <p> This is population count of the country : {totalPopulation}</p>
        </div>
    );
};

export default Cartcountry;