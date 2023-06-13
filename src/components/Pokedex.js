import {useEffect, useState} from 'react';
import PokemonThumbnail from './PokemonThumbnails';

function Pokedex() {
    const [allPokemons, setAllPokemons] = useState([])
    const [loadMore, setLoadmore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

    function update({pokemon, next}) {
        setAllPokemons((prev) => prev.concat(pokemon));
        setLoadmore(next);
    }

    const getAllPokemons = async () => {
        const response = await fetch(loadMore)
        const data = await response.json()
        return {
            pokemon: await Promise.all(
                data.results.map(async (pokemon) =>
                (await fetch (`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)).json()
              )
            ),
            next: data.next
        }
    }

    useEffect (() => {
        let ignore = false;
        getAllPokemons().then((response) => {
            if (!ignore) update(response);
        });
        return () => ignore = true;
    }, []);
    return (
        <div className = 'background'>
            <div className = 'app-container'>
                <div className='title-container'>
                    <div className='title'></div>
                </div>
                <div className = 'pokemon-container'>
                    <div className = 'all-container'>
                        { allPokemons.map(( pokemon, index ) =>
                            <PokemonThumbnail
                            id={ pokemon.id }
                            name={ pokemon.name }
                            image={ pokemon.sprites.front_default }
                            type={ pokemon.types[0].type.name }
                            ability={ pokemon.abilities[0].ability.name }
                            height={ pokemon.height }
                            weight={ pokemon.weight }
                            key={ index }
                            />
                            )}
                    </div>
                    <button className = 'load-more' onClick={() => getAllPokemons().then(update)}>Load more</button>
                </div>
            </div>
        </div>
    );
}
export default Pokedex;