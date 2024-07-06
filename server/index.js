const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");

connectDB(); //to connect database, it takes time because its async function

const app = express(); //to create app

app.use(cors()); //to cross origin so other domain can use this as backend
app.use(bodyParser.urlencoded()); //to change the body of post request into json

const port = 8080; //connecting on port 8080
app.listen(port, () => {
  console.log(`listening on port number ${port}`);
}); //listening the port and after listening executing console
