import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Image } from 'material-ui-image'

const QuestionnaireForm = ({
  onSubmit, 
  Question,
  onChange,
  messageText,
  defaultImage="/images/noImage.png"
})  => (
<Card className="container">
    <form action="/" onSubmit={onSubmit}> 
    <div className="field-line"> 
          {Question.QuestionText}
      </div>
      <div className="field-line">
         <Image src={Question.QuestionUrl?Question.QuestionUrl:defaultImage} style={{width: "100%",height:300,backgroundColor:"#fff"}}/> 
      </div>
      <div className="field-line"> 
          {Question.QuestionHint}
      </div>
      <div className="field-line"> 
        <TextField
          floatingLabelText="Type your answer here"
          name="AnswerText"
          id="txtAnswer" 
          value={Question.AnswerText}
          onChange={onChange}
          style={{width: "80%"}}
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