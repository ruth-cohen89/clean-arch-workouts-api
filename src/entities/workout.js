function buildMakeWorkout({ Id, Validate }) {
  return function makeWorkout({ id = Id.makeId(), user, day, plan } = {}) {
    if (!Id.isValidId(id)) {
      throw new Error("Comment must have a valid id.");
    }

    Validate.IsValid(user, day, plan);

    return Object.freese({
      getId: () => id,
      getUser: () => user,
      getPlan: () => plan,
    });
  };
}

module.exports = buildMakeWorkout;
