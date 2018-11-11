$(document).ready(function () {
    $.ajax({
        type: "POST",
        url: "https://api.openweathermap.org/data/2.5/weather?q=Chicago&APPID=0c3738d3ccdcae43ef79b3e1f49656a1&units=metric",
        dataType: "json",
        success: function (result, status, xhr) {
            var table = $("<table><tr><th>Chicago</th></tr>");

            table.append("<tr><td>Current Temperature:</td><td>" + result["main"]["temp"] + "°C</td></tr>");
            table.append("<tr><td>Humidity:</td><td>" + result["main"]["humidity"] + "</td></tr>");
            table.append("<tr><td>Weather:</td><td>" + result["weather"][0]["description"] + "</td></tr>");

            $("#message").html(table);
        },
    });
});