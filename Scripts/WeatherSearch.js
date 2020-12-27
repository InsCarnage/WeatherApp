


var arrDay = [];
var arrWeather = [];
var arrhour=[];
var arrstringDay=[];
var arrMonth=[];
var arrImage=[];
var currstate ="";
var arrWeekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var months = [ "January", "February", "March", "April", "May", "June", 
           "July", "August", "September", "October", "November", "December" ];



function start(){
    var cityname = document.getElementById('Sitem').value;
    currstate =cityname;
    document.getElementById('Sitem').value ='';
    arrDay = [];
    arrWeather = [];
    arrhour=[];
    arrstringDay=[];
    arrMonth=[];
    if(cityname!=null){
        getAPI(cityname);
    } else{
        document.getElementById("Header").innerHTML = `Please enter a value`;
    };
}

function items(weatherList){
    

    let slicedDate = weatherList.dt_txt.slice(0,10);
    let Ydate = new Date(slicedDate); 
    //console.log(Ydate);
    let date = weatherList.dt_txt; 
    let temp = weatherList.main.temp;
    let forWeather = weatherList.weather[0].description;
    let Speed =weatherList.wind.speed;
    let hour = date.slice(11,16);
    let day = date.slice(8,10);
    let getMonth = date.slice(5,7);
    let strDay = Ydate.getDay();
    let image = "";
    //console.log(strDay);
    arrMonth.push(day,months[getMonth-1]);
    arrDay.push(day,temp);
    arrWeather.push(day,forWeather);
    arrhour.push(day,hour);
    arrstringDay.push(day,arrWeekday[strDay]);

    switch(forWeather) {
        
        case "clear sky":
            image = "sunny.svg";
            break;
        case "few clouds":
            image = "sunnyclouds.svg";
            break;
        case "light rain":
            image = "raining.svg";
            break;
        case  "overcast clouds":
            image = "cloudy.svg";
            break;
        case  "scattered clouds":
            image = "cloudy.svg";
            break;
        case  "broken clouds":
            image = "sunnyclouds.svg";
            break;
          
    }
    arrImage.push(day,image);
};


function Together(){
    //console.log(arrDay);
    var once = false;
    str = `<div class="Cards">`;
    
    for(var i = 0; i <= arrDay.length -1 ; i=i+2){

        if(arrDay[i]!=arrDay[i-2]){
            str+= `<div class="Thours">
            <h1>${arrstringDay[i+1]}</h1>
            <h1>${arrDay[i]} ${arrMonth[i+1]}</h1>`;
        }
        if(arrDay[i]==arrDay[i+2]){
            str+= `
            <hr class="solid"></hr>
            <ul class="List">${arrhour[i+1]}
            <li class="fTemp"><span>${arrDay[i+1]} °C</span></li>
            <li class="fDescription"><span>${arrWeather[i+1]} <object class="icon"type="image/svg+xml" data="img/${arrImage[i+1]}"></object> </span></li>    
            
            

            </ul>
            `;
        }
        if(arrDay[i]!=arrDay[i+2]){
            str+= `
            <hr class="solid"></hr>
            <ul class="List">${arrhour[i+1]}
            <li><span>${arrDay[i+1]} °C</span></li>
            <li class="fDescription"><span>${arrWeather[i+1]} <object class="icon" type="image/svg+xml" data="img/${arrImage[i+1]}"></object> </span></li> 
            </ul>
            `;
            str+= `</div>`;
        }
        
    };
    str += `</div>`;
    return str;
};



async function getAPI(state){
    const response = await fetch("https://api.openweathermap.org/data/2.5/forecast?q="+state+"&appid=2f5c5e465bbf3515e51929ac50b00522&units=metric");
    try {
        const data = await response.json();
        console.log(state);
        console.log(data);
        document.getElementById("Header").innerHTML = `
        Forecast for ${state}
        ${data.list.map(items).join('')}
        `;
        document.getElementById("Items").innerHTML = Together();
    } catch (error) {
        console.log(error);
        document.getElementById("Header").innerHTML = `
        Search for ${state} was not found`;
    }
};

//console.log(navigator.geolocation.getCurrentPosition());




//http:api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=


// NOW http://api.openweathermap.org/data/2.5/weather?q=Vanderbijlpark&appid=2f5c5e465bbf3515e51929ac50b00522&units=metric

// list of forecast https://api.openweathermap.org/data/2.5/forecast?q=Vanderbijlpark&appid=2f5c5e465bbf3515e51929ac50b00522&units=metric