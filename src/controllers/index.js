const catchAsync = require("../utils/catchAsync");
const {
  createWorkoutUC,
  deleteWorkoutUC,
  getWorkoutsUC,
  getWorkoutUC,
  updateWorkoutUC,
} = require("../services");

const getWorkout = require("./get-workout")({
  getWorkoutUC,
  catchAsync,
});

const getWorkouts = require("./get-workouts")({ getWorkoutsUC, catchAsync });
console.log("getWorkouts", getWorkouts);

const updateWorkout = require("./update-workout.js")({
  updateWorkoutUC,
  catchAsync,
});
const deleteWorkout = require("./delete-workout.js")({
  deleteWorkoutUC,
  catchAsync,
});
const createWorkout = require("./create-workout.js")({
  createWorkoutUC,
  catchAsync,
});

module.exports = {
  getWorkout,
  getWorkouts,
  updateWorkout,
  deleteWorkout,
  createWorkout,
};
