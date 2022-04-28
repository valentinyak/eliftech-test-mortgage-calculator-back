const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const banksRouter = require("./routes/api/banks-router");
const usersRouter = require("./routes/api/users-router");

const app = express();
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app
  .use(logger(formatsLogger))
  .use(cors())
  .use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested, Content-Type, Accept Authorization",
      "Access-Control-Allow-Methods ",
      "GET, POST,HEAD, OPTIONS,PUT, DELETE, PATCH"
    );
    next();
  })
  .use(express.json())
  .use("/api/banks", banksRouter)
  .use("/api/users", usersRouter)
  .use((req, res) => {
    res.status(404).json({ message: "Not found" });
  })
  .use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
  });

module.exports = app;
