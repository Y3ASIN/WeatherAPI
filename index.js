const valueCity = document.getElementById("valueCity");
const searchCity = document.getElementById("searchCity");
function callWeather(city) {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?&appid=a09b906c716969306334d35c6168a5ed&units=metric&q=" +
      city
  )
    .then((res) => res.json())
    .then((data) => {
      const CityName = data.name;
      const temp = data.main.temp;
      const status = data.weather[0].main;
      document.getElementById("cityName").innerText = CityName;
      document.getElementById("temp").innerText = temp;
      document.getElementById("status").innerText = status;
    });
}
searchCity.addEventListener("click", () => {
  callWeather(valueCity.value);
});
