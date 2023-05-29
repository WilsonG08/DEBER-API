/* 
1.- Se debe ejecutar en el navegador 
2.- Primero se debe guardar el objeto
3.- Se debe recuperar el objeto 
 */

const obtenerLocalStorage =()=>{
    const respuesta = localStorage.getItem("taller") ? JSON.parse(localStorage.getItem("taller")) : "No hay data"
    console.log(respuesta);
    console.log("Obejeto de usuario obtenido")
}
obtenerLocalStorage()