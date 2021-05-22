
import express from 'express';
import https from 'https'

const app = express()



app.get("/", (req, res) => {
    const apiKey = "94ce9f13d6dc9a0bf623c340154c77e8"
    const url = "https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=94ce9f13d6dc9a0bf623c340154c77e8"

    https.get(url, (response) => {

        response.on("data", function(data) {

            const weatherData = JSON.parse(data);

            const temp = weatherData.main.temp;
            const temp_min = weatherData.main.temp_min;
            const temp_max = weatherData.main.temp_max;

            const weatherDescription = weatherData.weather[0].description

            res.write(`<p>The weather is currently ${weatherDescription}</p>`)
            res.write(`<p>The temperature in Mumbai is ${temp}</p>`)
            res.send()
        })
        
    })
})


app.listen("8080", (start) => {
    console.log("server running on port 8080")
})