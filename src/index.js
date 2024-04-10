const apiurl='https://api.weatherapi.com/v1/current.json?key=3903e98485bd41ca831171844240804&q=london'

fetch(apiurl)
.then(response=>{
    if(response){
        console.log(response)

    }
})