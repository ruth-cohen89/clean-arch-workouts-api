function makeGetWorkouts({ workoutsDb, workout }) {
  return async function getWorkoutsUC({ body, headers, user }) {
    // let filter = {};
    // if (req.params.userId) filter = { user: req.params.userId };
    // const features = new APIFeatures(Model.find(filter), req.query)
    //   .filter()
    // const doc = await features.query;

    return await workoutsDb.getAll(body);
  };
}
