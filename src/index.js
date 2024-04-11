
const apiKey='3903e98485bd41ca831171844240804';
const city='london';
const url='https://api.weatherapi.com/v1/current.json?key=3903e98485bd41ca831171844240804&q=london';
const response=fetch(url);
console.log(response)



/*
async function fetchApi(){
    try{
    const response=await fetch(url);
    const data=await response.json();
    }
    catch(error){
        console.log("Error Fethching api data",error);
        return null;

    }
}

async function displayWeather(){
    const weatherData=await response;
    if(weatherData){
        console.log(weatherData)

    }
    else{
        console.log("Failed to fetch weather api")
    }
}


displayWeather();


*/