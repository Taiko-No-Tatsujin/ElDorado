class Auth {

  /**
   * Authenticate a user. Save a token string in Local Storage
   *
   * @param {string} token
   */
  static authenticateUser(token) {
    debugger;
   /** if (process.env.NODE_ENV !== 'production') {
        console.log('Looks like we are in development mode!');
      }
      else
      console.log('Looks like we are in production mode!');
   */
    localStorage.setItem('token', token);
  }

    /**
   * Authenticate a user. Save a token string in Local Storage
   *
   * @param {string} name
   */
  static authenticateName(name) {
    localStorage.setItem('name', name);
  }

  /**
   * Check if a user is authenticated - check if a token is saved in Local Storage
   *
   * @returns {boolean}
   */
  static isUserAuthenticated() {
    return localStorage.getItem('token') !== null;
  }

  /**
   * Deauthenticate a user. Remove a token from Local Storage.
   *
   */
  static deauthenticateUser() {
    localStorage.removeItem('token');
  }

  /**
   * Get a token value.
   *
   * @returns {string}
   */

  static getToken() {
    return localStorage.getItem('token');
  }

  static getName() {
    return localStorage.getItem('name');
  }

}

export default Auth;