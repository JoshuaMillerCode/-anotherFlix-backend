const express = require('express')
const router = express.Router()
const userCtrl = require('../../controllers/api/users')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// POST /api/v1/users
router.post('/', userCtrl.create)


// POST /api/v1/users/login
router.post('/login', userCtrl.login)



// GET /api/v1/users/:id/favorites
router.get('/:id/favorites', ensureLoggedIn ,userCtrl.getFavorites)


// GET /api/v1/users/:id
router.get('/:id', ensureLoggedIn ,userCtrl.show)



// PUT /api/v1/users/:id
router.put('/:id', ensureLoggedIn ,userCtrl.update)


module.exports = router