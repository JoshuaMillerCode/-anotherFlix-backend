const { Schema, model } = require("../config/database")

const userSchema = new Schema({
  active: Boolean,
  // subscription: String,
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    lowercase: true,
    required: true
  },
  password: {
    type: String,
    trim: true,
    minlength: 3,
    maxlength: 255,
    unique: true
  },
  phone: String,
  picture: String,
  favorites: [{type: Schema.Types.ObjectId, ref: "Favorites"}]
},
{
  timestamps: true
})

module.exports = model("User", userSchema)