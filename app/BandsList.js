import React from 'react';
import { TouchableOpacity, Alert, FlatList, ItemSeparatorComponent, ActivityIndicator, StyleSheet, Text, View  } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import styles from './styles'


export default class BandsList extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true }
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: global.app_name,
    };
  };


  componentDidMount(){
    return fetch('https://music-fest.herokuapp.com/bands.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){
          // sort array of objects by key (name)
          this.state.dataSource.sort((a, b) => a.name > b.name);
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
      <Text style={styles.textStyle}> Bands </Text>
    </View>
    );
    return header_View ;
  };

  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View  style={styles.container}>
 
        <FlatList
          data={this.state.dataSource}
          ListHeaderComponent={this.FlatList_header}
          stickyHeaderIndices={[0]}
          ItemSeparatorComponent = {this.FlatListItemSeparator}
          renderItem={({item}) => 
          <TouchableOpacity style={styles.flatview} onPress={() => 
            this.props.navigation.navigate('BandDetails',{
              titleParam: item.name,
              item,
            })} >

            <Text style={styles.name}>{item.name}</Text>

          </TouchableOpacity>
          }
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}


/*
const styles = StyleSheet.create({

  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: 'white'
  },

  flatview: {
    backgroundColor: 'white',
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },

  name: {
    fontFamily: 'Verdana',
    fontSize: 18,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    borderWidth: 0,
  },

  id: {
    color: 'red'
  },
  
  separator: {
    height: 1,
    backgroundColor: "black",
    width: '100%'
  },

header_style:{
  width: '100%', 
  height: 44, 
  backgroundColor: '#4CAF50', 
  alignItems: 'center', 
  justifyContent: 'center'
},
 
textStyle:{
  textAlign: 'center', 
  color: '#fff', 
  fontSize: 21
},
  
});

*/

