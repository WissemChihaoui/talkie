const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 3,
    max: 20,
    unique: true,
  },
  email: {
    type: String,
    required: true,

    max: 50,
    unique: true,
  },
  password: {
    type: String,
    required: true,

    min: 8,
  },
  isAvatarImageSet: {
    type: Boolean,
    default: false,
  },
  avatarImage: {
    type: String,
    default: "",
  },

  images: {
    type: Array,
  },
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: "Users" }],

  isPrivate: {
    type: Boolean,
    default: false,
  },
  bio: { type: String },
  sexe: {
    type: String,
  },
  country: {
    type: String,
  },
  age: {
    type: Number,
  },
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
});

module.exports = mongoose.model("Users", userSchema);
