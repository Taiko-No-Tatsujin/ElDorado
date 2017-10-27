const express = require('express');
const jwt = require('jsonwebtoken');
const config = require('../../config');
const loggedInUser =require('../middleware/user-info.js');
const userResponse=require('../business/userResponseBL.js');

const router = new express.Router();

// router.get('/dashboard', (req, res) => {
//   userResponse.saveUserResponse(req,(postSave)=>{
//   loggedInUser.getUserInfo(req,(userErr,userInfo)=>{
//     if(userErr){
//       return res.status(401).json({
//         message: "Invalid Login Attempt"
//       });
//     }
//     return res.status(200).json({
//       data:userInfo,
//       message: "Logged in to dashboard"
//     });
//   });
// });
// });

router.post('/dashboard', (req, res) => {
  var reqFromServer=req;
 return res.status(200).json({
    message:"sample message" //"You're authorized to see this secret message."
  });
});

router.get('/question', (req, res) => {
  var reqFromServer=req;
 return res.status(200).json({
  questionText: "Identify the image", 
  questionUrl: "/images/3.jpg", 
  questionHint:"PropTypes.string.questionHint"
  });
});
module.exports = router;