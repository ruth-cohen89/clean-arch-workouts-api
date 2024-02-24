function buildMakeWorkout({ Id }) {
  return function makeWorkout({ id = Id.makeId(), user, day, plan } = {}) {
    if (!Id.isValidId(id)) {
      throw new Error("Comment must have a valid id.");
    }
    if (!user) {
      throw new Error("Workout must have a user.");
    }
    if (!day) {
      throw new Error("Workout must have a day.");
    }
    if (!plan) {
      throw new Error("Workout must have a plan.");
    }
    return Object.freese({
      getId: () => id,
      getUser: () => user,
      getPlan: () => plan,
    });
  };
}

module.exports = buildMakeWorkout;
