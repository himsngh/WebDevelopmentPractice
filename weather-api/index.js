
import express from 'express';
import https from 'https'
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';

const app = express()
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})


app.post("/", (req, res) => {
    const apiKey = "YOUR_API_KEY"
    const units = "metric"

    const query = req.body.cityName
    console.log(query)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=${units}`


    https.get(url, (response) => {

        if (response.statusCode < 400) {
            response.on("data", function (data) {

                const weatherData = JSON.parse(data);
                
                const temp = weatherData.main.temp;
                const temp_min = weatherData.main.temp_min;
                const temp_max = weatherData.main.temp_max;

                const weatherDescription = weatherData.weather[0].description

                const icon = weatherData.weather[0].icon
                const imageUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png"

                res.write(`<p>The weather is currently <strong>${weatherDescription}</strong></p>`)
                res.write(`<h1>The temperature in <strong>${query}</strong> is <strong> ${temp} </strong> degrees Celcius.</h1>`)
                res.write(`<img src=${imageUrl} alt=weather-icon>`)
                res.send()
            })
        } else {

            res.send("Error Status Code : " + response.statusCode)
        }
    })
})

app.listen("8080", (start) => {
    console.log("server running on port 8080")
})