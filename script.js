// Taking image from unsplash................................
// Replace 'YOUR_ACCESS_KEY' with the access key obtained from Unsplash
const accessKey = "wO4extDUBefoWyPFVzet0FwZ33QbBoYxXhhC7HS6l8U";
const apiUrl = "https://api.unsplash.com/photos/random";

// Specify parameters for type and size
const parameters = {
  client_id: accessKey,
  query: "nature", // Specify the type or category of image you want
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
    const imgRef = document.querySelector(".bg");
    imgRef.style.backgroundImage = `url(${imageUrl})`;
    imgRef.style.backgroundSize = "cover";
  });

// ..................................................................
const shortRef = document.querySelector(".p1");
const location = document.querySelector(".p2");

const tempRef = document.querySelector("#temp");
const windRef = document.querySelector("#wind");
const humidityRef = document.querySelector("#humidity");
const precipitationRef = document.querySelector("#precipitation");
const winddirectionRef = document.querySelector("#wind-dire");
const windSpeedRef = document.querySelector("#wind-speed");

const inputRef = document.querySelector(".right input");
inputRef.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const cityValue = event.target.value;
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=35af7ff606db422880d141328231305&q='${cityValue}'&aqi=no`
    )
      .then((res) => res.json())
      .then((res) => console.log(res));
    inputRef.value = "";
  }
});
