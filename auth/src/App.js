import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCbPgBBQBrXRbkWFEyTH1N18enQrxnE4XY',
      authDomain: 'authentication-768f7.firebaseapp.com',
      databaseURL: 'https://authentication-768f7.firebaseio.com',
      projectId: 'authentication-768f7',
      storageBucket: 'authentication-768f7.appspot.com',
      messagingSenderId: '219914978669'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;