const User = require('../../models/User')

// Create a user
const create = async (req, res) => {
  try {
    const createdUser = await User.create(req.body)
    res.status(200).json(createdUser)
  } catch (err) {
    res.status(400).json({msg: err.message})
  }
}

const login = async (req, res) => {
  try {

  } catch (err) {
    res.status(400).json({msg: err.message})
  }
}

const update = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(updatedUser)
  } catch (err) {
    res.status(400).json({msg: err.message})
  }
}

// Find a user
const show = async (req, res) => {
  try {
    const foundUser = await User.findById(req.params.id)
    res.status(200).json(foundUser)
  } catch (err) {
    res.status(400).json({msg: err.message})
  }
}

// Get User Favorites
const getFavorites = async (req, res) => {
  try {
    const foundUser = await User.findById(req.params.id).populate('favorites')
    res.status(200).json(foundUser.favorites)
  } catch (err) {
    res.status(400).json({msg: err.message})
  }
}



module.exports = {
  create,
  login,
  update,
  show,
  getFavorites
}