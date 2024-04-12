
const apiKey='3903e98485bd41ca831171844240804';
const city='london';
const url=`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`



async function fetchApi(){
    try{
    const response=await fetch(url);
    const data=await response.json();
    console.log(data)
    console.log("succesfully fetched")
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

fetchApi();


