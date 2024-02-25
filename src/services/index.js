const workoutsDb = require("../data-access");

const createWorkout = require("./create-workout")({ workoutsDb });
const getWorkouts = require("./get-workouts")({ workoutsDb });
const getWorkout = require("./get-workout")({ workoutsDb });
const updateWorkout = require("./update-workout")({ workoutsDb });
const deleteWorkout = require("./delete-workout")({ workoutsDb });

const workoutService = Object.freeze({
  createWorkout,
  getWorkouts,
  getWorkout,
  updateWorkout,
  deleteWorkout,
});

module.exports = workoutService;
