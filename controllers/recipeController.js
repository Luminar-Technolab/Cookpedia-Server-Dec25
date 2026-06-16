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
//remove recipe controller
exports.removeRecipeController = async (req,res)=>{
    console.log("Inside removeRecipeController");
    const {id} = req.params
    const recipeDetails = await recipes.findByIdAndDelete({_id:id})
    res.status(200).json(recipeDetails)    
}
//add recipe
exports.addRecipeController = async (req,res)=>{
    console.log("Inside addRecipeController");
    const {name,ingredients,instructions,prepTimeMinutes,cookTimeMinutes,servings,difficulty,cuisine,caloriesPerServing,image,mealType} = req.body
    const existingRecipe = await recipes.findOne({name})
    if(existingRecipe){
         res.status(409).json("Recipe already added...")
    }
    const recipeDetails = await recipes.create({
        name,ingredients,instructions,prepTimeMinutes,cookTimeMinutes,servings,difficulty,cuisine,caloriesPerServing,image,mealType
    })
    res.status(200).json(recipeDetails)    
}

//edit recipe
exports.editRecipeController = async (req,res)=>{
    console.log("Inside editRecipeController");
    const {name,ingredients,instructions,prepTimeMinutes,cookTimeMinutes,servings,difficulty,cuisine,caloriesPerServing,image,mealType} = req.body
    const {id} = req.params
    const updateRecipeDetails = await recipes.findByIdAndUpdate({_id:id},{
        name,ingredients,instructions,prepTimeMinutes,cookTimeMinutes,servings,difficulty,cuisine,caloriesPerServing,image,mealType
    },{new:true})
    res.status(200).json(updateRecipeDetails)    
}