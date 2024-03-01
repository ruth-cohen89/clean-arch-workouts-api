function makeUpdateWorkout({ workoutsDb }) {
  return async function updateWorkoutUC({ id, body } = {}) {
    const workout = await workoutsDb.updateWorkout(id, body);

    // check if working
    if (!workout) {
      throw new NotFoundError("Workout does not exist");
    }
  };
}
module.exports = makeUpdateWorkout;
