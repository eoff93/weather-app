let lat = 0;
let lon = 0;
const apiId = 'e28ac852596e204e2ab1e5198ae5bbf3';
let api;
let iconUrl = undefined;

// sets the api variable to the whole api key
function setApi() {
  api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&APPID=${apiId}`;
}
