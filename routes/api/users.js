const express = require('express')
const router = express.Router()
const userCtrl = require('../../controllers/api/users')

// POST /api/v1/users
router.post('/', userCtrl.create)


// POST /api/v1/users/login
router.post('/login', userCtrl.login)

// GET /api/v1/users/:id/favorites
router.get('/:id/favorites', userCtrl.getFavorites)


// GET /api/v1/users/:id
router.get('/:id', userCtrl.show)



// PUT /api/v1/users/:id
router.put('/:id', userCtrl.update)


module.exports = router