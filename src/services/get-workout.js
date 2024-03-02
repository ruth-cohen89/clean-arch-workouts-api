function makeGetWorkout({ workoutsDb }) {
  return async function getWorkoutUC({ id } = {}) {
    return await workoutsDb.getById(id);
  };
}

module.exports = makeGetWorkout;
