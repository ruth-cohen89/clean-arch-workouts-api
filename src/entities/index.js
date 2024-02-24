import Id from "../Id";
//import buildMakeWorkout from "./workout";
const buildMakeWorkout = require("./workout");
const Validate = require("../../utils/validate");

const makeWorkout = buildMakeWorkout({ Id, currentDay });

//export default makeWorkout;

// function getCurrentDay() {
//   const currentDay = new Date().toLocaleDateString("en-US", {
//     weekday: "long",
//   });
//   return currentDay;
// }
// getCurrentDay();
