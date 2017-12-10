const express = require('express'); 
const moment=require('moment');
const loggedInUser =require('../middleware/user-info.js');
const UserResponse = require('mongoose').model('UserResponse');
const Question = require('mongoose').model('Question');
const User = require('mongoose').model('User');

module.exports={
  getQuestion:function(userInfo,next){
    if(userInfo){
        var nextQuestion=function(response){
                if(response && response.length>0){
                    Question
                    .findOne(
                        {
                          "_id": { "$nin": response }
                        }
                    )
                    .sort({questionNo:1})
                    .select('-answer -__v -createdDateTime')
                    .exec(function(err,questionToAsk){
                        return next(questionToAsk);
                    });
                }
                else{
                    Question.findOne().sort({questionNo: 1}).exec(function(err, questionToAsk) { 
                        return next(questionToAsk)
                    });
                }
        };
      
        UserResponse.find({user:userInfo._doc._id})
                    .select('question')
                    .exec(function(error,data){
                        let questionAnswered;
                        if(data && data.length>0){
                            questionAnswered= data.map(function(item){
                                return  item.question.toString()
                            });
                        }
                        nextQuestion(questionAnswered);
                    });
    }else{
        return next(null);
    }
  },
  saveUserResponse:function(req,userInfo,next){
    if(userInfo){
        Question
        .findOne({_id:req.Id,answer:req.AnswerText.trim()},(err,answeredQuestion)=>{
            if(answeredQuestion)
        {
            const userResponse={
               question:answeredQuestion._id,
               user:userInfo._id,
               userResponseText:req.AnswerText,
               responseDateTime:moment()
            };
            let newUserResponse=new UserResponse(userResponse);
            newUserResponse.save((err)=>{
                return next({message:'Saved'});
            });
        }
        else{
            return next({message:'Not Saved'}); 
        }
        });

        }
    },
    getLeaderBoardStatus:function(req,userInfo,next){
        if(userInfo){
            // UserResponse.aggregate([
            //         {
            //             $unwind:'$user'
            //         },{
            //         $group:{
            //             _id:'$user',
            //             count:{$sum:1}
            //         }
            //     }
            // ],function(err,groupResults){
            //   UserResponse.populate(groupResults,{path:"user"},function(err,leaderResults){
            //         return next(leaderResults);
            //   });   
            // })
            UserResponse.aggregate([
                {
                    $unwind:'$user'
                },{
                $group:{
                    _id:'$user',
                    //count:{$sum:1}
                    rank : { $sum : 1 }
                }
            },
            { $sort : { 'rank' : -1}}
        ]).exec(function(err,groupResults){
            User.populate(groupResults,{path:"_id"},function(err,leaderResults){ 
                return next(leaderResults);
            });   
        });
             
        }
        else{
            return next({message:'Not Signed In'});
        }
    }
}

  