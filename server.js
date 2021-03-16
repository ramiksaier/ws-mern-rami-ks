const express = require("express");
const app = express();
require("dotenv").config();
const dbconnect = require("./Config/ConnectDB");

//connect to database
dbconnect();
//midelwaire
app.use(express.json());
//create route
app.use("/api/contact", require("./Config/Models/Routes/Contacts"));

//connect to server
const PORT = process.env.PORT;
app.listen(PORT, (error) =>
  error ? console.log(error) : console.log("server is connected")
);
