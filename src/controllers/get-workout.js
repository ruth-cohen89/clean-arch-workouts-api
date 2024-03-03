function getWorkout({ getWorkoutUC, catchAsync }) {
  return catchAsync(async (req, res, next) => {
    try {
      console.log(req.params);
      const workout = await getWorkoutUC(req.params);
      if (!workout) return res.status(404).send({ error: "Workout not found" });
      res.status(200).send(workout);
    } catch (error) {
      next(error);
    }
  });
}

module.exports = getWorkout;
