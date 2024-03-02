const getWorkouts = ({ getWorkoutsUC, catchAsync }) => {
  return catchAsync(async (req, res) => {
    const workouts = await getWorkoutsUC(req.body);
    if (!workouts) return res.status(404).send({ error: "No Workouts exist" });
    res.status(200).send(workouts);
  });
};

module.exports = getWorkouts;
