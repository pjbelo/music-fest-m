import React from 'react';
import { MapView} from 'expo';

export default class MyMap extends React.Component {

  constructor(props){
    super(props);
    this.state = { isLoading: true, lat:1, lng: 1, latlng: {latitude: 1, longitude: 1} }
  }

  render() {
    return (

      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 1,
          longitude: 1,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >



      <MapView.Marker 
        coordinate = {{ latitude: 1, longitude: 1 }}
        title="Dak"
        description="desc" 
      />


      </MapView>



    );
  }
}
