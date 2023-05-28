
/* Se debe ejecutar en el navegador */

"use strict";

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
    localStorage.setItem('deber', JSON.stringify(data))
}