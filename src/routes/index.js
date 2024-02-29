const router = require("express").Router();
const todos = require("./todo.route");

const getWorkoutController = require("./controllers/getWorkout");
const getWorkoutsController = require("./controllers/getWorkouts");
const createWorkoutController = require("./controllers/createWorkout");
const updateWorkoutController = require("./controllers/updateWorkout");
const deleteWorkoutController = require("./controllers/deleteWorkout");

router.get("/workouts/:id", getWorkoutController);
router.get("/workouts", getWorkoutsController);
router.post("/workouts", createWorkoutController);
router.put("/workouts/:id", updateWorkoutController);
router.delete("/workouts/:id", deleteWorkoutController);

module.exports = router;
