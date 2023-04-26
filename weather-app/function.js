//Weather ApI key 
const apiKey="f5b4c224cb0ac1c6645b97a3a02ede81";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// get html elements by id 
const searchInput=document.getElementById('city-input');
const submit=document.getElementById('submit-btn');
let weatherIcon=document.getElementById('weatherIcon');

// function call by submit
submit.addEventListener("click" ,()=>{
    weatherApp(searchInput.value);
});

    // enable enter key to submit form
    searchInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      weatherApp(searchInput.value);
        }
    });

// Weather update & current date update function
async function weatherApp(city){
    const response = await fetch(apiUrl+ city + `&appid=${apiKey}`);
    var data = await response.json();
    // if no city found give error 
    if (!data.coord) {
        document.getElementById('cityName').innerHTML = "City not found";
        document.getElementById('tempResult').innerHTML= "-";
        document.getElementById('humidity').innerHTML= "-";
        document.getElementById('wind').innerHTML= "-";
        document.getElementById('date').innerHTML= "";
        weatherIcon.src = "";
        document.querySelector(".wather-details").style.display = "block";
        return;
      }

    
    // get city latitude and longitude
    const lat = data.coord.lat;
    const lon = data.coord.lon;

    // make API call to get current date and time for city
    const timezoneUrl = `https://api.timezonedb.com/v2.1/get-time-zone?key=TTSMY6BKL5Z0&format=json&by=position&lat=${lat}&lng=${lon}`;
    const timezoneResponse = await fetch(timezoneUrl);
    const timezoneData = await timezoneResponse.json();

    // display current date and time for city
    const date = new Date(timezoneData.formatted);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const formattedDate = date.toLocaleDateString(undefined, options);

    // Display the function result on html elements
    document.getElementById('cityName').innerHTML= data.name + "," + " " + data.sys.country;
    document.getElementById('tempResult').innerHTML= Math.round(data.main.temp ) + "°C";
    document.getElementById('humidity').innerHTML= data.main.humidity + "%";
    document.getElementById('wind').innerHTML= data.wind.speed + "km/h";
    document.getElementById('date').innerHTML= formattedDate;

    // image Change statement
    if(data.weather[0].main =="Clouds"){
        weatherIcon.src="./assest/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src="./assest/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src="./assest/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src="./assest/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src="./assest/mist.png";
    }
    

    document.querySelector(".wather-details").style.display="block"

    

    // console.log(data);
}
