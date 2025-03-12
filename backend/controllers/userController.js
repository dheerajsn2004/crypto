const asyncHandler = require('express-async-handler');
const User = require('../models/User');

const registerUser = asyncHandler(async (req, res) => {
  const { teamName, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  const user = await User.create({
    teamName,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      teamName: user.teamName,
      email: user.email,
      points: user.points,
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

module.exports = { registerUser };