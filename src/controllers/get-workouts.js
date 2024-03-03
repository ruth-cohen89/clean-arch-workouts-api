const getWorkouts = ({ getWorkoutsUC, catchAsync }) => {
  return catchAsync(async (req, res, next) => {
    try {
      const workouts = await getWorkoutsUC(req.body);
      res.status(200).send(workouts);
    } catch (error) {
      next(error);
    }
  });
};

module.exports = getWorkouts;
