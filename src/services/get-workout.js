function makeGetWorkout({ workoutsDb }) {
  return async function getWorkoutUC(params) {
    const { id } = params;
    return await workoutsDb.getById(id);
  };
}

module.exports = makeGetWorkout;
