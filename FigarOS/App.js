import React from 'react';
import { ImageBackground,Image,StyleSheet, Text, View } from 'react-native';

import computer from './assets/computer.jpg';
import figaro from './assets/figaroBlack.png';

export default function App() {
  return (
    <View style={styles.container}>
      
      <ImageBackground source={computer} resizeMode="cover" style={styles.image}>
      <Image source={figaro} style={styles.figaro}/>
      <Text style={styles.greyText}>BOOTING...</Text>
    </ImageBackground>
    <View style = {styles.bar}><Text style={styles.text}>figarOS</Text></View>
    

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center'
  },
  bar:{
    backgroundColor:'#301934',
    width:1000,
    height:300
  },
  text:{
    lineHeight: 84,
    textAlign: 'center',
    fontWeight: 'bold',
    color:'#fff',
  },
  image: {
    paddingTop:120,
    width:500,
    height: 500,
    alignItems: 'center',
    alignContent: 'center'
    },
  figaro:{
    alignSelf:'center',
    width: 100,
    height:100,
  },
  greyText:{
    lineHeight: 84,
    textAlign: 'left',
    paddingLeft:10,
    fontWeight: 'bold',
    color:'#809090',

  }


});
