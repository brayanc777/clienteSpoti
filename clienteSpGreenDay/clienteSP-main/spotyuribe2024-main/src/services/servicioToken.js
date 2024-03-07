let url="https://accounts.spotify.com/api/token"

let grantType="grant_type=client_credentials"
let clientId="client_id=dd2689659ba94f02a298d48ac320a68a"
let clientSecret="client_secret=cabd8833e0144d25bfd99921bef5576f"

let datosBody=grantType+'&'+clientId+'&'+clientSecret

let peticion={
    method:"POST",
    headers:{
        "Content-Type":"application/x-www-form-urlencoded"
    },
    body:datosBody
}

fetch(url,peticion)
.then(function(respuesta){
    return respuesta.json()
})
.then(function(respuesta){
    let token=respuesta.token_type+" "+respuesta.access_token
    let urlCanciones="https://api.spotify.com/v1/artists/7oPftvlwr6VrsViSDV7fJY/top-tracks?market=US"

    let peticionCanciones={
        method:"GET",
        headers:{
            Authorization:token
        }
    }

    fetch(urlCanciones,peticionCanciones)
    .then(function(respuesta){
        return respuesta.json()
    })
  .then(function(respuesta) {
    for (let i = 0; i < 10; i++) {
        console.log(respuesta.tracks[i].name);
        console.log(respuesta.tracks[i].preview_url);
        console.log(respuesta.tracks[i].album.images[0].url);

        let titulo = document.getElementById("titulo" + (i + 1));
        titulo.textContent = respuesta.tracks[i].name;

        let imagen = document.getElementById("imagen" + (i + 1));
        imagen.src = respuesta.tracks[i].album.images[0].url;

        let audio = document.getElementById("audio" + (i + 1));
        audio.src = respuesta.tracks[i].preview_url;

        audio.onerror = function() {
            console.error('Error al cargar el audio: ' + audio.src);
        };
    }
})

    .then(function(respuesta){
        console.log(respuesta.tracks[0].name)
        console.log(respuesta.tracks[0].preview_url)
        console.log(respuesta.tracks[0].album.images[0].url)

        let titulo1=document.getElementById("titulo1")
        titulo1.textContent=respuesta.tracks[0].name

        let imagen1=document.getElementById("imagen1")
        imagen1.src=respuesta.tracks[0].album.images[0].url

        let audio1=document.getElementById("audio1")
        audio1.src=respuesta.tracks[0].preview_url

    })
    .catch(function(respuesta){
        console.log(respuesta)
    })   

})
.catch(function(respuesta){
    console.log(respuesta)
})


