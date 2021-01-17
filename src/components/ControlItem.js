import React ,{ useState } from 'react';
import { View, Text,TouchableOpacity, StyleSheet,TextInput} from 'react-native';

function ControlItem({item , deleteItem, completed}) {
    return (
        <View>
            <TouchableOpacity 
                testID="button"
                style={styles[item.isDone ? 'taskCompleted' : 'task']}
                onLongPress = {() => deleteItem(item.key)}
                onPress = {completed(item.key)}
                >
                <Text style={styles[item.isDone ? 'textCompleted' : 'text']}>{item.text}</Text>
            </TouchableOpacity>
        </View>
    );
}

export {ControlItem};


const styles = StyleSheet.create({
    text:{
      color:'white',
      fontSize:20,
      fontWeight:'bold',
      padding:5
    },
    textCompleted:{
      color:'white',
      fontSize:20,
      fontWeight:'bold',
      padding:5,
      textDecorationLine: 'line-through'
    },
    task:{
      backgroundColor:"grey",
      borderRadius:10,  
      margin:5
    },
    taskCompleted:{
      backgroundColor:"#cecece",
      borderRadius:10,  
      margin:5
    },
  
  })  