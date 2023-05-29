"use strict";

fetch('https://rickandmortyapi.com/api/character/1')
    .then(response => response.json())
    .then(json => console.log(json));

const obtenerData = async (idPersonaje) => {
    const peticion = await fetch(`https://rickandmortyapi.com/api/character/${idPersonaje}`);
    const response = await peticion.json();
    console.log(response.name, response.image);
};

obtenerData(6); 


