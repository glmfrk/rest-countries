import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Countrys/Country';


function App() {
  
  const [countries, setCountries] = useState([]); 
  const [selectedCountry, setSelectedCountry] = useState([]);

  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
    .catch(error => console.log(error))
  }, [])

  const handleAddCountry = (country)=> {
    const newSelectCountry = [...selectedCountry, country];
    setSelectedCountry(newSelectCountry);
  }


  return (
    <div className="App">
      <h1>All Countries : {countries.length}</h1>
      <h3>Select Countries Added : {selectedCountry.length}</h3>

        {
          countries.map(country => <Country handleAddCountry = {handleAddCountry} key={country.alpha3Code} country = {country}></Country>)
        }
    </div>
  );
}

export default App;
