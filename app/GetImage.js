import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class GetImage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ImageWidth: null,
      ImageHeight: null,
      ImageExists: false,
    }
    this.ImageURI = this.props.image_uri;
  }

  componentDidMount() {
    Image.getSize(this.ImageURI, (Width, Height) => { this.setState({ ImageWidth: Width, ImageHeight: Height, ImageExists: true }); },
      (errorMsg) => { console.log(errorMsg); }
    );
  }

  MyImage() {
    if (this.state.ImageExists) {
      return (
        <View>
          <Image source={{ uri: this.ImageURI }} style={{ width: null, height: 200, margin: 20 }} />
        </View>
      );
    } else {
      return;
    }
  };

  render() {
    return (
      <View>
        {this.MyImage()}
      </View>
    );
  }
}


