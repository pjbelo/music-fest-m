
import React from 'react';
import { TextInput, TouchableOpacity, Alert, FlatList, ItemSeparatorComponent, ActivityIndicator, StyleSheet, Text, View  } from 'react-native';

import styles from './styles'

export default class EventsList extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true, searchInput: '', dataSource: [] }

    this.arrayholder = [] ;
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: global.app_name,
    };
  };

  componentDidMount(){
    return fetch('https://music-fest.herokuapp.com/events.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){
          // sort array of objects by key (event_date)
          this.state.dataSource.sort((a, b) => a.event_date > b.event_date);
        });
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  FlatListItemSeparator = () => {
    return (
      <View style={{ height: 1, width: "100%", backgroundColor: "#607D8B" }} />
    );
  }

  FlatList_header = () => {
    var header_View = (
    <View style={styles.header_style}>
      <Text style={styles.textStyle}> Events </Text>
    </View>
    );
    return header_View ;
  };

/*
  SearchFilterFunction(text){
    const newData = this.arrayholder.filter(function(item){
        const itemData = item.band_name.toUpperCase()
        const textData = text.toUpperCase()
        return itemData.indexOf(textData) > -1
    })
    this.setState({
        dataSource: this.newData,
        text: text
    })
  }
*/

  FormattedDate(d) {
    var nDate = new Date(d);

    var options = {
      weekday: "long", year: "numeric", month: "short",
      day: "numeric", hour: "2-digit", minute: "2-digit"
    };

    var fDate = nDate.toLocaleTimeString(global.locale, options)
    return (fDate);
  }




  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={styles.container}>

        <TextInput 
          style={styles.TextInputStyleClass}
          //onChangeText={(searchInput) => this.SearchFilterFunction(searchInput)}
          onChangeText={(searchInput) => this.setState({searchInput})}
          value={this.state.searchInput}
          underlineColorAndroid='transparent'
          placeholder="Search Band Here"
        />
 
        <FlatList
          //data={this.state.dataSource}
          data={this.state.dataSource.filter(item => item.band_name.includes(this.state.searchInput))}
          ListHeaderComponent={this.FlatList_header}
          stickyHeaderIndices={[0]}
          ItemSeparatorComponent = {this.FlatListItemSeparator}
          renderItem={({item}) => 
          <TouchableOpacity style={styles.flatview2} onPress={() => 
            this.props.navigation.navigate('EventDetails',{item})} >
            <Text style={styles.eventDate}>{this.FormattedDate(item.event_date)}</Text>
            <Text style={styles.eventTitle}>{item.title}</Text>
            <Text style={styles.bandName}>{item.band_name}</Text>
            <Text style={styles.cityName}>{item.city_name}</Text>
          </TouchableOpacity>
          }
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}
