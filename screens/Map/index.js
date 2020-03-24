import  React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, View,Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import { GET_ALL_TASK } from './action';


export default function Map() {
  const dispatch = useDispatch();
  const map = useSelector(state => state.map);
  useEffect(() => {
    dispatch({ type: GET_ALL_TASK });
  }, []);

  useEffect(() => {
    console.log(map.tasks);
  }, [map.tasks]);
  return (
    <View style={styles.container}>
      <MapView style={styles.mapStyle}></MapView>
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
