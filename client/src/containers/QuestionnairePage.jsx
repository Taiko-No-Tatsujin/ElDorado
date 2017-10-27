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
      questionText: "", 
      questionUrl: "", 
      questionHint:""
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
      debugger;
      if (xhr.status === 200) {
        this.setState({ 
          questionText: xhr.response.questionText, 
          questionUrl: xhr.response.questionUrl, 
          questionHint:xhr.response.questionHint
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
      <Questionnaire  onSubmit={this.processForm} QuestionText={this.state.questionText} QuestionUrl={this.state.questionUrl} QuestionHint={this.state.questionHint} />
    );
  }
}

QuestionnairePage.contextTypes = {
  router: PropTypes.object.isRequired
};

export default QuestionnairePage;