import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import CardItems from '../CardItems/CardItems';

const Home = () => {
    const url = "https://restcountries.eu/rest/v2/all";
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setCountries(data))
    }, []);

    const container = {
        position: "relative",
        margin: "0px 3%"
    }
    const cardDeck = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gridGap: ".5rem"
    }

    return (
        <div style={container}>
            <div style={cardDeck}>
                {
                    countries.map(country => <CardItems country={country} key={country.alpha3Code} />)
                }
            </div>
        </div>
    );
};

export default Home;