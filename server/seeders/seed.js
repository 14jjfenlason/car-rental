const db = require("../config/connection");
const { User, Car } = require("../models");
const userSeeds = require("./userSeeds.json");
const carSeeds = require("./carSeeds.json");
const cleanDB = require("./cleanDB");

db.once("open", async () => {
  try {
    await cleanDB("Car", "cars");
    await cleanDB("User", "users");
    /*     await cleanDB('Reservation', 'reservations');
     */
    await User.create(userSeeds);
    await Car.create(carSeeds);

    console.log("Database seeded with user and car data.");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("All done!");
  process.exit(0);
});
