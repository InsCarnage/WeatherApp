
const Joh = 'https://api.openweathermap.org/data/2.5/weather?q=Johannesburg&appid=2f5c5e465bbf3515e51929ac50b00522&units=metric';
const Cape = 'https://api.openweathermap.org/data/2.5/weather?q=Cape Town&appid=2f5c5e465bbf3515e51929ac50b00522&units=metric';





getAPI();
getAPI2();



async function getAPI(){
    const response = await fetch(Joh);
    const data = await response.json();
    const temp = data.main.temp;
    const maxTemp = data.main.temp_max;
    const minTemp =data.main.temp_min;
    const feels =data.main.feels_like;
    const humid = data.main.humidity;
    const Wspeed = data.wind.speed;
    let arrdesc = data.weather[0].description;
    
    
    document.getElementById("JAPI").innerHTML = `
    <ul>
    <li>temp: ${temp}C</li>
    <li>max: ${maxTemp}C</li>
    <li>min: ${minTemp}C</li>
    <li>feels like: ${feels}C</li>
    <li>Humidity: ${humid}%</li>
    <li>Wind speed: ${Wspeed}</li>
    <li>Weather: ${arrdesc}</li>
    </ul>
    `;


};



async function getAPI2(){
    const response = await fetch(Cape);
    const data = await response.json();
    const temp = data.main.temp;
    const maxTemp = data.main.temp_max;
    const minTemp =data.main.temp_min;
    const feels =data.main.feels_like;
    const humid = data.main.humidity;
    const Wspeed = data.wind.speed;
    let arrdesc = data.weather[0].description;
    
    
    document.getElementById("CAPI").innerHTML = `
    <ul>
    <li>temp: ${temp}C</li>
    <li>max: ${maxTemp}C</li>
    <li>min: ${minTemp}C</li>
    <li>feels like: ${feels}C</li>
    <li>Humidity: ${humid}%</li>
    <li>Wind speed: ${Wspeed}</li>
    <li>Weather: ${arrdesc}</li>
    </ul>
    `;


}