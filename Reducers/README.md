
## AuthRedux.js

This reducer contains the following set of grouped actions to solve their respective problems.

  1. activeUser<true/false>
    * Fired when the page is refreshed or on bootup.
  2. getActiveUser<success/fail>
    * For retrieving users from the local database.
  3. createUserFirebase<success/fail>
    * For creating a new user account on Firebase
  4. saveNewUser<success/fail>
    * For saving that newly created user into the local database.
  5. login & logout
    * what you would typically expect.
