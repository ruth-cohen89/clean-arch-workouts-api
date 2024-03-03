function makeDeleteWorkout({ workoutsDb }) {
  return async function deleteWorkoutUC(params) {
    const { id } = params;
    return await workoutsDb.deleteOne(id);
  };
}

module.exports = makeDeleteWorkout;
