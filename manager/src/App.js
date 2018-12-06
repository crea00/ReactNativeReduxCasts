import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

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
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;