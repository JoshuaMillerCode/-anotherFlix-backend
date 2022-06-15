const { Schema, model } = require("../config/database")

const movieSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  plot: {
    type: String,
    required: true
  },
  image: String,
  type: String,
  contentRating: String,
  runtimeMins: String,
  imDbRating: String
},
{
  timestamps: true
})

module.exports = model("Movie", movieSchema)