function makeCreateWorkout({ workoutsDb }) {
  return async function createWorkoutUC(body) {
    return await workoutsDb.createOne(body);
  };
}

module.exports = makeCreateWorkout;
