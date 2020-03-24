import  React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, View,Dimensions } from 'react-native';
import MapView,{ Marker } from 'react-native-maps';
import { GET_ALL_TASK } from './action';


export default function Map() {
  const dispatch = useDispatch();
  const map = useSelector(state => state.map);
  const [markers,setMarkers] = useState([])
  useEffect(() => {
    dispatch({ type: GET_ALL_TASK });
  }, []);

  useEffect(() => {
    let tempMarkers = [];
    map.tasks.map((task, i) => 
    {
      task.address.location &&  tempMarkers.push({ 
        latitude: task.address.location.coordinates[1],
        longitude: task.address.location.coordinates[0]
      })
    })
    setMarkers(tempMarkers);
  }, [map.tasks]);
  return (
    <View style={styles.container}>
      <MapView style={styles.mapStyle}>
          {markers.map((marker, i) => 
            ( <Marker key={i} identifier={`id${i}`} coordinate={marker} />) 
          )}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
});
