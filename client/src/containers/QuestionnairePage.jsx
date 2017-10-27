import React, { PropTypes } from 'react';
import Auth from '../modules/Auth';
import Questionnaire from '../components/Questionnaire.jsx';


class QuestionnairePage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props, context) {
    super(props, context); 
    // set the initial component state
    this.state = {
       question:{}
    };

    this.processForm = this.processForm.bind(this); 
    this.processForm();
  }

  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  processForm() {  
    // create an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/question');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => { 
      if (xhr.status === 200) {
        this.setState({ 
          question:{
            QuestionText: xhr.response.questionText,
            QuestionUrl:xhr.response.questionUrl,
            QuestionHint:xhr.response.questionHint
          } 
        });
      }
    });
    xhr.send();
  } 
  /**
   * Render the component.
   */
  render() {
    return (
      <Questionnaire  onSubmit={this.processForm} Question={this.state.question} />
    );
  }
}

QuestionnairePage.contextTypes = {
  router: PropTypes.object.isRequired
};

export default QuestionnairePage;