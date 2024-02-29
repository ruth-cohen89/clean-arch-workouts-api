const express = require("express");
require("dotenv").config();
const config = require("config");

//const cors = require('cors');
const bodyParser = require("body-parser");

const port = config.get("port");
const host = config.get("host");
const protocol = config.get("protocol");
