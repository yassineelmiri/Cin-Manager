const express = require("express");
const ConnectToDb = require("./config/connectToDb");
const cors = require("cors");
require("dotenv").config();
ConnectToDb();

const app = express();

// Middlewares
app.use(express.json());

//cors policy
app.use(cors({
  origin: "http://localhost:3000"
}))


// Routes
app.use("/api/auth", require("./routes/authRoute"));
app.use("/api/users", require("./routes/usersRoute"));
app.use("/api/posts", require("./routes/postsRoute"));

// Running The Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () =>
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
