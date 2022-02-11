// @desc    register new user
// @route   POST /api/users
// @access  Public
const registerUser = (req, res) => {
  res.json({ message: 'register new user' });
};

// @desc    Authenticate user
// @route   POST /api/users
// @access  Public
const loginUser = (req, res) => {
  res.json({ message: 'Authenticate user' });
};

// @desc    get user data
// @route   GET /api/users/me
// @access  Private
const getMe = (req, res) => {
  res.json({ message: 'get me user' });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
