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
        console.log("succesfully fetched")
    }
    catch(error){
        console.log("Error Fetching API data",error);
        return null;

    }

}





