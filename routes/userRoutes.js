const express = require('express');
const { registerController, getUserController, updateUserController, deleteUserController} = require("../controllers/userController");

const router = express.Router();
//12345234



//routes
//Register || POST
router.post('/register', registerController );
//routes get
router.get('/getuser',  getUserController);
//routes update
router.put('/updateuser', updateUserController );
//delete user
router.delete('/deleteuser', deleteUserController );

module.exports = router;