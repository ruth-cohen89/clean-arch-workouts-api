const Workout = require("../workout/workout");

const workoutsDb = require("./workouts-db")({ Workout });

module.exports = workoutsDb;
