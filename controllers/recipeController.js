const recipes = require('../models/recipeModel')

//get all recipes
exports.getAllRecipes = async (req,res)=>{
    console.log("Inside getAllRecipes controller");
    const allRecipes = await recipes.find()
    res.status(200).json(allRecipes)    
}

//view recipe
exports.viewRecipeController = async (req,res)=>{
    console.log("Inside viewRecipeController");
    const {id} = req.params
    const recipeDetails = await recipes.findById({_id:id})
    res.status(200).json(recipeDetails)    
}

//get all related recipe
exports.getRelatedRecipesController = async (req,res)=>{
    console.log("Inside getRelatedRecipesController");
    const {cuisine} = req.query
    console.log(cuisine);
    
    const allRelatedRecipes = await recipes.find({cuisine})
    res.status(200).json(allRelatedRecipes)    
}