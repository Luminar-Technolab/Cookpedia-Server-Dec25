const express = require('express')
const recipeController = require('../controllers/recipeController')
const feedbackController = require('../controllers/feedbackController')
const userController =  require('../controllers/userController')
const jwtMiddleware = require('../middlewares/jwtMiddleware')
const downloadController = require('../controllers/downloadController')
const saveRecipeController = require('../controllers/saveRecipeController')

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
//download recipe
router.post('/recipes/:id/download',jwtMiddleware,downloadController.addToDownloadController)
//save recipe
router.post('/recipes/:id/save',jwtMiddleware,saveRecipeController.saveRecipeToCollectionController)
//get all save recipe
router.get('/recipes-save',jwtMiddleware,saveRecipeController.getRecipeFromCollectionController)
//remove recipe from save recipe
router.delete('/recipes-save/:id',jwtMiddleware,saveRecipeController.removeRecipeFromCollectionController)

//-----------------Role -  Admin----------------------

module.exports = router