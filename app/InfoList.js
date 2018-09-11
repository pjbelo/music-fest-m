import React, { Component } from 'react';
import { TouchableOpacity, ActivityIndicator, StyleSheet, FlatList, Text, View, Alert } from 'react-native';

import styles from './styles'

export default class InfoList extends React.Component {
  
  constructor(props) {
    super(props);
    this.state ={ isLoading: true }
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: global.app_name,
    };
  };

  componentDidMount(){
    return fetch('https://music-fest.herokuapp.com/infos.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){
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
      <Text style={styles.textStyle}> Info </Text>
    </View>
    );
    return header_View ;
  };


  render() {

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }



    return (



      <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          ListHeaderComponent={this.FlatList_header}
          stickyHeaderIndices={[0]}
          ItemSeparatorComponent = {this.FlatListItemSeparator}
          renderItem={({item}) => 
          <TouchableOpacity style={styles.flatview} onPress={() => 
          this.props.navigation.navigate('InfoDetails',{item})} >
          <Text style={styles.name}>{item.title}</Text>
          </TouchableOpacity>
          }
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      
      


    );
  }
}
