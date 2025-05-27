const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
  console.log('Test')
  console.log(req.body)
  // const { name, email, password } = req.body;
  // const userExists = await User.findOne({ email });
  // if (userExists) return res.status(400).json({ message: 'User already exists' });

  // const hashedPassword = await bcrypt.hash(password, 10);
  // const user = await User.create({ name, email, password: hashedPassword });

  // res.status(201).json({
  //   _id: user._id,
  //   name: user.name,
  //   email: user.email,
  //   token: generateToken(user._id)
  // });
};
