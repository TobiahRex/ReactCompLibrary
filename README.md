# _Tobiah Rex' React Component Library_
  * Started:
    - 13 October 2016
  * Updated:
    - 23 November 2016
    - 27 April 2017

## Components Description:
Library of Reusable React Components.
  * Smart
    - _navbar_options_currency_ Entire Suite of Components & Styles for Navbars using dynamic currency choices.
    - MUI Toast i.e. _Snackbar_.
    - MUI InputField i.e. _TextField_. Works with two _Raised Buttons_ ("Submit/Add" & "Clear"). See component Notes for details.
    - MUI LineItem i.e. _Thing_.  Works with two _Raised Buttons_ ("Edit" & "Delete"). See component Notes for details.
  * Pure
    * Uses _React.PureComponent_ instead of just using a pure function.
      - _Inputcard_: Was used in my _Entable_ project for Registration.  Takes a transform function, id, required, requiredMsg, Name, and value.
  * Dumb
    * Crud
      - _editGroup_: Contains MUI input and action buttons for edit ops on specific item.
      - _showGroup_: Contains MUI TextField and action buttons for showing list of items.
      - NOTE: These Groups should be imported to a Component performing a map, and passed 1 items data as props.
    * Auth
      - _Login Card_: Has required inputs and action buttons.
      - _Register Card_: Has required inputs and action buttons.
      - MUI _TextField.templates_ relating to auth.
    * Presentation.
      - _MaterialUICard_ Takes prop object containing data and methods.  Data is rendered. Methods are called from component buttons.

## Utilities Description:
Utility files with setup, configuration, and special use case templates.
  * package.lint.json
    - Contains script syntax for running eslint-watch scripts for CLI linting messages.
    - _CountryConstants.js_ is an array of all the countries in the world to be used with a drop down menu of some sort.
    - _StatesConstants.js_ is an array of all the US states to be used with a drop down menu of some sort.

## Extra:
Library of Reducers commonly re-used.
  * API reducer using [_Redux Sauce_](https://github.com/skellock/reduxsauce).
  * AUTH reducer - see README in Reducers/ for more info.

  <img src="http://i.imgur.com/HWXeDSS.png" />

## Features:
Airbnb Style Guide implemented.

## Helper Libraries:
* [Material UI](http://www.material-ui.com/#/components/raised-button)
* [Reselectors](https://github.com/reactjs/reselect#installation)

## Influences:
from: [Medium - Reselectors](https://medium.com/@esamatti/react-js-pure-render-performance-anti-pattern-fb88c101332f#.z954pl30z)
<!-- ## Updates: -->
