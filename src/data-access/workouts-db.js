function makeWorkoutsDb({ Workout }) {
  const getAll = async () => {
    return await Workout.find();
  };
  const getById = async (id) => {
    return await Workout.findById(id);
  };
  const createOne = async (input) => {
    return await Workout.create(input);
  };
  const deleteOne = async (id) => {
    return await Workout.deleteById(id);
  };
  updateOne = async (id, input) => {
    return await Workout.findByIdAndUpdate(id, input, { new: true });
  };

  return Object.freeze({
    getAll,
    getById,
    createOne,
    deleteOne,
    updateOne,
  });
}