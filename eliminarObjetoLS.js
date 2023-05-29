/* 
1.- Se debe ejecutar en el navegador 
2.- Primero se debe guardar el objeto
3.- Se debe recuperar el objeto 
4.- Se puede eliminar el objeto

 */


const eliminarlocalStorage =()=>{
    !localStorage.key("taller") ? console.log("No hay clave" ): localStorage.removeItem("taller")
}

eliminarlocalStorage()
console.log("Objeto de usuario eliminado!")