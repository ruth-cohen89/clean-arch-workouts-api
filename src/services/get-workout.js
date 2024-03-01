function makeGetWorkout({ workoutsDb }) {
  return async function getWorkoutUC({ id } = {}) {
    let query = workoutsDb.getById(id);
    console.log(query);
    query = query.select("-__v");

    const workout = await query;
    if (workout.length === 0) {
      throw new NotFoundError("Workout can not be found");
    }
    return workout;
  };
}

module.exports = makeGetWorkout;
