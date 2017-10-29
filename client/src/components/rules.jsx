import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';


const Rules = ({ data }) => (
  <Card className="container-Rules">
    <CardTitle
      title="Rules"
      className="rules-title"
    />
    {data.map((item,index) => 
    <p key={index}>{item}</p>
)}
   
  </Card>
);

Rules.propTypes = {
  data: PropTypes.array
};

export default Rules;