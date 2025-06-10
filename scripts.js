const API_KEY = 'Qvg84evT6aFRpXE96Vv2ylyn3mxraurpWh7wsQvL'; 
const BASE_URL = 'https://api.nasa.gov/planetary/apod';


const searching = document.querySelector(".search input");
const btn = document.querySelector(".search button");


async function checkAPOD() {
    const dateVal = document.getElementById('datePicker').value;
    if(!dateVal){
        alert("Please select a date!");
        return;
    }


    const response = await fetch(BASE_URL + `?api_key=${API_KEY}&date=${dateVal}`);


    if(!response.ok){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".details").style.display = "none";
    }else{
        const data = await response.json();
        // console.log(data);

        document.querySelector(".title").innerHTML = data.title;
        document.querySelector(".image").src = data.url;
        document.querySelector(".description").textContent = '" ' + data.explanation + ' "';


        document.querySelector(".details").style.display = "block";
        document.querySelector(".error").style.display = "none";
    
    }
    
};

btn.addEventListener("click" ,()=>{
    checkAPOD(searching.value);
});