const express = require('express');
const jwt = require('jsonwebtoken');
const config = require('../../config');
const loggedInUser =require('../middleware/user-info.js');
const userResponse=require('../business/userResponseBL.js');

const router = new express.Router();
  
router.get('/question', (req, res) => {
  var reqFromServer=req;
  loggedInUser.getUserInfo(req,(userErr,userInfo)=>{
    userResponse.getQuestion(userInfo,(question)=>{
       if(question){
        return res.status(200).json({
          data:question,
          message:"successfully loaded"
        });
       }
       else
       return res.status(200).json({
          message:"No More Questions Found"
       });
    })
  }); 
});

router.post('/saveAnswer',(req,res) =>{
  loggedInUser.getUserInfo(req,(userErr,userInfo)=>{
   
    if(req.body.data && req.body.data.AnswerText){
    userResponse.saveUserResponse(req.body.data,userInfo,(postSave)=>{
      if(postSave.message && postSave.message==="Saved")
      {
        return res.status(200).json({ 
          message: "Correct Answer"
        });
      }
      else
      {
        return res.status(200).json({ 
          message: "Please Enter the Correct Answer"
      });
      }
      });
    }
    else{
      return res.status(200).json({ 
        message: "Please Enter the Correct Answer"
    });
    }
    }); 
});    
module.exports = router;