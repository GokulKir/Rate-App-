import { StyleSheet, Text, View , ImageBackground , Image } from 'react-native'
import React,{useState , useEffect} from 'react'
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';

export default function Plash({navigation}) {
  useEffect(()=>{
      setTimeout(() => {
        navigation.navigate('MyBottom');
      }, 1500);
  },[])
  return (
    <View  style={styles.container}>
        <View  style={{alignItems:'center'}}>
        <View style={{alignItems:'center' , marginTop:"40%" }}>
       <Image style={{width:77 , height:77}} source={require('../assets/star.png')}/>
      <Image style={{width:206 , height:56}}  source={require('../assets/Rating1.jpg')}/>
      </View>
     
     </View>
     <View style={{marginTop:250}}>
<DotIndicator size={14} color="#fff"/>
</View>

    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor:'black'
  }
})