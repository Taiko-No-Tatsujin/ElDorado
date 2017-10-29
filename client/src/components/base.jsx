import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import Auth from '../modules/Auth';


const Base = ({ children }) => (
  <div>
    <div className="top-bar">
      <div className="top-bar-left">
        <IndexLink to="/">EL-Dorado </IndexLink>
      </div>

      {Auth.isUserAuthenticated() ? (
        <div>
          <div className="top-bar-left">
          <Link to="/rules"> Rules</Link>
         </div> 
        <div className="top-bar-right">
             <span className="welcome-text"> Welcome:</span> 
              <span className="loginName">{Auth.getName()} </span>
            <Link to="/logout">Log out</Link>
        </div>
        </div>
      ) : (
        <div className="top-bar-right">
          <Link to="/login">Log in</Link>
          <Link to="/signup">Sign up</Link>
        </div>
      )}

    </div>

    { /* child component will be rendered here */ }
    {children}

  </div>
);

Base.propTypes = {
  children: PropTypes.object.isRequired
};

export default Base;