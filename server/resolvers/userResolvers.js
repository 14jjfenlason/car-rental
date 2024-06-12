const { User } = require('../models/User');
const { AuthenticationError } = require('@apollo/client');
const { signToken } = require('../utils/auth');

const userResolvers = {
  Query: {
    users: async () => User.find(),
    user: async (parent, { userId }) => User.findOne({ _id: userId }),
  },
  Mutation: {
    addUser: async (parent, { name, email, password }) => {
      const user = await User.create({ name, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('Incorrect email or password');
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect email or password');
      }
      const token = signToken(user);
      return { token, user };
    },
    updateUser: async (parent, { userId, name, email }) => {
      return User.findOneAndUpdate(
        { _id: userId },
        { name, email },
        { new: true, runValidators: true }
      );
    },
    deleteUser: async (parent, { userId }) => User.findOneAndDelete({ _id: userId }),
  },
};

module.exports = userResolvers;
