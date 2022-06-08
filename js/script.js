import WEATHER_API_KEY from './apikey.js';

const contentDivs = document.querySelectorAll('.content');
const colors = [
  '#83d2e1',
  '#bfd7ea',
  '#ff6961',
  '#c81d25',
  '#f06457',
  '#003d71',
  '#f6e5bb',
  '#9fbdb7',
  '#68979d',
  '#e8eadd',
  '#0081a7',
  '#00afb9',
  '#fed9b7',
  '#f07167',
];

function randomColor() {
  let color = colors[Math.floor(Math.random() * colors.length)];
  return color;
}

window.onload = (e) => {
  contentDivs.forEach((content) => {
    content.style.backgroundColor = randomColor();
  });
};

//Fetch Weather function

fetch(
  `https://api.openweathermap.org/data/2.5/weather?lat=18.4861&lon=69.9312&appid=${WEATHER_API_KEY}`
)
  .then(function (response) {
    let data = response.json();
    return data;
  })
  .then((data) => {
    const temp = document.getElementById('temp');
    const desc = document.getElementById('weather-desc');
    const tempIcon = document.getElementById('temp-icon');

    const tempInKelvin = data.main.temp;
    const celsius = Math.round(tempInKelvin - 273.15);
    const fahrenheit = Math.round(1.8 * (tempInKelvin - 273.15) + 32);
    temp.innerHTML = `${celsius}° C / ${fahrenheit}° F`;

    const descData = data.weather[0].description;
    desc.innerHTML = descData;

    console.log(data);

    // Dynamically change the weather icon based on API info

    if (descData.includes('clear')) {
      tempIcon.src = `/assets/weather_icons/clear_sky.png`;
    } else if (descData.includes('clouds')) {
      tempIcon.src = `/assets/weather_icons/few_scattered_clouds.png`;
    } else if (descData.includes('thunderstorm')) {
      tempIcon.src = `/assets/weather_icons/thunderstorm.png`;
    } else if (descData.includes('drizzle')) {
      tempIcon.src = `assets/weather_icons/rain.png`;
    } else if (descData.includes('snow')) {
      tempIcon.src = `assets/weather_icons/snow.png`;
    } else {
      tempIcon.src = `assets/weather_icons/mist.png`;
    }
  })

  .catch((err) => console.error(err));
