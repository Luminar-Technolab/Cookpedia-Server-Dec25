const express = require('express')
const recipeController = require('../controllers/recipeController')

const router = new express.Router()

//define route
//-----------------UnAuthorised Routes----------------------
//get all recipes
router.get('/recipes',recipeController.getAllRecipes)

//-----------------Authorised Routes----------------------
//-----------------Role - User ----------------------
//-----------------Role -  Admin----------------------

module.exports = router