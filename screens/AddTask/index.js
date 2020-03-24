import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TASK } from './action';

export default function AddTask() {
  const [address, setAddress] = React.useState(null);
  const addTask = useSelector(state => state.addTask);
  const { loading,success } = addTask;
  const dispatch = useDispatch();

  useEffect(() => {
    if(success){
      alert("Task Created");
      setAddress(null);
    }
  }, [success]);
  return (
    <ScrollView style={styles.container} >
      <View style={styles.container}>
        <Text style={styles.heading}>Add Task</Text>
        <TextInput
          placeholder={'Address'}
          onChangeText={(text) => setAddress(text)}
          style={styles.input}
          value={address}
        />
        <Button disabled={loading}
          title={'Add Task'}
          onPress={() => 
            address ? dispatch({ type: ADD_TASK, payload: address }) : null
          }
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
