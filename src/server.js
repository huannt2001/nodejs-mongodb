import express from "express";
import "dotenv/config";
import connection from "./config/connectDB";

const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('Hello World!');
})

connection();

app.listen(port, () => {
    console.log('NodeJS server is running on port', port);
})