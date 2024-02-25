const makeWorkoutsDb = require("./workouts-db");
const workoutsDb = require("..models/workout")({ makeWorkoutsDb });

module.exports = workoutsDb;
