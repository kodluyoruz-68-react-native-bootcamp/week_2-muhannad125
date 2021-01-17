import React ,{ useState } from 'react';
import { View, Text,TouchableOpacity, StyleSheet,TextInput} from 'react-native';

function AddTodo({submitTask}) {
    const [input, setInput] = useState('');

    const submitAndClear = () => {
      submitTask(input);
      setInput('');
    };

    return (
        <View>
            <TextInput 
              testID="input"
              style = {styles.input}
              placeholder='Type something to do'
              onChangeText = {(val) => (
                setInput(val)
              )}
            />
            <TouchableOpacity testID="button" style = {styles.button} onPress = {submitAndClear}>
                <Text style = {styles.text}>Add todo</Text>
            </TouchableOpacity>
        </View>
    );
}

export {AddTodo};

const styles = StyleSheet.create({
  text:{
    color:'white',
    fontSize:20,
    fontWeight:'bold',
    alignSelf:'center',
  },
  button:{
    backgroundColor:'cyan',
    padding:10,
    borderRadius:20
  },
  input:{
    backgroundColor:'#cecece',
    borderRadius:20,
    marginBottom:5
  },

})  