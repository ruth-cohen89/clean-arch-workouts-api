const workoutsDb = require("../data-access");
console.log(workoutsDb);
const createWorkoutUC = require("./create-workout")({ workoutsDb });
const getWorkoutsUC = require("./get-workouts")({ workoutsDb });
const getWorkoutUC = require("./get-workout")({ workoutsDb });
const updateWorkoutUC = require("./update-workout")({ workoutsDb });
const deleteWorkoutUC = require("./delete-workout")({ workoutsDb });

module.exports = Object.freeze({
  createWorkoutUC,
  getWorkoutsUC,
  getWorkoutUC,
  updateWorkoutUC,
  deleteWorkoutUC,
});
