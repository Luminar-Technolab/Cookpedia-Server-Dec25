const express = require('express')
const recipeController = require('../controllers/recipeController')
const feedbackController = require('../controllers/feedbackController')
const userController =  require('../controllers/userController')
const jwtMiddleware = require('../middlewares/jwtMiddleware')

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
//view recipe
router.get('/recipes/:id',jwtMiddleware,recipeController.viewRecipeController)
//related recipes
router.get('/recipes-related',jwtMiddleware,recipeController.getRelatedRecipesController)

//-----------------Role -  Admin----------------------

module.exports = router