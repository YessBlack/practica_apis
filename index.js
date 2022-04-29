const URL_API = 'https://jsonplaceholder.typicode.com'

const xhr = new XMLHttpRequest()

function onRequestHandler(){
    if(this.readyState === 4 && this.status === 200 ) {
        //0 = UNSET, no se ha llamado al metodo open
        //1 = OPENED, se ha llamado al metodo open
        //2 = HEADERS_RECEIVED, se esta llamando al metodo send()
        //3 = LOADING, se esta cargando, es decir, esta recibiendo la respuesta
        //4 = DONE, se ha completado la operacion
        const data = JSON.parse(this.response)
        console.log(data)
        const HTMLResponse = document.querySelector('#app')

        const tp1 = data.map(user => `<li>🧙‍♂️ ${user.name} 📧 ${user.email}</li>`)

        HTMLResponse.innerHTML = `<ul>${tp1}</ul>`
    }else {
        const error = new Error('Error' + url_api)
        return callback(error,null)
    }
}

xhr.addEventListener('load',onRequestHandler)
xhr.open('GET',`${URL_API}/users`,true)
xhr.send()