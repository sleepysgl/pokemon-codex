import {useEffect, useState} from 'react';

function Pokedex() {
    
    const [allPokemons, setAllPokemons] = useState([])
    const [loadMore, setLoadmore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

    const getAllPokemons = async () => {
        const response = await fetch(loadMore)
        const data = await response.json()
        console.log (data)
    }

    useEffect (() => {
        getAllPokemons()
    }, []);

    return (
        <h1>Pokedex</h1>
    );
}
export default Pokedex;