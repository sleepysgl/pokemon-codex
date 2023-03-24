import React from 'react'

const PokemonThumbnail = ({id, name, image, type, height, weight, abilityOne}) => {
    return(
        <div className = 'thumbnail-container'>
            <div className = 'number'>
                <small>#0{id}</small>
            </div>
            <img src = {image} alt = {name} />
            <div className = "details">
                <h3>{name}</h3>
                <small> Ability 1: {abilityOne}</small>
                <br/>
                <small> Type: {type}</small>
                <br/>
                <small>Height: {height}</small>
                <br/>
                <small> Weight: {weight}</small>
            </div>
        </div>
    )
}

export default PokemonThumbnail;