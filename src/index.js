const submitcityname=document.getElementById('submitcityname');
const cityname=document.getElementById('cityname');
const apiKey='3903e98485bd41ca831171844240804';

submitcityname.addEventListener('click',()=>{
    
    fetchApi();
})




async function fetchApi(){
    const city=cityname.value;
    const url=`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`

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


