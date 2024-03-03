function createWorkout({ getWorkoutUC, catchAsync }) {
  return catchAsync(async (req, res, next) => {
    try {
      const workout = await getWorkoutUC(req.params);
      res.status(200).send(workout);
    } catch (error) {
      next(error);
    }
  });
}

module.exports = createWorkout;
