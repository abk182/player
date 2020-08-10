// TODO: use TS
var path = require("path");
var express = require("express");
var cors = require("cors");
var app = express();
app.use(
  cors({
    origin: process.env.CORS_ALLOW_ORIGIN || "*",
    methods: ["GET", "PUT", "POST", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use("/", express.static("static"));
app.listen(3000, console.log("Start 3000"));
