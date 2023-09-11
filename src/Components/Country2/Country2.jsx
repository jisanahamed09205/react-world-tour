import { useState } from 'react';
import './Country2.css'
import CountryDetail from '../CountryDetails/CountryDetail';
const Country2 = ({country, handleVisitedCountry,handleVisitedFlags}) => {
    const {name,flags,area,population,cca3} = country;

    const [visited,setVisited] = useState(false);

    const handleVisited = () =>{
        setVisited(!visited);
    }

    // console.log(handleVisitedCountry);

    // const passWithParams = () =>handleVisitedCountry(country);


    return (
        // <div className={`country ${visited && 'visited'}`}>
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3 style={{color: visited ? 'yellow' : 'White'}}>{name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Area: {area}</p>
            <p>Population: {population}</p>
            <p><small>Code: {cca3}</small></p>
            {/* <button onClick={passWithParams}>Mark as Visited</button> */}
            {/* <button onClick={() =>handleVisitedCountry(country.name.common)}>Mark as Visited</button> */}
            <button onClick={() =>handleVisitedCountry(country)}>Mark as Visited</button>
            <br />
            <button onClick={()=>handleVisitedFlags(country.flags.png)}>Add flags</button>
            <br />
            <button onClick={handleVisited} className='btn-bg'>{visited ?'Visited' : 'Going'}</button>
            {visited ? 'I have visited this country.' : 'I want to visit'}
            <hr />
            <CountryDetail
            country = {country}
            handleVisitedCountry = {handleVisitedCountry}
            handleVisitedFlags = {handleVisitedFlags}
            ></CountryDetail>
        </div>
    );
};

export default Country2;