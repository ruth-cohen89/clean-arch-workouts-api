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
