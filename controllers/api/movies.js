const Movie = require('../../models/Movie')

// Find all movies
const index = async (req, res) => {
    try {
        const movies = await Movie.find({})
        res.status(200).json(movies)
    } catch(e) {
        res.status(400).json({msg: e.message})
    }
}

// Create a movie
const create = async (req, res) => {
  try {
      const createdMovie = await Movie.create(req.body)
      res.status(200).json(createdMovie)
  } catch(e) {
      res.status(400).json({msg: e.message})
  }
}

const update = async (req, res) => {
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updatedMovie)
  } catch (err) {
    res.status(400).json({msg: err.message})
  }
}

const remove = async (req, res) => {
  try {
    const deleteMovie = await Movie.findByIdAndDelete(req.params.id)
    res.status(200).json(deleteMovie)
  } catch (err) {
    res.status(400).json({msg: err.message})
  }
}


module.exports = {
    index,
    create,
    update,
    remove
}