const URL_API = "https://rickandmortyapi.com/api/character"
const xhttp = new XMLHttpRequest()

function fetchData() {
    if(this.readyState === 4 && this.status === 200 ) {
        const data = JSON.parse(this.response)
        console.log(data.results)

        const character = data.results
        const HTMLCharacters = document.querySelector('.characters')


        const card = character.map(item => `
                                            <div class="character">
                                                <img src="${item.image}">
                                                <p>Nombre: ${item.name}</p>
                                                <p>Especie ${item.species}</p>
                                            </div>
        `)

        HTMLCharacters.innerHTML = card
    }else {
        const error = new Error('Error' + url_api)
        return callback(error,null)
    }
}

xhttp.addEventListener('load',fetchData)
xhttp.open('GET',`${URL_API}`,true)
xhttp.send()