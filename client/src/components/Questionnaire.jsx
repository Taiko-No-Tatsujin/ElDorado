import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Image } from 'material-ui-image'

const QuestionnaireForm = ({
  onSubmit, 
  Question,
  answerChange,
  messageText,
  defaultImage="/images/noImage.png"
})  => (
<Card className="containerQuestion">
    <form action="/" onSubmit={onSubmit}> 
    <div className="field-line"> 
          <span className="question-color">   {Question.QuestionText?Question.QuestionText:""} </span>
          <span className="level-color"> Level : {Question.QuestionNo}</span>
      </div>
      <div className="field-line">
         <Image src={Question.QuestionUrl?Question.QuestionUrl:defaultImage} style={{width: "100%",height:300,backgroundColor:"#fff"}}/> 
      </div>
      <div className="field-line"> 
        <span className="hint-color">  {Question.QuestionHint?"Hint:":""} </span>
        <span>{Question.QuestionHint? Question.QuestionHint:""}</span>
      </div>
      <div className="field-line"> 
        <TextField
          floatingLabelText="Type your answer here"
          name="AnswerText"
          id="txtAnswer" 
          value={Question.AnswerText}
          onChange={answerChange}
          style={{width:"80%"}}
        /> 
         <RaisedButton type="submit" label="Save" primary  style={{marginLeft:10}}/> 
      </div> 
      <div  className="field-line">
        {messageText}
      </div>
   </form>
</Card>
);

QuestionnaireForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  Question: PropTypes.object, 
  messageText:PropTypes.string
};

export default QuestionnaireForm;