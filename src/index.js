const submitcityname=document.getElementById('submitcityname');
const cityname=document.getElementById('cityname');
const apiKey='5f3744c6037d48dd9f2161349241204';
const weather=null;


submitcityname.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log("in process")
    fetchApi();
    backgroundchangeWeather();

})


async function fetchApi(){
    const city=cityname.value;
    const url=`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    try{    
        const response=await fetch(url);
        const data=await response.json();
        const weather=data.current.feelslike_c;
        console.log(data)
        console.log(weather)
        const weatherdiv=document.getElementById("weathercardContainer");
        weatherdiv.innerHTML=`<div id="weathercardContent">
                                <ul id="temp">Temperature:${data.current.feelslike_c}C</ul>
                                <ul id="wind">Wind:${data.current.wind_kph}  kph</ul>
                                <ul id="humidity">Humidity:${data.current.humidity}</ul> 
                                <ul id="weather">${data.current.condition.text}</ul>
                              </div> `;
    }
    catch(error){
        console.log("Error Fetching API data",error);
        return null;

    }

}


function backgroundchangeWeather(){
    if(weather>20){
        console.log('working')
    }
    else{
        console.log('not working')
    }
    
}


