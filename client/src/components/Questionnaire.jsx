import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Image } from 'material-ui-image'

const QuestionnaireForm = ({
  onSubmit, 
  QuestionText,
  QuestionHint,
  QuestionUrl="/images/noImage.png"
})  => (
<Card className="container">
    <form action="/" onSubmit={onSubmit}> 
    <div className="field-line"> 
          {QuestionText}
      </div>
      <div className="field-line">
         {/* <Image src="/images/3.jpg" style={{width: "100%",height:300,backgroundColor:"#fff"}}/> */}
         <Image src={QuestionUrl} style={{width: "100%",height:300,backgroundColor:"#fff"}}/> 
      </div>
      <div className="field-line"> 
          {QuestionHint}
      </div>
      <div className="field-line"> 
        <TextField
          floatingLabelText="Type your answer here"
          name="answerText"
          id="txtAnswer" 
          style={{width: "80%"}}
        /> 
         <RaisedButton type="submit" label="Save" primary  style={{marginLeft:10}}/> 
      </div> 
   </form>
</Card>
);

QuestionnaireForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  QuestionText: PropTypes.string, 
  QuestionUrl: PropTypes.string, 
  QuestionHint:PropTypes.string
};

export default QuestionnaireForm;