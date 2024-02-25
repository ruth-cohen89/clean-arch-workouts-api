function makeUpdateWorkout({ workoutsDb }) {
  return async function updateWorkout({ id, body } = {}) {
    const workout = await workoutsDb.updateWorkout(id, body);

    // check if working
    if (!workout) {
      throw new NotFoundError("Workout does not exist");
    }
  };
}
