function makeUpdateWorkout({ workoutsDb }) {
  return async function updateWorkoutUC(params, body) {
    const { id } = params;
    return await workoutsDb.updateOne(id, body);
  };
}
module.exports = makeUpdateWorkout;
