const Workout = require("../models/workout");

const workoutsDb = require("./workouts-db")({ Workout });

module.exports = workoutsDb;
