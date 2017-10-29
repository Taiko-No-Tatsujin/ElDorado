const mongoose = require('mongoose');

// define the Question model schema
const QuestionSchema = new mongoose.Schema({
  question: {
    type: String 
  },
  hint: String,
  imagePath:{
    type:String,
    index:{unique:true}
  } ,
  answer:{type:String, lowercase: true },
  questionNo:Number,
  createdDateTime:Date
});

QuestionSchema.pre('save',function saveHook(next){
  const questionSchema=this;
   return next();
});


module.exports = mongoose.model('Question', QuestionSchema);
