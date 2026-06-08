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

//update feedback status