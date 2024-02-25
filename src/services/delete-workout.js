function makeDeleteWorkout({ workoutsDb }) {
  return async function deleteWorkout({ id } = {}) {
    const workout = await workoutsDb.deleteWorkout(id);

    if (!workout) {
      throw new NotFoundError("Workout does not exist");
    }
  };
}
