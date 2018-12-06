import { EMAIL_CHANGED } from '../actions/types';

const INITIAL_STATE = { email: '' };

// The important thing to keep in mind is that we can never return 'undefined' from reducer
export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      
    default:
      return state;
  }
};