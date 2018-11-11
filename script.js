var weather;
loadJSON('https://api.openweathermap.org/data/2.5/weather?q=Chicago&APPID=0c3738d3ccdcae43ef79b3e1f49656a1&units=metric', gotData);

function gotData(data) {
    weather = data;
}