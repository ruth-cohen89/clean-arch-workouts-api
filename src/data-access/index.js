const makeWorkoutsDb = require("./workouts-db");
const workoutsDb = require("../workout/workout")({ makeWorkoutsDb });

module.exports = workoutsDb;
