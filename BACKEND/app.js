const express = require("express");
const ConnectToDb = require("./config/connectToDb");
require("dotenv").config();
ConnectToDb();

const app = express();

//Middlewares
app.use(express.json());

//Route
app.use("/api/auth", require("./routes/authRoute"));

// Running The Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () =>
  console.log(`Server is runing in ${process.env.NODE_ENV} mode on port `)
);
