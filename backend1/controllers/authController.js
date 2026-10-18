const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || 'supersecret', { expiresIn: '3d' })
}

const registerUser = async (req, res) => {
  const { firstName, lastName, email, password, phone, address } = req.body

  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ message: 'Please fill in all required fields' })
  }

  if (password.length < 6) {
    return res.status(400).json({ message: 'Password must be at least 6 characters long' })
  }

  try {
    const existingUser = await User.findOne({ email: email.toLowerCase() })

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' })
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
      firstName,
      lastName,
      email: email.toLowerCase(),
      password: hashedPassword,
      phone: phone || '',
      address: address || '',
    })

    const token = createToken(user._id)

    return res.status(201).json({
      token,
      user: {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        address: user.address,
      },
    })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

const loginUser = async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ message: 'Please fill in all fields' })
  }

  try {
    const user = await User.findOne({ email: email.toLowerCase() })

    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' })
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' })
    }

    const token = createToken(user._id)

    return res.status(200).json({
      token,
      user: {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        address: user.address,
      },
    })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

module.exports = {
  registerUser,
  loginUser,
}
