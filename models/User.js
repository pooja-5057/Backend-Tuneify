const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: String,
  googleId: {
    type: String,
    unique: true,
    sparse: true, 
  },
});

module.exports = mongoose.model("User", userSchema);
