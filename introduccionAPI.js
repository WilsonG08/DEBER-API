/* 
    Se puede ejecutar normal 
    Dar ctrl + clic para ver la foto del personaje
*/

fetch('https://rickandmortyapi.com/api/character/1')
    .then(response => response.json())
    .then(json => console.log(json));

const obtenerPersonaje = async (idPersonaje) => {
    const peticion = await fetch(`https://rickandmortyapi.com/api/character/${idPersonaje}`);
    const response = await peticion.json();
    console.log(response.name, response.image);
};

/* 
Digitar un numero para obtener un personaje
*/
obtenerPersonaje(6); 


