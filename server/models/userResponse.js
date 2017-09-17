const mongoose = require('mongoose');

// define the User Response model schema

const UserResponseSchema = new mongoose.Schema({
  question:{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
  user:{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }, 
  userResponseText:String,
  isCorrectAnswer:Boolean,
  responseDateTime:Date
});

UserResponseSchema.pre('save',function saveHook(next){
   const userResponse=this;
    return next();
});

module.exports = mongoose.model('UserResponse', UserResponseSchema);