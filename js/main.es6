let lat = 0;
let lon = 0;
const apiId = 'e28ac852596e204e2ab1e5198ae5bbf3';
let api;
let iconUrl = undefined;

getLatLon();
// initialize lat and lon
function getLatLon() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      setApi();
      processJSON();
    });
  }
}

// sets the api variable to the whole api key
function setApi() {
  api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&APPID=${apiId}`;
}

// get json data
function processJSON() {
  $.getJSON(api, function(json) {
    this.json = json;
    setLocation(json);
    setDescription(json);
    setWindSpeed(json);
    setTemp(json);
  });
}

// takes in a json object and outputs temperature
function setTemp() {
  let temp = JSON.stringify(json.weather[0].icon);
  icon = icon.substr(1, icon.length - 2);
  iconUrl = `<img src=http://openweathermap.org/img/w/${icon}.png>`;
  $('.temperature').html(`${temp}° F${iconUrl}`);
}

// takes in a json object and outputs location
function setLocation(json) {
  let location = JSON.stringify(json.name);
  $('#location').html(location.substr(1, location.length - 2));
}

// takes in a json object and outputs weather description
function setDescription(json) {
  let description = JSON.stringify(json.weather[0].description);
  $('.description').html(description.substr(1, description.length - 2));
}

function setWindSpeed(json) {
  let wind = JSON.stringify(json.wind.speed) + ' f/s';
  $('.wind-speed').html(wind);
}
