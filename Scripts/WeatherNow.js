






getLocation();

function getLocation() {
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    document.getElementById("demo").innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
    getAPI(position.coords.latitude, position.coords.longitude);
}

async function getAPI(Lat, Long){
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat="+Lat+"&lon="+Long+"&appid=2f5c5e465bbf3515e51929ac50b00522&units=metric");
    const data = await response.json();

    const Temp = data.main.temp;
    const Humidity = data.main.humidity;
    

    console.log(data);
    document.getElementById("Temp").innerHTML = `
    <h1>Here is the temp in your location</h1>
    <h2>${Temp}</h2>
    <h1>Here is the Humidity in your location</h1>
    <h2>${Humidity}</h2>
    `;
}

//console.log(navigator.geolocation.getCurrentPosition());




//http:api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=


// NOW http://api.openweathermap.org/data/2.5/weather?q=Vanderbijlpark&appid=2f5c5e465bbf3515e51929ac50b00522&units=metric

// list of forecast https://api.openweathermap.org/data/2.5/forecast?q=Vanderbijlpark&appid=2f5c5e465bbf3515e51929ac50b00522&units=metric