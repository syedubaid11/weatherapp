const submitcityname=document.getElementById('submitcityname');
const cityname=document.getElementById('cityname');
const apiKey='5f3744c6037d48dd9f2161349241204';


submitcityname.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log("in process")
    fetchApi();

})


async function fetchApi(){
    const city=cityname.value;
    const url=`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    try{    
        const response=await fetch(url);
        const data=await response.json();
        console.log(data)
        const weatherdiv=document.getElementById("weathercardContainer");
        weatherdiv.innerHTML=`<div id="weathercardContent">
                                <ul id="temp">Temperature:${data.current.feelslike_c}C</ul>
                                <ul id="wind">Wind:${data.current.wind_kph}  kph</ul>
                                <ul id="humidity">Humidity:${data.current.humidity}</ul> 
                              </div> `;
    }
    catch(error){
        console.log("Error Fetching API data",error);
        return null;

    }

}


/*
async function formContainerEmoji(){
    const weatheremoji= await document.getElementById('temp')
    if(weatheremoji.value>20){
        console.log('Hot')
        
    }
}
formContainerEmoji();
*/



