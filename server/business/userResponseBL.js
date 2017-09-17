const express = require('express'); 
const moment=require('moment');
const loggedInUser =require('../middleware/user-info.js');
const UserResponse = require('mongoose').model('UserResponse');
const Question = require('mongoose').model('Question');

module.exports={
  saveUserResponse:function(req,next){
    loggedInUser.getUserInfo(req,(userErr,userInfo)=>{
        if(userInfo){
            const questionText="Please identify the image";
            const question={
                question:questionText,
                hint:"West-Asian ISP",
                imagePath:"1.JPG",
                answer:"Siberia",
                questionNo:1,
                createdDateTime:moment()                
            };
            let newQuestion=new Question(question);
            newQuestion.save((err)=>{
               // if(err){return done(err);}
                Question.findOne({question:questionText},(qusErr,question)=>{
                const userResponse={
                    question:question,
                    user:userInfo,
                    userResponseText:"Cyber country",
                    isCorrectAnswer:false,
                    responseDateTime:moment()
                };
                let newUserResponse=new UserResponse(userResponse);
                newUserResponse.save((err)=>{
                    //if(err){return done(err);}
                    return next();//done(null);
                });
               // return next();
             });
            }); 
        }
  });
 }
}

  