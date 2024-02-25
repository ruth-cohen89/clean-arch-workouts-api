const workoutsDb = require("../data-access");
const makePostOrder = require("./postWorkout");

const postWorkout = makePostOrder({ workoutsDb });

const workoutService = Object.freeze({
  postWorkout,
});

module.exports = workoutService;
