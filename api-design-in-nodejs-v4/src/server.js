const path = require("path");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.resolve("pages/index.html"));
});

app.get("*", (req, res) => {
  res.status(404);
  res.sendFile(path.resolve("pages/not-found.html"));
});

module.exports = app;
