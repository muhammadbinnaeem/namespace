import * as React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function AddTask() {
  return (
    <ScrollView style={styles.container} >
      <View style={styles.container}>
        <Text style={styles.heading}>Add Task</Text>
        <TextInput
          placeholder={'Address'}
          style={styles.input}
        />
        <Button
          title={'Add Task'}
        />
      </View>
    </ScrollView>
  );
}



const styles = StyleSheet.create({
  container: {
    padding:20,
    paddingTop:50,
    flex: 1,
  },
  input: {
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 20,
  },
  heading: {
    fontSize:20,
    marginBottom: 20,
    fontWeight:'bold'
  }
});
