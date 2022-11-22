import { StyleSheet, Text, View , ScrollView , TouchableOpacity , Image , SafeAreaView , TextInput , ImageBackground , FlatList} from 'react-native'
import React from 'react'
// import Icon from "react-native-vector-icons/FontAwesome";

// import Carousel from "react-native-scrollview-carousel";
import {data , data1} from './Data/data' ;
import {MyTabs} from '../App' ;
export default function Main({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={{alignItems:'center' , marginTop:34 , flexDirection:'row' , marginLeft:"26%"}}>
       <Image style={{width:37 , height:37}} source={require('../assets/star.png')}/>
      <Image style={{width:126 , height:26}}  source={require('../assets/Rating1.jpg')}/>
      </View>
      <View style={{alignItems:'center'}}>
  
        <View style={styles.InputBord}>
   <Image  style={{ width:27 , height:27 , marginLeft:15 , marginTop:6 }} source={require('../assets/Search.png')}/>
       <TextInput style={{ width:'100%' , height:'100%' , paddingLeft:20  , fontSize:17, marginTop:1 }}  placeholder="Search.."/>
        </View>

      </View>

  



     <View style={{flexDirection:'row' ,}}>
   
      <ScrollView
       horizontal={true}
       showsHorizontalScrollIndicator={false}
       scrollEventThrottle={200}
       decelerationRate="fast"
       pagingEnabled
      
      >
        
        <View style={{alignItems:'center' , marginTop:40 , flexDirection:'row' , marginLeft:8}}>
        <ImageBackground style={{width:375 , height:234 , }} source={require('../assets/Fur.jpg')}  imageStyle={{ borderRadius: 20}}>
        <View style={{alignItems:'center'}}>
          <TouchableOpacity style={styles.RateButton}>
            <Text style={{fontSize:16 , color:'#fff' ,fontWeight:'bold' }}>Rate now</Text>
          </TouchableOpacity>
         </View>
         <View style={{marginLeft:40 , marginTop:'20%' , }} >
          <Text style={{color:'#fff' , fontSize:18 , fontWeight:'bold'}}>Home Decor</Text>
          <Text style={{color:'#fff' , marginTop:10 , fontWeight:'bold'}}>Discover the new  arrivals</Text>
         </View>
        
        </ImageBackground>


        <ImageBackground style={{width:375 , height:234 , marginLeft:17 }} source={require('../assets/Cl.jpg')}  imageStyle={{ borderRadius: 20}}>
        <View style={{alignItems:'center'}}>
          <TouchableOpacity style={styles.RateButton}>
            <Text style={{fontSize:16 , color:'#fff' ,fontWeight:'bold' }}>Rate now</Text>
          </TouchableOpacity>
         </View>
         <View style={{marginLeft:40 , marginTop:'20%' , }} >
          <Text style={{color:'#fff' , fontSize:18 , fontWeight:'bold'}}>Home Decor</Text>
          <Text style={{color:'#fff' , marginTop:10 , fontWeight:'bold'}}>Discover the new  arrivals</Text>
         </View>
        
        </ImageBackground>


        <ImageBackground style={{width:375 , height:234 , marginLeft:9 }} source={require('../assets/Mb.jpg')}  imageStyle={{ borderRadius: 20}}>
        <View style={{alignItems:'center'}}>
          <TouchableOpacity style={styles.RateButton}>
            <Text style={{fontSize:16 , color:'#fff' ,fontWeight:'bold' }}>Rate now</Text>
          </TouchableOpacity>
         </View>
         <View style={{marginLeft:40 , marginTop:'20%' , }} >
          <Text style={{color:'#fff' , fontSize:18 , fontWeight:'bold'}}>Home Decor</Text>
          <Text style={{color:'#fff' , marginTop:10 , fontWeight:'bold'}}>Discover the new  arrivals</Text>
         </View>
        
        </ImageBackground>

        </View>
      </ScrollView>
    </View>

  
     <View style={{flexDirection:'row'}}>
     <ScrollView  horizontal={true}>

      {data.map((obj,index)=>{
        return (
      
          
          <View  key={index} style={{marginLeft:20 , marginTop:30  , alignItems:'center'}}>
            <View style={{width:163 , height:205 , backgroundColor:'grey' , borderRadius:10 }}>
              <Image style={{width:"100%" , height:"100%" , borderRadius:10}} source={{uri:obj.image}}/>
            </View>
            <Text style={{color:'yellow' , fontWeight:'bold'}}>RS :{obj.Rate}</Text>
            <Text style={{color:'#fff' , fontWeight:'bold' , marginTop:3}}>{obj.name}</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Mobile' ,{data:obj})} style={{width:114 , height:30 , backgroundColor:'orange' , marginTop:10 , alignItems:'center' , justifyContent:'center' , borderRadius:100}}>
              <Text style={{color:'#fff' , fontWeight:'bold'}}>Rate now</Text>
            </TouchableOpacity>
   
            <View style={{width:45 , height:66}}></View>
          
          </View>
         
         
         
        )
      })}
    
 
 </ScrollView>

     </View>

    

   
   </ScrollView>
     
    </View>
  )
}

const styles = StyleSheet.create({
    container :{
        flex : 1,
        backgroundColor:'black',

    },
    SecondBoard :{
        width:'100%' ,
        height :"20%",
        backgroundColor:'#030d24',
    
   
    },
    InputBord : {
      width : "90%" ,
      height:40,
      backgroundColor:'#82827f',
      marginTop:45,
      borderRadius:100 ,
      flexDirection:'row'

    },
    RateButton : {
      width:125,
      height:35,
      backgroundColor:'orange',
      marginTop:45,
      marginLeft:190,
      borderRadius:5,
      alignItems:'center' ,
      justifyContent:'center'

    }
   

})

