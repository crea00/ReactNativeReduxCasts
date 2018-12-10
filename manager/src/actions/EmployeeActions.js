import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMPLOYEE_UPDATE, 
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS,
} from './types';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      // Update for latest version of RNRF - this should be 'Actions.pop()'
      // to return to the previous screen, NOT Actions.employeeList()
      // It prevents a double-scene stacking behavior!
      .then(() => {
        dispatch({ type: EMPLOYEE_CREATE });
        Actions.pop();
      });
  };
};

/**
 *  If we call employeesFetch just like one time it will immediately start up this event handler.
 *  And for the life of the rest of our application it will call this fat arrow function
 *  anytime, any new data comes across
 * 
 *  Set up to watch for some amount of new data
 *  At any point in our applications lifecycle that there's any new vlaue that comes across, 
 *  we will automatically dispatch an action of type EMPLOYEES_FETCH_SUCCESS with new data in there.
 */
export const employeesFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
    // Snapshot is not the actual data.
    // It is an object that describes the data that we could get access to.
      .on('value', snapshot => {
        dispatch({
          type: EMPLOYEES_FETCH_SUCCESS,
          payload: snapshot.val()
        });
      });
  };
};

