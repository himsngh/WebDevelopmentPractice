import express from 'express'
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express()
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(bodyParser.urlencoded({
    extended: true
}));


app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/signup.html");
})

app.post("/", (req, res) => {
    
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const email = req.body.email


    let data = {
        "email_address": email,
    }
})

app.listen("8080", function() {
    console.log("server running on port 8080");
})