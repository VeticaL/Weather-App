const form = document.querySelector("form");
const input = document.querySelector("input");
const errormsg = document.querySelector(".error");
const condition = document.querySelector(".condition");
const city = document.querySelector(".location");
const temperature = document.querySelector(".temperature");
const feelsLike = document.querySelector(".feels-like");
const humidity = document.querySelector(".humidity");
const chanceofRain = document.querySelector(".chance-of-rain");
const windSpeed = document.querySelector(".wind-speed");
const toggle = document.querySelector(".toggle");
const search = document.querySelector(".submit");

let unit = "imperial";
let loc = "London";

async function weather(location) {
  let response = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      location +
      "&units=" +
      unit +
      "&APPID=94651adb8f2bf0b308284bc74dc6719a",
    { mode: "cors" }
  );
  let data = await response.json();
  let name = data.name;
  let weather = data.weather[0].description;
  let temp = data.main.temp;
  let feels_like = data.main.feels_like;
  let humidity_data = data.main.humidity;
  let chanceofRain_data = data.rain;
  let windSpeed_data = data.wind.speed;
  updateData(
    name,
    weather,
    temp,
    feels_like,
    humidity_data,
    chanceofRain_data,
    windSpeed_data
  );
  console.log(data);
}

function updateData(name, weather, temp, fells, humid, rain, wind) {
  city.textContent = name;
  condition.textContent = weather.toUpperCase();
  if (unit === "imperial") {
    temperature.textContent = temp + " °F";
    feelsLike.textContent = "Feels Like: " + fells + " °F";
    humidity.textContent = "Humidity: " + humid + " %";
    chanceofRain.textContent = "Chance of Rain: " + rain;
    windSpeed.textContent = "Wind Speed: " + wind + " mph";
  } else if (unit === "metric") {
    temperature.textContent = temp + " °C";
    feelsLike.textContent = "Feels Like: " + fells + " °C";
    humidity.textContent = "Humidity: " + humid + " %";
    chanceofRain.textContent = "Chance of Rain: " + rain;
    windSpeed.textContent = "Wind Speed: " + wind + " kmph";
  }
}

weather(loc);

toggle.addEventListener("click", () => {
  if (unit === "imperial") {
    unit = "metric";
    weather(loc);
  } else if (unit === "metric") {
    unit = "imperial";
    weather(loc);
  }
});

search.addEventListener("click", (e) => {
  e.preventDefault();
  loc = input.value;
  weather(loc);
});

input.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    search.click();
  }
});


// TO-Do
// styling
// chance of Rain
// unit positoining
// local storage