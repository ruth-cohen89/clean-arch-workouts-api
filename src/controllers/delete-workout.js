function deleteWorkout({ deleteWorkoutUC, catchAsync }) {
  return catchAsync(async (req, res) => {
    const deletedWorkout = await deleteWorkoutUC(req.params);
    if (!deletedWorkout)
      return res.status(404).send({ error: "Workout not found" });
    res.status(200).json("Workout deleted");
  });
}
