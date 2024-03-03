function createWorkout({ createWorkoutUC, catchAsync }) {
  return catchAsync(async (req, res, next) => {
    try {
      const workout = await createWorkoutUC(req.body);
      res.status(200).send(workout);
    } catch (error) {
      next(error);
    }
  });
}

module.exports = createWorkout;
