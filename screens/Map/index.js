import * as React from 'react';
import { StyleSheet, View,Dimensions } from 'react-native';
import MapView from 'react-native-maps';


export default function Map() {
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
