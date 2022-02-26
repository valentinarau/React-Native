import React ,{useState} from 'react';
import { StyleSheet, Text, View,Button,TextInput } from 'react-native';

export default function App() {
  
  const [name,setName] = useState('figaro');
  const [friendliness,setFriendliness] = useState('5');

  const [cat,setCat] = useState({name: 'mint', friendliness: 40});


  const clickHandler = () => {
    setName('figarodev');
    setFriendliness('15');
    setCat({name: 'cafe con leche', friendliness:100});
  }

  return (
    <View style={styles.container}>
      <Text>Enter name</Text>
      <TextInput 
      multiline
      style={styles.input}
      placeholder = 'your ideal cat name'
      onChangeText={(value)=>setName(value)}/>

      <Text>Enter friendliness</Text>
      <TextInput 
      keyboardType='numeric'
      style={styles.input}
      placeholder = 'wanted friendliness'
      onChangeText={(value)=>setFriendliness(value)}/>

      <Text>cat's name: {name}, friendliness: {friendliness} </Text>
      <Text>ideal cat's name: {cat.name}, friendliness: {cat.friendliness} </Text>
      <View style={styles.buttonContainer}>
        <Button title='update state' onPress={clickHandler}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer:{
    marginTop:20
  },
  input:{
    borderWidth:1,
    borderColor:"#777",
    padding:8,
    margin:10,
    width:200
  }
});
