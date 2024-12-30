const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, 'Please enter the name'],
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Please enter the email'],
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: [true, 'Please enter the password'],
    trim: true,
    select: false
  },
  role: {
    type: String,
    default: "user",
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
