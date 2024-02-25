const makeWorkoutsDb = require("./workouts-db");
const Workout = require("..models/workout");

const workoutsDb = makeWorkoutsDb({ Workout });

module.exports = workoutsDb;
