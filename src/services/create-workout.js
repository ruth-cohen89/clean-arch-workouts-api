function makeCreateWorkout({ workoutsDb, workout }) {
  return async function postworkoutUC({ body, headers, user }) {
    // Validate parameters...
    return await workoutsDb.createOne(body);
  };
}

module.exports = makeCreateWorkout;
