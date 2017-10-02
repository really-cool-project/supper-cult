const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const config = "./config.js.js";

const app = express();
const PORT = config.PORT

const profileRoute = require("");
const clubRoute = require("");
const authRoute = require("");

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", galleryRoute);
app.use("/auth", authRoute);
app.use("/profile", profileRoute);
app.use("/club", clubRoute);

mongoose.connect(config.db, () => {
    console.log("CONNECTED ON " + config.db);
    app.listen(PORT, () => {
        console.log("CONNECTED ON PORT " + PORT);
    })
})