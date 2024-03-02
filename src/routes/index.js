const router = require("express").Router();

const {
  getWorkout,
  getWorkouts,
  updateWorkout,
  deleteWorkout,
  createWorkout,
} = require("../controllers");

router.get("/workouts/:id", getWorkout);
router.get("/workouts", getWorkouts);
// router.post("/workouts", createWorkout);
// router.put("/workouts/:id", updateWorkout);
// router.delete("/workouts/:id", deleteWorkout);

module.exports = router;
