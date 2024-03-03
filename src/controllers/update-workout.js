function updateWorkout({ updateWorkoutUC, catchAsync }) {
  return catchAsync(async (req, res, next) => {
    try {
      const updatedWorkout = await updateWorkoutUC(req.body, req.params);
      if (!updatedWorkout)
        return res.status(404).send({ error: "Workout not found" });
      res.status(200).send(updatedWorkout);
    } catch (error) {
      next(error);
    }
  });
}

module.exports = updateWorkout;
