const apikey = "a8b18125b63f75b7edb90430d2e108a0";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");

async function checkweather(city) {
    const response = await fetch(apiurl + city + "&appid=" + apikey);
    let data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main === "Clouds") {
        weathericon.src = "images/clouds.png";
    } else if (data.weather[0].main === "Clear") {
        weathericon.src = "images/clear.png";
    } else if (data.weather[0].main === "Rain") {
        weathericon.src = "images/rain.png";
    } else if (data.weather[0].main === "Drizzle") {
        weathericon.src = "images/drizzle.png";
    } else if (data.weather[0].main === "Mist") {
        weathericon.src = "images/mist.png";
    }
    document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", () => {
    checkweather(searchBox.value);
});








