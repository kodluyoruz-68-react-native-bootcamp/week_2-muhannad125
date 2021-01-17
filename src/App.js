import React, { useState } from 'react';
import {SafeAreaView, View, Text, StyleSheet, FlatList} from 'react-native';
import {AddTodo, ControlItem} from './components'
/**
 * TextInput: testID="input" (component which is user types the todo text)
 * TouchableOpacity: testID="button" (component which is saves the todo to list)
 * FlatList: testID="list" (list of todo)
 */

function App() {
  const [todos, setTodos] = useState([]);

  const submitTask = (input) => {
    input !== '' &&
    setTodos((prevTodos) => {
      return[
        {text:input, key: Math.random().toString(), isDone: false},
        ...prevTodos
      ]
    })
  }

  const completed = (key) => () => {
    setTodos(
      todos.map((todo) =>
        todo.key === key ? {...todo, isDone: !todo.isDone} : todo,
      ),
    );
    
  };

  const deleteItem = (key) =>  {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key) 
    })
  }

  return (
    <SafeAreaView style = {{flex:1}}>
      <View style = {{flex:1}}>
        <Text style = {styles.text}> TODO </Text>
        <Text style= {styles.counter}>{todos.length}</Text>
        <View style = {styles.container}>
          <FlatList 
            testID="list"
            data={todos}
            renderItem = {({item}) => (
              <ControlItem item = {item} deleteItem = {deleteItem} completed = {completed} />
            )}
          /> 
          <AddTodo submitTask={submitTask} />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:"flex-end",
    margin:20,  
  },
  text:{
    fontSize:50,
    fontWeight:'bold',
    alignSelf:'center',
  },
  counter:{
    alignSelf: 'center',
    fontSize:25
  }
})