import React from 'react';
import { WebView, ScrollView, StyleSheet, Text, View } from 'react-native';

import styles from './styles'

export default class InfoDetails extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.item.title,
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.Header1}>
          <Text style={styles.textStyle}>{this.props.navigation.state.params.item.title}</Text>
        </View>
        <WebView
          source={{ html: this.props.navigation.state.params.item.text }}
          style={ styles.WebViewStyle }
          scalesPageToFit={false}
          scrollEnabled={true}
          contentInset={{ top: 0, left: 0, bottom: 0, right: 0 }}
        />
      </View>
    );
  }
}



