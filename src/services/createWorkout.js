function makeCreateWorkout({ workoutsDb, workout }) {
  return async function postworkout({ body, headers, user }) {
    // Validate parameters...
    return await workoutsDb.createOne(body);
  };
}
