require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const mongoString = process.env.DB_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
	console.log(error);
});

database.once("connected", () => {
	console.log("Database Connected");
});
const app = express();

app.use(express.json());

app.use("/src", express.static("src"));
// app.use("/screen2", express.static("public/screen2"));
// app.use("/screen3", express.static("public/screen3"));

app.listen(3000, () => {
	console.log(`Server Started at ${3000}`);
});

const routes = require("./routes/router");

app.use("/api", routes);
