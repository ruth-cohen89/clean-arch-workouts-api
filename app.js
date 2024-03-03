const express = require("express");
require("dotenv").config();
const config = require("config");
const cors = require("cors");

const bodyParser = require("body-parser");
const connect = require("./src/utils/connect");

const router = require("./src/routes");
const AppError = require("./src/utils/appError");
const globalErrorHandler = require("./src/middlewares/errorHandlerMiddleware.js");

const port = config.get("port");
const host = config.get("host");
const protocol = config.get("protocol");

const app = express();

app.get("/", (req, res) => {
  res.json("Welcome to workout-api :)");
});

app.use(
  cors({
    origin: config.get("origin"),
    credentails: true,
  })
);

app.use((req, res, next) => {
  console.info(
    `METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`
  );
  next();
});

app.use(bodyParser.json({ limit: "15mb" }));

app.use(bodyParser.urlencoded({ limit: "15mb", extended: true }));

app.use(router);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server 🙄`, 404));
});

app.use(globalErrorHandler);

app.listen(port, async () => {
  console.log(`App is running at ${protocol}://${host}:${port}`);
  await connect();
});
