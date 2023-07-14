const url =
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Islamabad";
document.getElementById('search').addEventListener('click', () => {
    if(document.getElementById('loader').classList.contains('hide')){
        document.getElementById('loader').classList.remove('hide');
    }
    document.getElementById('loader').classList.add('width100');
    event.preventDefault();
    const cityName = document.getElementById('input').value;
    document.getElementById('countryName').innerHTML = "Weather in "+cityName;
const url =
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + cityName;
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "46757133fbmsh8de74da5ca107f0p158721jsn9345275c1566",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
    call(url, options);
    setTimeout(() => {
        document.getElementById('loader').classList.add('hide');
    }, 1200);
});


async function call(url, options) {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result.wind_speed);
    console.log(result);
    let wind_speed = document.getElementById("wind_speed");
    let wind_degrees = document.getElementById("wind_degrees");
    let temp = document.getElementById("temp");
    let humidity = document.getElementById("humidity");
    let sunset = document.getElementById("sunset");
    let min_temp = document.getElementById("min_temp");
    let cloud_pct = document.getElementById("cloud_pct");
    let feels_like = document.getElementById("feels_like");
    let sunrise = document.getElementById("sunrise");
    let max_temp = document.getElementById("max_temp");
    temp.innerHTML = result.temp;
    min_temp.innerHTML = result.min_temp;
    max_temp.innerHTML = result.max_temp;
    feels_like.innerHTML = result.feels_like;
    humidity.innerHTML = result.humidity;
    wind_degrees.innerHTML = result.wind_degrees;
    wind_speed.innerHTML = result.wind_speed;
    sunset.innerHTML = result.sunset;
    sunrise.innerHTML = result.sunrise;
    cloud_pct.innerHTML = result.cloud_pct;
  } catch (error) {
    console.error(error);
  }
}
