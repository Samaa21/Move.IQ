import User from '../models/User.js';

// Sign Up
export const registerUser = async (req, res) => {
  const { name, email, height, weight, age, gender } = req.body;

  if (!name || !email || !height || !weight || !age || !gender) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(409).json({ message: 'Email already registered.' });
    }

    const newUser = await User.create({ name, email, height, weight, age, gender });
    res.status(201).json({
      message: 'User registered successfully!',
      user: newUser
    });

  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Sign In
export const loginUser = async (req, res) => {
  const { email, name } = req.body;

  if (!email || !name) {
    return res.status(400).json({ message: 'Email and name are required.' });
  }

  try {
    const user = await User.findOne({ email });

    if (!user || user.name !== name) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({
      message: 'Login successful!',
      user
    });

  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
