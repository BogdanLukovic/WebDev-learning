const bodyParser = require("body-parser");
const express = require("express");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/bmicalculator", function (reqest, response) {
    response.sendFile(__dirname + "/index.html");
});

app.post("/bmicalculator", function (request, response) {
    var weight = Number(request.body.weight);
    var height = Number(request.body.height);

    var bmi = weight / (height * height);
    bmi = parseFloat(bmi).toFixed(2);
    response.send("Your BMI is: " + bmi);
});

app.listen(3001, function () {
    console.log("Server started on port 3001");
});
