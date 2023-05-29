
/* Se debe ejecutar en el navegador */

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        {
            let usuario = {
                userId:json.userId,
                title:json.title,
                completed:json.completed
        }
        guardarLocalStorage(usuario)
        
        }
})

const guardarLocalStorage = (data) =>{
    localStorage.setItem('taller', JSON.stringify(data))
    console.log("Objeto de usuario almacenado en localStorage")
}