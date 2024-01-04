// ..................................................................
const shortRef = document.querySelector(".p1");
const locationRef = document.querySelector(".p2");
const degreeRef = document.querySelector(".degree");

const cloudRef = document.querySelector("#cloud");
const pressureRef = document.querySelector("#pressure");
const humidityRef = document.querySelector("#humidity");
const precipitationRef = document.querySelector("#precipitation");
const winddirectionRef = document.querySelector("#wind-dire");
const windSpeedRef = document.querySelector("#wind-speed");

getWeather("Rajapur, Maharashtra");
const inputRef = document.querySelector(".selectCity input");
inputRef.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const cityValue = inputRef.value;
    // console.log(`enter clicked.'${cityValue}'`);
    getWeather(cityValue);

    inputRef.value = "";
  }
});

function getWeather(cityValue) {
  fetch(
    `https://api.weatherapi.com/v1/current.json?key=35af7ff606db422880d141328231305&q='${cityValue}'&aqi=no`
  )
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      shortRef.innerText = res.current.condition.text.toUpperCase();

      // console.log(res.current.condition.text); //p1
      locationRef.innerText = `${res.location.name.toUpperCase()}, ${res.location.region.toUpperCase()}, ${res.location.country.toUpperCase()}`;

      // console.log(res.location.name); //p2
      // console.log(res.location.region); //p2
      // console.log(res.location.country); //p2
      degreeRef.innerText = res.current.feelslike_c;
      // console.log(res.current.feelslike_c); //degree

      cloud.innerText = `CLOUD: ${res.current.cloud}`;
      // console.log(res.current.cloud); //cloud

      pressure.innerText = `PRESSURE: ${res.current.pressure_in}`;
      // console.log(res.current.pressure_in); //pressure

      humidityRef.innerText = `HUMIDITY: ${res.current.humidity}`;
      // console.log(res.current.humidity); //humidity

      precipitationRef.innerText = `${res.current.precip_in} %`;
      // console.log(res.current.precip_in); //card1

      winddirectionRef.innerText = res.current.wind_dir;
      // console.log(res.current.wind_dir); //card2

      windSpeedRef.innerText = `${res.current.wind_kph} Kph`;
      // console.log(res.current.wind_kph); //card3
    });
}

// Taking image from unsplash................................
// Replace 'YOUR_ACCESS_KEY' with the access key obtained from Unsplash
const accessKey = "wO4extDUBefoWyPFVzet0FwZ33QbBoYxXhhC7HS6l8U";
const apiUrl = "https://api.unsplash.com/photos/random";

// Specify parameters for type and size
const parameters = {
  client_id: accessKey,
  query: "forest", // Specify the type or category of image you want
  orientation: "landscape", // Specify the orientation of the image
  w: 5000, // Specify the width of the image
  h: 3333, // Specify the height of the image
};

// Create a query string from the parameters
const queryString = Object.entries(parameters)
  .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
  .join("&");

// Make a request to the Unsplash API
fetch(`${apiUrl}?${queryString}`)
  .then((response) => response.json())
  .then((data) => {
    // Extract the image URL from the response
    const imageUrl = data.urls.regular;
    // console.log(imageUrl);
    const imgRef = document.querySelector("body");
    imgRef.style.backgroundImage = `url(${imageUrl})`;
    imgRef.style.backgroundSize = "cover";
  });
