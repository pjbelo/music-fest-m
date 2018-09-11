import React from 'react';
import { ScrollView, WebView, StyleSheet, Text, View, Image } from 'react-native';

import styles from './styles'
import GetImage from './GetImage'
import HTMLView from 'react-native-htmlview';

export default class BandDetails extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.item.name,
    };
  };

  render() {
    return (

      <ScrollView>
        <View style={styles.container3}>
          <GetImage image_uri={this.props.navigation.state.params.item.imagePath.url} />
          <Text style={[styles.HeaderText2, styles.MB]}>{this.props.navigation.state.params.item.name}</Text>
          <Text style={[styles.TextStyle, styles.MB]}>{this.props.navigation.state.params.item.description}</Text>
          <View style={{flexDirection:"row"}}>
            <Text style={styles.Title1}>Artistic director:</Text>
            <Text style={styles.TextStyle}>{' '}{this.props.navigation.state.params.item.artistic_director}</Text>
          </View>
        </View>
      </ScrollView>

    );
  }
}








