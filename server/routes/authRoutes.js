
const express = require('express');
const router = express.Router();
const User = require('../models/User');

const handleRegistration = async (req, res) => {
  const { email, password } = req.body;
  console.log(email,password)

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.error('Registration Error: Email already exists');
      return res.status(409).json({ message: 'Email already exists' });
    }

    const newUser = new User({ email, password });
    console.log(newUser)
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Registration Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

const handleLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });
    if (user) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      console.error('Login Error: Invalid credentials');
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

router.post('/register', handleRegistration);
router.post('/login', handleLogin);

module.exports = router;
