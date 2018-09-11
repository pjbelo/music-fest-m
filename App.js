import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
//import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
//import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './app/styles'

import MyNavigation from './app/MyNavigation'


//import Header from './app/Header'
//import EventsList from './app/EventsList'
//import BandsList from './app/BandsList'
//import InfoList from './app/InfoList'


//import FetchExample from './app/FetchExample'
//import ProfileList from './app/ProfileList'
//import OtherList from './app/OtherList'
//import FlowersList from './app/FlowersList'
//import ListWithStickyHeader from './app/ListWithStickyHeader'
//import ImageGallery from './app/ImageGallery'
//import GridView from './app/GridView'
//import NavigationEx from './app/NavigationEx'
//import SearchEx from './app/SearchEx'
//import MySectionList from './app/MySectionList'


// Global variables
global.locale = "EN";
global.app_name = "Music Festival";



export default class App extends React.Component {
  render() {
    return (
        <View style={styles.container}>

          <MyNavigation/>

        </View>
    );
  }
}




