import { useEffect } from "react";
import { useState } from "react";
import Country2 from "../Country2/Country2";
import './Countries.css'
// import Country from "../Country/Country";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedFlags,setVisitedFlags] = useState([])

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])


    const handleVisitedCountry = country =>{
        console.log('add this to your visited country');
        // console.log(country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlags = flags => {
        // console.log('flags clicked');
        const newVisitedFlags = [...visitedFlags,flags]
        setVisitedFlags(newVisitedFlags);
    }


    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            {/* Visited country */}
            <div>
                <h5>Visited Countries: {visitedCountries.length}</h5>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>

            <div className="flag-container">
                    {
                        visitedFlags.map((flag,idx) => <img key={idx} src={flag}></img>)
                    }
            </div>

            {/* display countries */}
            <div className="countries-container">
                {
                    countries.map(country => <Country2 
                        key={country.cca3} 
                        handleVisitedCountry={handleVisitedCountry}
                        handleVisitedFlags={handleVisitedFlags}
                        country={country}></Country2>)
                }
            </div>
            {/* {
                countries.map(country => <Country key={country.cca3} country={country}></Country>)
            } */}
        </div>
    );
};

export default Countries;