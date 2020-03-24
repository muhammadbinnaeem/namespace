import  React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, View,Dimensions } from 'react-native';
import MapView,{ Marker } from 'react-native-maps';
import { GET_ALL_TASK } from './action';


export default function Map() {
  const dispatch = useDispatch();
  const refMap = useRef(null);
  const map = useSelector(state => state.map);
  const [markers,setMarkers] = useState([]);
  const [fetchCount,updateFetchCount] = useState(0);

  useEffect(() => {
    function fetchTasks() {
      dispatch({ type: GET_ALL_TASK });
    }

    let id = setInterval(fetchTasks, 5000);
    return () => clearInterval(id);
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
    // initial location will be Tallin but after first fetch request if there are markers then it will adjust map according to markers
    if(tempMarkers.length > 0 && fetchCount == 0){
      refMap.current.fitToCoordinates(tempMarkers, {
        edgePadding: { top: 200, right: 200, bottom: 100, left: 200 },
        animated: true,
      });
    }
    updateFetchCount(fetchCount+1);
    

  }, [map.tasks]);

  return (
    <View style={styles.container}>
      <MapView style={styles.mapStyle}
        ref={refMap} 
        initialRegion={{
            latitude: 59.4370,
            longitude: 24.7536,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }}>
        {markers.map((marker, i) => (<Marker key={i} identifier={`id${i}`} coordinate={marker} />))}
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
