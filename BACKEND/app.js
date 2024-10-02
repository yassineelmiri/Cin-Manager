const express = require("express");
const ConnectToDb = require("./config/connectToDb");

ConnectToDb();

const app = express();

app.use(express.json());

app.listen