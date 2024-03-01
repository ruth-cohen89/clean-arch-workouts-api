const catchAsync = require("../utils/catchAsync");
const {
  createWorkotUC,
  deleteWorkotUC,
  getWorkoutsUC,
  getWorkotUC,
  updateWorkotUC,
} = require("../services");

const getWorkout = require("./get-workout")({
  getWorkotUC,
  catchAsync,
});
console.log(catchAsync, getWorkout);

const getWorkouts = require("./get-workouts")({ getWorkoutsUC, catchAsync });
console.log(catchAsync, getWorkouts);

const updateWorkout = require("./update-workout.js")({
  updateWorkotUC,
  catchAsync,
});
const deleteWorkout = require("./delete-workout.js")({
  deleteWorkotUC,
  catchAsync,
});
const createWorkout = require("./create-workout.js")({
  createWorkotUC,
  catchAsync,
});

module.exports = {
  getWorkout,
  getWorkouts,
  updateWorkout,
  deleteWorkout,
  createWorkout,
};
