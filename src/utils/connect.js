const mongoose = require("mongoose");
const config = require("config");

async function connect() {
  const DB = process.env.DATABASE.replace(
    "<PASSWORD>",
    process.env.DATABASE_PASSWORD
  );

  try {
    await mongoose.connect(DB, {
      w: "majority",
    });
    console.log("DB connected");
  } catch (error) {
    console.error("Could not connect to db");
    console.error(error);
    process.exit(1);
  }
}

module.exports = connect;
