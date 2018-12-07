import React, { Component } from 'react'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCYbpa8Km3v3gdGeOhdSbmsvM9GeonG8V0',
      authDomain: 'manager-cedae.firebaseapp.com',
      databaseURL: 'https://manager-cedae.firebaseio.com',
      projectId: 'manager-cedae',
      storageBucket: 'manager-cedae.appspot.com',
      messagingSenderId: '1021115286270'
    };
    
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;