import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Countrys/Country';

function App() {
  
  const [countries, setCountries] = useState([]); 
  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
    .catch(error => console.log(error))
  }, [])

  return (
    <div className="App">
      <h1>All Countries : {countries.length}</h1>
        {
          countries.map(country => <Country key={country.alpha3Code} country = {country}></Country>)
        }
    </div>
  );
}

export default App;
