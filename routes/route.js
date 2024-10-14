const express = require('express')
const router = express.Router();


//controller
const {signUp, getUserData} = require('../controllers/signUpController')



//mapping
router.post('/createSignUp', signUp)
router.get('/getUserData', getUserData)


module.exports = router