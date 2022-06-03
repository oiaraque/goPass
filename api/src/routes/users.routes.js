const { Router } = require('express');
const router = Router();
const db = require('../db')
const {
	getAllUsers,
	getUser,
	createUser,
	updateUser,
	deleteUser
} = require('../controllers/users.controllers')
//--------------------------------------------------------------------------------------

//RUTAS

router.get('/users', getAllUsers)

router.get('/users/:id', getUser) 	

router.post('/users', createUser)

router.delete('/users/:id', deleteUser)

router.put('/users/:id', updateUser)


//---------------------------------------------------------------------------------------
module.exports = router;