const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
  user: String,
  day: {
    type: String,
    required: [true, "Choose a day."],
    enum: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
  },
  description: String,
});

// Create the Mongoose model
const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;

// function buildMakeWorkout({ Id, Validate }) {
//   return function makeWorkout({ id = Id.makeId(), user, day, plan } = {}) {
//     if (!Id.isValidId(id)) {
//       throw new Error("Comment must have a valid id.");
//     }

//     Validate.IsValid(user, day, plan);

//     return Object.freeze({
//       getId: () => id,
//       getUser: () => user,
//       getPlan: () => plan,
//     });
//   };
// }

// module.exports = buildMakeWorkout;
