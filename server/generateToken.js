// Import the jsonwebtoken library
const jwt = require("jsonwebtoken");

// Function to generate JWT token
const generateToken = (userId, isAdmin) => {
  // Define payload (data to be included in the token)
  const payload = {
    id: userId,
    isAdmin: isAdmin,
  };

  // Define secret key used to sign the token (replace with your own secret key)
  const secretKey = "secret";

  // Generate and return JWT token
  const token = jwt.sign(payload, secretKey, { expiresIn: "10h" }); // Token expires in 1 hour
  return token;
};

// Export the function for use in other parts of your application
module.exports = generateToken;
