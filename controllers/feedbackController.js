const feedbacks = require('../models/feedbackModel')

//add feedback
exports.addFeedbackController = async (req,res)=>{
    console.log("Inside addFeedbackController");
    const {name,email,message} = req.body
    const newFeedback = await feedbacks.create({name,email,message})
    res.status(200).json(newFeedback)    
}

//get all approved feedbacks
exports.getAllApprovedFeedbackController = async (req,res)=>{
    console.log("Inside getAllApprovedFeedbackController");
    const allApprovedFeedbacks = await feedbacks.find({status:{$eq:'approve'}})
    res.status(200).json(allApprovedFeedbacks)    
}

//get all feedbacks
exports.getAllFeedbackController = async (req,res)=>{
    console.log("Inside getAllFeedbackController");
    const allFeedbacks = await feedbacks.find()
    res.status(200).json(allFeedbacks)    
}

//update feedback status
exports.updateFeedbackController = async (req,res)=>{
    console.log("Inside updateFeedbackController");
    const {id} = req.params
    const {status} = req.body
    const updatedFeedback = await feedbacks.findById({_id:id})
    updatedFeedback.status = status
    await updatedFeedback.save()
    res.status(200).json(updatedFeedback)    
}
