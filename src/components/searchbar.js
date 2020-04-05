import React, { useState, useEffect, Fragment } from 'react';
import Results from './results';

function Searchbar() {
    const [ pokemon, setPokemon] = useState("Loading");
    const [ input, setInput ]  = useState("");

    const getPokemon = async (e) => {
        e.preventDefault();
        setPokemon("Loading");
        try {
            const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${input.toLowerCase()}/`);
            const data = await result.json();
            setPokemon(data);
        } catch (error) {
            setPokemon("Error");
        }
    }

    const retrievePokemon = async () => {
        try {
            const result = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu/`);
            const data = await result.json();
            setPokemon(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() =>{
        retrievePokemon();
    }, []);

    return (
        <Fragment>  
            <form className="mb-5 d-flex flex-wrap justify-content-center">
                <label>Search your Pokemon</label>
                <div className="form-group w-100">
                    <input className="form-control" type="text" onChange={(e)=>{ setInput(e.target.value) }}/>
                </div>
                <button type="submit" className="btn btn-primary w-100" onClick={getPokemon}>Gotta Catch 'Em All!</button>
            </form>
            { pokemon === "Loading" ? <p className="text-center">Loading</p>  
                : pokemon === "Error" ? <p className="text-center">That Pokemon doesn't exist!!!</p> : <Results pokemon={pokemon}/>}
        </Fragment>
    );
}

export default Searchbar;
