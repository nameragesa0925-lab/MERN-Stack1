const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  age: {
    type: Number
  },
  gender: {
    type: String
  },
  nationality: {
    type: String
  },
  address: {
    type: String
  },
  phoneNumber: {
    type: Number,
    required: true
  },
  course: {
    type: String,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('Workout', workoutSchema)