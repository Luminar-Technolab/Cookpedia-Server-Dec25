const express = require('express')
const recipeController = require('../controllers/recipeController')
const feedbackController = require('../controllers/feedbackController')

const router = new express.Router()

//define route
//-----------------UnAuthorised Routes----------------------
//get all recipes
router.get('/recipes',recipeController.getAllRecipes)
//add feedback
router.post('/feedbacks',feedbackController.addFeedbackController)
//get approved feedback
router.get('/feedbacks/approve',feedbackController.getAllApprovedFeedbackController)

//-----------------Authorised Routes----------------------
//-----------------Role - User ----------------------
//-----------------Role -  Admin----------------------

module.exports = router