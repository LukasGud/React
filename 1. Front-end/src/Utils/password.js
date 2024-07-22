const jwt = require("jsonwebtoken");

const expiresIn = "30d";

const generateToken = (payload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });
  return token;
};

module.exports = { generateToken };