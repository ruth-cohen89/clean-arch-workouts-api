const getWorkouts = ({ getWorkoutsUC, catchAsync }) => {
  return catchAsync(async (req, res) => {
    const workouts = await getWorkoutsUC(req.body);
    res.status(200).send(workouts);
  });
};

module.exports = getWorkouts;
