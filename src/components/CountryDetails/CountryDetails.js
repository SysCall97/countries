import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

const CountryDetails = () => {
    const { name } = useParams();
    const [country, setCountry] = useState({});
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${name}`;
        fetch(url)
            .then(response => response.json())
            .then(data => setCountry(data[0]));
    });

    let element;

    if(country) {
        element = <div> 
        <img src={country.flag} alt=""/>
        <h1>{name}</h1>
        <h2>population: {country.population}</h2>
        <h3>area: {country.area}</h3>
        <h3>capital: {country.capital}</h3>
        <h3>Population density: {(country.population/country.area).toFixed(2)} per sq. km.</h3></div>
    } else {
        element = <h1>Country not found</h1>
    }
    
    return (
        <div>
            {element}
        </div>
    );
};

export default CountryDetails;