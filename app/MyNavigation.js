import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles'

import EventsList from './EventsList'
import EventDetails from './EventDetails'
import BandsList from './BandsList'
import BandDetails from './BandDetails'
import InfoList from './InfoList'
import InfoDetails from './InfoDetails'
import MyMap from './MyMap'

const HEADER_FONT_SIZE = 22;
const HEADER_TINT_COLOR = 'white';
const HEADER_BACKGROUND_COLOR = 'rgb(248, 179, 70)';
const HEADER_FONT_WEIGHT = 'bold';
const FOOTER_BACKGROUND_COLOR = 'rgb(234, 91, 50)'

const EventsStack = createStackNavigator(
  {
    EventsList: EventsList,
    EventDetails: EventDetails,
    EventMap: MyMap,
  },
  {
    initialRouteName: 'EventsList',
        // Sharing common navigationOptions across screens
        navigationOptions: {
          title: 'Music Season',
          headerStyle: {
            backgroundColor: HEADER_BACKGROUND_COLOR,
          },
          headerTintColor: HEADER_TINT_COLOR,
          headerTitleStyle: {
            fontSize: HEADER_FONT_SIZE,
            fontWeight: HEADER_FONT_WEIGHT,
          },
        },
  }
);


const BandsStack = createStackNavigator(
  {
    BandsList: BandsList,
    BandDetails: BandDetails,
  },
  {
    initialRouteName: 'BandsList',
        // Sharing common navigationOptions across screens
        navigationOptions: {
          title: 'Music Season',
          headerStyle: {
            backgroundColor: HEADER_BACKGROUND_COLOR,
          },
          headerTintColor: HEADER_TINT_COLOR,
          headerTitleStyle: {
            fontSize: HEADER_FONT_SIZE,
            fontWeight: HEADER_FONT_WEIGHT,
          },
        },
  }
);


const InfoStack = createStackNavigator(
  {
    InfoList: InfoList,
    InfoDetails: InfoDetails,
  },
  {
    initialRouteName: 'InfoList',
    // Sharing common navigationOptions across screens
    navigationOptions: {
      title: 'Music Season',
      headerStyle: {
        backgroundColor: HEADER_BACKGROUND_COLOR,
      },
      headerTintColor: HEADER_TINT_COLOR,
      headerTitleStyle: {
        fontSize: HEADER_FONT_SIZE,
        fontWeight: HEADER_FONT_WEIGHT,
      },
    },
  }
);
  

const BottomMenu = createBottomTabNavigator({
  Events: EventsStack,
  Bands: BandsStack,
  Info: InfoStack,
},
{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Events') {
        iconName = `ios-calendar${focused ? '' : '-outline'}`;
      } else if (routeName === 'Bands') {
        iconName = `ios-people${focused ? '' : '-outline'}`;
      } else if (routeName === 'Info') {
        iconName = `ios-information-circle${focused ? '' : '-outline'}`;
      }

      // You can return any component that you like here! We usually use an
      // icon component from react-native-vector-icons
      return <Ionicons name={iconName} size={40} color={tintColor} />;
    },
    
  }),
  tabBarOptions: {
    activeTintColor: 'white',
    inactiveTintColor: 'white',
    style: {
      backgroundColor: FOOTER_BACKGROUND_COLOR,
      height: 80,
      paddingBottom: 10,
      paddingTop: 10,
    },
  },
}
);


export default class MyNavigation extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <BottomMenu/>
        </View>
    );
  }
}

