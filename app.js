const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoute = require("./routes/user");

//Settings
const app = express();
const port = process.env.PORT || 3000;

//Middlewares
app.use(express.json());
app.use("/api", userRoute);

//Routes
app.get("/", (req, res)=>{
    res.send("Welcome to my API");
});

//Mongodb connection
mongoose
.connect(process.env.MONGODB_URI)
.then(()=> console.log("Connected to MongoDB Atlas"))
.catch((error) => console.error(error));

//
app.listen(port, () => console.log("Server Listening to", port));