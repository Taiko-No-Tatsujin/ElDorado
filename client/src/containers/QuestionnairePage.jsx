import React, { PropTypes } from 'react';
import Auth from '../modules/Auth';
import Questionnaire from '../components/Questionnaire.jsx';
// import config from './config';


class QuestionnairePage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props, context) {
    super(props, context); 
    // set the initial component state
    this.state = {
       question:{},
       messageText:""
    };

    this.getQuestion = this.getQuestion.bind(this); 
    this.saveQuestion = this.saveQuestion.bind(this); 
    this.updateState = this.updateState.bind(this); 
    this.getQuestion();
  }

  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  getQuestion() {  
    // create an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/question');
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => { 
      if (xhr.status === 200) {
        debugger;
        var response=xhr.response.data,
        defaultImagePath='/images/';
        if(response && response.question){
        this.setState({ 
          question:{
            QuestionText: response.question,
            QuestionUrl: defaultImagePath.concat(response.imagePath),
            QuestionHint: response.hint,
            Id:response._id,
            AnswerText:""
          },
          messageText:""
        });
      }
      else{
        this.setState({messageText:xhr.response.message});
      }
      }
    });
    xhr.send();
  } 
 
  saveQuestion(e){
    e.preventDefault();
    debugger;
    var currentState={
      data:this.state.question
    };
    const xhr = new XMLHttpRequest();
    xhr.open('post', '/api/saveAnswer');
    xhr.setRequestHeader('Content-type', 'application/json');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => { 
      if (xhr.status === 200) {
        debugger; 
        if(xhr.response.message=== "Correct Answer"){
          this.setState({messageText:xhr.response.message});
          this.getQuestion();
        }
        else{
          this.setState({messageText:xhr.response.message});
        }
      }
    });
    xhr.send(JSON.stringify(currentState));
  }

  updateState(event) {
    const field = event.target.name;
    const question = this.state.question;
    question[field] = event.target.value;

    this.setState({
      question
    });
  }
  /**
   * Render the component.
   */
  render() {
    return (
      <Questionnaire 
       onSubmit={this.saveQuestion} 
       Question={this.state.question} 
       messageText={this.state.messageText}
       onChange={this.updateState} />
    );
  }
}

QuestionnairePage.contextTypes = {
  router: PropTypes.object.isRequired
};

export default QuestionnairePage;