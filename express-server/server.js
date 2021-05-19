import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));


app.get("/", (req, res) => {
    res.send('<h1>BMI-CALCULATOR</h1> <h2> <a href="/calculator"> Calculate BMI</a></h2>')
})

app.get("/calculator", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post("/result", (req, res) => {
    console.log(req.body)
    let height = parseFloat(req.body.height)
    let weight = parseFloat(req.body.weight)

    const bmi = weight / (height * height);
    res.send("Your BMI is " + bmi)
})

app.listen("8080", () => {
    console.log("server-started running on port 8080");
})