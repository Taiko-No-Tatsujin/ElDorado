import React from 'react';
import Auth from '../modules/Auth';
import Rules from '../components/rules.jsx';


class RulesPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);
    debugger;
    this.state = {
      data:[
        "1.Enter the right keyword to advance to next level.",
        "2.ONLY ALPHANUMERIC KEYWORDS ARE TO BE ENTERED.",
        "3.Try plurals and short forms also.",
        "4.Please don't refresh the browser."
    ] 
    };
  }


  /**
   * Render the component.
   */
  render() {
    return (<Rules data={this.state.data} />);
  }

}

export default RulesPage;