/**
 *  Check this code in this website
 *  https://stephengrider.github.io/JSPlaygrounds/
 */

// Create a reducer
const reducer = (state = [], action) => {
  if(action.type === 'split_string') {
    return action.payload.split('');
  } else if (action.type === 'add_character') {
    return [ ...state, action.payload ];
  }
  
  return state;
};

// Create a store
const store = Redux.createStore(reducer);

store.getState();

// Action is a very specific directive to tell the reducer 
// how to update it state in a very particular fashion
const action = { 
  type: 'split_string',
  // The payload property is the data that we want to communicate to the reducer
  payload: 'asdf'
};

// After creating action, we need to dispatch an action to reducer
store.dispatch(action);

store.getState();

const action2 = {
	type: 'add_character',
  payload: 'a'
};

store.dispatch(action2);
store.getState();
