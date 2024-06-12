const { Car } = require("../models");

const carResolvers = {
    Query: {
        cars: async () => Car.find(),
        car: async (parent, { carId }) => Car.findOne({ _id: carId }),
    },
    Mutation: {
        addCar: async (parent, { name, model, year }) => {
            const car = new Car({ name, model, year });
            return car.save();
        },
        updateCar: async (parent, { carId, name, model, year }) => {
            return Car.findOneAndUpdate(
                { _id: carId },
                { name, model, year },
                { new: true, runValidators: true }
            );
        },
        deleteCar: async (parent, { carId }) =>
            Car.findOneAndDelete({ _id: carId }),
    },
};

module.exports = carResolvers;
