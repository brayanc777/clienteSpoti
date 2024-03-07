let url="https://api.spotify.com/v1/artists/7oPftvlwr6VrsViSDV7fJY/top-tracks?market=US"

let token="Bearer BQAGdFflYRgaVJ-1fslIQQBx-BeBATyUbGMnUdZpmYO0ZdbjXD2vMSvHM0p3IPxUH9Lmoc06iDrNJniwwHcS6q50VnmoADR3LoT_n1nMQf64IehSUHk"

let peticion={
    method:"GET",
    headers:{
        Authorization:token
    }
}

fetch(url,peticion)
.then(function(){})
.then(function(){})
.catch(function(){})