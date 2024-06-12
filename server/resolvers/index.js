const { mergeResolvers } = require('@graphql-tools/merge');
/* merger npm info https://www.npmjs.com/package/@graphql-tools/merge */
const carResolvers = require('./carResolvers');
const userResolvers = require('./userResolvers');
const bookingResolvers = require('./bookingResolvers');

const resolvers = mergeResolvers([carResolvers, userResolvers, bookingResolvers]);

module.exports = resolvers;
