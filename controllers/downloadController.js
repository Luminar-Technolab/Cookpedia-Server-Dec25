const downloads = require('../models/downloadModel')

//add to downloads 
exports.addToDownloadController = async(req,res)=>{
    console.log("Inside addToDownloadController");
    const {id} = req.params
    const userMail = req.payload
    const {name,cuisine,image} = req.body
    const existingRecipe = await downloads.findOne({recipeId:id})
    if(existingRecipe){
        existingRecipe.count += 1
        await existingRecipe.save()
        res.status(200).json(existingRecipe)
    }else{
        const newRecipe = await downloads.create({
            recipeId:id,name,cuisine,image,count:1,userMail
        })
        res.status(201).json(newRecipe)
    }
}