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
        weatherdiv.innerHTML=`<ul>Temperature:${data.current.feelslike_c}C</ul>
                              <ul>Wind:${data.current.wind_kph}  kph</ul>
                              <ul>Humidity:${data.current.humidity}</ul>  `;
    }
    catch(error){
        console.log("Error Fetching API data",error);
        return null;

    }

}




