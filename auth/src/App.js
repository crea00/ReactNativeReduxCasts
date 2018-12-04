import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: false };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCbPgBBQBrXRbkWFEyTH1N18enQrxnE4XY',
      authDomain: 'authentication-768f7.firebaseapp.com',
      databaseURL: 'https://authentication-768f7.firebaseio.com',
      projectId: 'authentication-768f7',
      storageBucket: 'authentication-768f7.appspot.com',
      messagingSenderId: '219914978669'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
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