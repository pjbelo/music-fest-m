import React from 'react';
import { MapView } from 'expo';

export default class MyMap extends React.Component {

  constructor(props){
    super(props);
    this.state = { isLoading: true };
    myData = this.props.navigation.state.params.data;
  }


  render() {
    return (

      <MapView
        style = {{ flex: 1 }}
        initialRegion = {{
          latitude: parseFloat(myData.venue_latitude),
          longitude: parseFloat(myData.venue_longitude),
          latitudeDelta: 0.1,
          longitudeDelta: 0.00001,
        }}
        loadingEnabled = { true }
      >

      <MapView.Marker 
        coordinate = {{ 
          latitude: parseFloat(myData.venue_latitude), 
          longitude: parseFloat(myData.venue_longitude) 
        }}
        title = {myData.venue_name}
        description = {myData.band_name}
      />

      </MapView>



    );
  }
}
