const form = document.querySelector("form");
const input = document.querySelector("input");
const errormsg = document.querySelector(".error");
const condition = document.querySelector(".condition");
const Location = document.querySelector(".location");
const temperature = document.querySelector(".temperature");
const feelsLike = document.querySelector(".feels-like");
const humidity = document.querySelector(".humidity");
const chanceofRain = document.querySelector(".chance-of-rain");
const windSpeed = document.querySelector(".wind-speed");

async function weather() {
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=94651adb8f2bf0b308284bc74dc6719a`
  );
  let weatherData = await response.json();
  console.log(weatherData);
}

function getLocation() {
  if (input.value !== "") {
    let search = input.value;
  } else if (input.value === "") {
    errormsg.textContent = "Enter a valid location";
  }
}

weather();
