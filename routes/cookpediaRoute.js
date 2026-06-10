const express = require('express')
const recipeController = require('../controllers/recipeController')
const feedbackController = require('../controllers/feedbackController')
const userController =  require('../controllers/userController')

const router = new express.Router()

//define route
//-----------------UnAuthorised Routes----------------------
//get all recipes
router.get('/recipes',recipeController.getAllRecipes)
//add feedback
router.post('/feedbacks',feedbackController.addFeedbackController)
//get approved feedback
router.get('/feedbacks/approve',feedbackController.getAllApprovedFeedbackController)
//register
router.post('/register',userController.registerController)
//login
router.post('/login',userController.loginController)

//-----------------Authorised Routes----------------------
//-----------------Role - User ----------------------
//-----------------Role -  Admin----------------------

module.exports = router