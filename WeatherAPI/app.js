const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (request, response) {
    response.sendFile(__dirname + "/index.html");
});

app.post("/", function (request, response) {
    const query = request.body.cityName;
    const apikey = "e969be40a87560a2e4c4ecd5280149c4";
    const unit = "metric";
    const url =
        "https://api.openweathermap.org/data/2.5/weather?appid=" +
        apikey +
        "&q=" +
        query +
        "&units=" +
        unit;

    https.get(url, function (res) {
        console.log(res.statusCode);

        res.on("data", function (data) {
            const weather_data = JSON.parse(data);
            const temp = weather_data.main.temp;
            const weatherDescription = weather_data.weather[0].description;
            const iconURL =
                "https://openweathermap.org/img/wn/" +
                weather_data.weather[0].icon +
                "@2x.png";

            response.write(
                "<h1>The temperature in " +
                    query +
                    " is: " +
                    temp +
                    " degrees Celcius</h1><br />"
            );
            response.write(
                "<h2>Current weather: " + weatherDescription + "</h2>"
            );
            response.write('<img src="' + iconURL + '"></img>');
            response.send();

            console.log(weather_data);

            console.log(temp);
        });
    });
});

app.listen(3001, function () {
    console.log("Server is running on port 3001.");
});
