import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// Class do not require semi-colons!
class AlbumList extends Component {
  state = {
    albums: []
  };
  // Right location to initiate some loading of data or some HTTP request to go and fetch our data and retrieve it for our application
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response =>  this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album => 
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    console.log(this.state);
  
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;
