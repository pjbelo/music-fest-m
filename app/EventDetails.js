import React from 'react';
import { NativeModules, ScrollView, StyleSheet, Text, View, Button, Alert } from 'react-native';


import styles from './styles'
import GetImage from './GetImage'

export default class EventDetails extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.item.band_name,
    };
  };

  render() {
    const MyLOCALE = global.locale;
    var date_options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var event_date = new Date(this.props.navigation.state.params.item.event_date).toLocaleDateString(MyLOCALE, date_options);
    var time_options = { hour: '2-digit', minute: '2-digit' };
    var event_time = new Date(this.props.navigation.state.params.item.event_date).toLocaleTimeString(MyLOCALE, time_options);

    return (
      <ScrollView>
        <View style={styles.container3}>

          <Text style={styles.TextStyle}>Date:{' '}{event_date}</Text>

          <Text style={[styles.TextStyle, styles.MB]}>Time:{' '}{event_time}</Text>

          <Text style={styles.HeaderText1}>{this.props.navigation.state.params.item.title}</Text>

          { this.props.navigation.state.params.item.description !== null &&
          <Text style={[styles.TextStyle, styles.MB]}>{this.props.navigation.state.params.item.description}</Text>
          }

          <GetImage image_uri={this.props.navigation.state.params.item.band_imagePath.url} />

          <Text style={styles.HeaderText1}>{this.props.navigation.state.params.item.band_name}</Text>

          { this.props.navigation.state.params.item.band_description !== null &&
          <Text style={[styles.TextStyle, styles.MB]}>{this.props.navigation.state.params.item.band_description}</Text>
          }

          <View style={{flexDirection:"row"}}>
            <Text style={[styles.Title1, styles.MB]}>Type:</Text>
            <Text style={styles.TextStyle}>{' '}{this.props.navigation.state.params.item.type_name}</Text>
          </View>

          <Text style={styles.HeaderText1}>Venue:{' '}{this.props.navigation.state.params.item.venue_name}</Text>

          { this.props.navigation.state.params.item.venue_description !== null &&
          <Text style={[styles.TextStyle, styles.MB]}>{this.props.navigation.state.params.item.venue_description}</Text>
          }

          <Text style={styles.Title1}>Address:</Text>
          { this.props.navigation.state.params.item.venue_address !== null &&
          <Text style={[styles.TextStyle, styles.MB]}>{this.props.navigation.state.params.item.venue_address}</Text>
          }

          <View style={{flexDirection: "row", paddingBottom: 10}}>
            <Text style={styles.Title1}>City:</Text>
            <Text style={styles.TextStyle}>{' '}{this.props.navigation.state.params.item.city_name}</Text>
          </View>

          <View style={styles.button1}>
            <Button
              onPress={() => {
                data = this.props.navigation.state.params.item;
                this.props.navigation.navigate('EventMap',{data})
              }}
              title="Map"
              color="white"
            />
          </View>

        </View>
      </ScrollView>
    );
  }
}








