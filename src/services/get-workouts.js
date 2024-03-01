function makeGetWorkouts({ workoutsDb, workout }) {
  return async function getWorkoutsUC() {
    return await workoutsDb.getAll();
  };
}
module.exports = makeGetWorkouts;
