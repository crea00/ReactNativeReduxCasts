import React, { Component } from "react";
import { View, Text } from "react-native";

// Class do not require semi-colons!
class AlbumList extends Component {
  // Right location to initiate some loading of data or some HTTP request to go and fetch our data and retrieve it for our application
  componentWillMount() {
    console.log('componentWillMount in AlbumList');
  }

  render() {
    return (
      <View>
        <Text>Album List!!!!</Text>
      </View>
    );
  };
}

export default AlbumList;
