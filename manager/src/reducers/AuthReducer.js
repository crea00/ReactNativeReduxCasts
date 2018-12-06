const INITIAL_STATE = { email: '' };

// The important thing to keep in mind is that we can never return 'undefined' from reducer
export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};