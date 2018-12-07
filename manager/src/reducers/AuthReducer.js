import { 
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
 } from '../actions/types';

const INITIAL_STATE = { 
  email: '', 
  password: '',
  user: null
 };

// The important thing to keep in mind is that we can never return 'undefined' from reducer
export default (state=INITIAL_STATE, action) => {
  console.log(action);
  
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

/**
 *  Proposed State
 * 
 *  Email: When the user types something
 *  Password: When the user types something in the password field
 *  Loading: True when we start an auth request, false when it is complete
 *  Error: Default to empty string. Toss in an error message when we get a failed auth request
 *  User: Default to null. Put in the user model when we successfully auth
 * 
 */
