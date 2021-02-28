import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Countrys/Country';
import Cartcountry from './components/Cartcountry/Cartcountry';


function App() {
  
  const [countries, setCountries] = useState([]); 
  const [cartCountry, setCartCountry] = useState([]);

  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
    .catch(error => console.log(error))
  }, [])

  const handleAddCountry = (country)=> {
    const newCartCountry = [...cartCountry, country];
    setCartCountry(newCartCountry);
  }


  return (
    <div className="App">
      <h1>All Countries : {countries.length}</h1>
      <h3>Select Countries Added : {cartCountry.length}</h3>
      <Cartcountry cartCountry = {cartCountry}></Cartcountry>
        {
          countries.map(country => <Country handleAddCountry = {handleAddCountry} key={country.alpha3Code} country = {country}></Country>)
        }
    </div>
  );
}

export default App;
