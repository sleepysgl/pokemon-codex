import React from 'react'

const PokemonThumbnail = ({id, name, image, type, height, weight, ability}) => {

    const style = `thumbnail-container ${type}`
    return(
        <div className = {style}>
            <div className = 'number'>
                <h4>#0{id}</h4>
            </div>
            <img src = {image} alt = {name} />
            <div className = "details">
                <h4>{name}</h4>
                <h5>Ability:</h5>
                <h6>{ability}</h6>
                <h5>Type: <span>{type}</span></h5>
                <h5>Height: <span>{height}</span></h5>
                <h5>Weight: <span>{weight}</span></h5>
            </div>
        </div>
    )
}

export default PokemonThumbnail;