const downloads = require('../models/downloadModel')

//add to downloads 
exports.addToDownloadController = async(req,res)=>{
    console.log("Inside addToDownloadController");
    const {id} = req.params
    const userMail = req.payload
    const {name,cuisine,image} = req.body
    const allRecipes = await downloads.findOne({recipeId:id})
    if(allRecipes){
        allRecipes.count += 1
        await allRecipes.save()
        res.status(200).json(allRecipes)
    }else{
        const newRecipe = await downloads.create({
            recipeId:id,name,cuisine,image,count:1,userMail
        })
        res.status(201).json(newRecipe)
    }
}

//user download list
exports.userDownloadListController = async(req,res)=>{
    console.log("Inside userDownloadListController");
    const userMail = req.payload
    const allRecipes = await downloads.find({userMail})
    res.status(200).json(allRecipes)
}

//get all download list
exports.allDownloadListController = async(req,res)=>{
    console.log("Inside allDownloadListController");
    const allRecipes = await downloads.find()
    res.status(200).json(allRecipes)
}