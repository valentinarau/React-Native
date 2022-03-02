// Scroll View with Map and Flat List Component
import React,{useState} from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';

export default function App() {

  const [people,setPeople] = useState([
    { name: 'valen', id: '1'},
    { name: 'gabriel', id: '2'},
    { name: 'lautaro', id: '3'},
    { name: 'lucas', id: '4'},
    { name: 'ingrid', id: '5'},
    { name: 'luli', id: '6'},
    { name: 'lucia', id: '7'}
  ]);

  const pressHandler = (id) => {
    console.log(id);
    setPeople((prevPeople) => {
      return prevPeople.filter( person => person.id != id)
    })

  }

  return (
    <View style={styles.container}>
      
      <FlatList
        keyExtractor={item => item.id}
        data = {people}
        renderItem = {({item}) => (
          <TouchableOpacity onPress = {() => pressHandler(item.id)}>
            <Text style={styles.item}>
            {item.name}
            </Text>
          </TouchableOpacity>

          
        )}
      />
      
      
      
      {/* <ScrollView>
        {people.map(item => (
          <View key = {item.key}>
            <Text style={styles.item}>
              {item.name}
            </Text>
          </View>
        ))}
      </ScrollView> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
  //  alignItems: 'center',
  //  justifyContent: 'center',
  },
  item: {
    marginTop:24,
    padding:30,
    backgroundColor: 'pink',
    fontSize: 24,
    marginHorizontal:10,
    marginTop:10,
  }

});
