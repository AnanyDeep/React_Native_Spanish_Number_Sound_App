import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Sound from 'react-native-sound';

const soundList = [
  require('./assets/one.wav'),
  require('./assets/two.wav'),
  require('./assets/three.wav'),
  require('./assets/four.wav'),
  require('./assets/five.wav'),
  require('./assets/six.wav'),
  require('./assets/seven.wav'),
  require('./assets/eight.wav'),
  require('./assets/nine.wav'),
  require('./assets/ten.wav'),
]

export default function App() {

  const playSound = (sound) => {
    const soundVar = new Sound(sound, Sound.MAIN_BUNDLE, (err)=>{
      if (err){
        console.log("Not able to play");
      }
    });
    setTimeout(()=>{
      soundVar.play();
    },1000);
    // soundVar.play();
    // soundVar.release();
  }

  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor = "white"/>
      <Image style={styles.logo} source={require('./assets/logo.png')}/>
      <View style={styles.gridContainer}>
        {soundList.map((sound)=>(
          <TouchableOpacity key={sound} onPress={()=>{
            playSound(sound);
          }} style={styles.box}>
            <Text style={styles.text}>{sound}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
  },
  logo :{
    alignSelf : "center",
    marginTop : 15
  },
  gridContainer:{
    flex :1,
    margin:5,
    flexDirection :"row",
    flexWrap : "wrap",
    alignItems:"flex-start",
    justifyContent : "space-around"
  },
  box:{
    height :110,
    alignItems : "center",
    justifyContent : "center",
    width : "46%",
    marginVertical : 6,
    backgroundColor : "#0f4c75",
    borderRadius : 10
  },
  text:{
    fontSize :50,
    color :"#ff4301"
  }
});
