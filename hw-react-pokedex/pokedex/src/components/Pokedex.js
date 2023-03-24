import {useEffect, useState} from 'react';
import PokemonThumbnail from './PokemonThumbnails';

function Pokedex() {
    
    const [allPokemons, setAllPokemons] = useState([])
    const [loadMore, setLoadmore] = useState('https://pokeapi.co/api/v2/pokemon?limit=10')

    const getAllPokemons = async () => {
        const response = await fetch(loadMore)
        const data = await response.json()

        setLoadmore(data.next)

        function createPokemonObject (result) {
            result.forEach( async (pokemon) => {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                const data = await response.json()

                setAllPokemons(currentList => [...currentList, data])

            });
        }
        createPokemonObject(data.results)
        await console.log(allPokemons)
    }

    useEffect (() => {
        getAllPokemons()
    }, []);

    return (
        <div className = 'app-container'>
            <h1>Pokedex</h1>
            <div className = 'pokemon-container'>
                <div className = 'all-container'>
                    { allPokemons.map(( pokemon, index) =>
                        <PokemonThumbnail
                        id={ pokemon.id}
                        name={ pokemon.name}
                        image={ pokemon.sprites.front_default}
                        type={ pokemon.types[0].type.name}
                        key={ index }
                        />
                        )}
                </div>
                <button className = 'load-more' onClick={() => getAllPokemons()}>Load more</button>
            </div>
        </div>

    );
}
export default Pokedex;