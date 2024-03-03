function deleteWorkout({ deleteWorkoutUC, catchAsync }) {
  return catchAsync(async (req, res, next) => {
    try {
      const deletedWorkout = await deleteWorkoutUC(req.params);
      if (!deletedWorkout)
        return res.status(404).send({ error: "Workout not found" });
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  });
}

module.exports = deleteWorkout;
