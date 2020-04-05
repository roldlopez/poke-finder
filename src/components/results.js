import React from 'react';


function Results({pokemon}) {
  return (
      <div className="d-flex flex-wrap justify-content-center text-center">
          <img src={pokemon.sprites.front_default} alt=""/>
          <p className="w-100">{pokemon.name}</p>
      </div>
  );
}

export default Results;
