import { StyleSheet, Text, View , Image , ScrollView , TextInput , TouchableOpacity , Alert } from 'react-native'
import React , {useState , useEffect} from 'react'


import Icon from "react-native-vector-icons/Feather";
import Icon1 from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/FontAwesome";
import uuid from 'react-native-uuid';
import firestore from '@react-native-firebase/firestore';
import database from '@react-native-firebase/database';
import {getAllRating , AddContact , deleteAllData} from './config' ;
import AsyncStorage from '@react-native-async-storage/async-storage' ;


export default function Mobile({navigation , route}) {

  useEffect(()=>{

  


  },[])


    const {data} = route.params ;
    const [defaultRating , setdefaultRating] = useState(2)
    const [maxRating , setMaxRating] = useState([1 , 2 , 3 , 4 , 5])
    const [phoneNumber , setPhoneNumber] = useState('')
    const [pass , setPass] = useState()
    const [max , setMax] = useState('')
    const [use , setUse] = useState([])
    const [Id , setId] = useState('')
    const [used , setUsed] = useState('')
    const [List , setList] = useState('')

 

    const uid = uuid.v4();

    const Add = async () =>{
        try {
            await AsyncStorage.setItem(phoneNumber, phoneNumber)
            
            console.log(phoneNumber);
            setId(phoneNumber)
           
           
             

                
      
                firestore().collection("phoneNumber").doc(phoneNumber).set({
                    Rating : defaultRating ,
                    Mobile : phoneNumber ,
                    user : uid,
                    image : data.image,
                    Rate : data.Rate,
                    name : data.name,


        
                })
                Alert.alert('User Rated') ;
                navigation.navigate("MyBottom")
              
            
            
         
              
              
        } catch (error) {
            console.log(error);
            
        }
    
      
        }  



   
    


  let addItem = item =>{
    if(phoneNumber.length === 10){

    database().ref(phoneNumber).push({
        phoneNumber : item
      })
    }
  }

    const Define = item =>{
 
   addItem(phoneNumber)
     
      
    }

    const Submit = async () =>{


 if(phoneNumber === use){
    Alert.alert('User already rated')

  }else if(phoneNumber.length <= 9){
            console.log("Enter max 10 ");
           setMax("Enter max 10 ") 
        }else if(phoneNumber.length === 10){
     
        Add()
    }
    }

    const CustomRating = () =>{
       return (
        <View  style={{flexDirection:'row' }}>
          {maxRating.map((obj , key)=> {
             return (
              <View   key={key} style={{  marginTop:30 , marginRight:10}}>
              <TouchableOpacity style={{flexDirection:'row'}}  onPress={()=> setdefaultRating(obj)}   >
              {  obj  <= defaultRating ? 
              <Icon1 style={{marginLeft:3}}    name="star"   color="yellow"   size={24}/>  
              :  <Icon1 style={{marginLeft:0}}    name="star"   color="#fff"   size={24}/>    }
              </TouchableOpacity>  
              </View>
             )
          })}
        </View>
       )
    }

  return (
    <View style={styles.container}>
        <ScrollView>
        <View style={{}}>
            <TouchableOpacity  onPress={()=> navigation.navigate('Main')}>
            <Icon1 name="ios-arrow-back" color="#fff" size={37} style={{marginLeft:20 , marginTop:20}}/>
            </TouchableOpacity>
        </View>
        {/* <View style={{alignItems:'center' , marginTop:50}}>
   <Image style={{width:175 , height:215 , borderRadius:10}} source={{uri:data.image}} />
    <View style={{alignItems:'center'}}>
        <Text style={{color:'#fff' , marginTop:20 , fontSize:20 , fontWeight:'bold'}}>{data.name}</Text>

    </View>
        </View> */}
        
        <View style={{alignItems:'center' , marginTop:0}}>

        <View style={{flexDirection:'row' , marginTop:0 , marginRight:0 , alignItems:'center' , marginLeft:120 ,  marginBottom:20}}>
       
  
       <CustomRating/>
       
        </View>
        
            <View style={{width:'90%' , height:338 , backgroundColor:'grey' , borderRadius:20}}>
         <Image style={{width:'100%' , height:'100%' , borderRadius:20}} source={{uri:data.image}}/>
            </View>
            <View  style={{alignItems:"center" , flexDirection:'row'}} >
              
     <TouchableOpacity style={{width:145 , height:45 , borderWidth:2 , borderColor:'orange' , marginTop:20 , marginRight:0 , borderRadius:20 , alignItems:'center' , justifyContent:'center'}}>
        <Text style={{color:'#fff' , fontSize:17 , fontWeight:'bold'}}>Rate now</Text>
     </TouchableOpacity>

     <Text style={{color:'#fff' , fontSize:25 , fontWeight:'bold' , marginLeft:20 , marginTop:20}}>{defaultRating + "/" + maxRating.length}</Text>
   
     </View>

        </View>

        <View style={{alignItems:'center' , marginTop:55}}>

            <ScrollView>
           
         <View style={{flexDirection:'row'}}>
            <View style={{}}>
                

            </View>
           
          <View style={styles.TextInputStyle}>
          <Icon name="phone" size={32} color="black" style={{marginLeft:10 , marginTop:2}}/>
          <TextInput  onChangeText={(text)=> setPhoneNumber(text)} keyboardType="numeric" style={{width:'100%' , height:'100%' ,fontSize:18 , fontWeight:'italic' , paddingLeft:10}} maxLength={10}  placeholder="User mobile"/>
          </View>
          
          <TouchableOpacity onPress={Submit} style={styles.ButtonStyle}>
          <Icon2 size={28} color="#fff" name="arrow-right" />
          </TouchableOpacity>
          </View>
          <View style={{marginLeft:10 , marginTop:10}}>
            {max ?   <Text style={{color:'yellow' ,}}>{max}</Text> : null}
               
            </View>
            </ScrollView>

            <View style={{alignItems:'center' , marginTop:30}}>
            <Text style={{color:'red' , marginTop:0 , marginBottom:10 ,}}>{used}</Text>
                <Text style={{color:'grey' , fontWeight:'bold'}}>Only one time use this mobile number</Text>
        
            </View>

        </View>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container :{
        flex : 1,
        backgroundColor:'black'
    },
    TextInputStyle:{
        width:273,
        height:40,
        backgroundColor:'#fff',
        borderRadius:10,
        flexDirection:'row'

    },
    ButtonStyle : {
     width:75,
     height:40 ,
     backgroundColor:'orange',
     borderRadius:5,
     alignItems:'center',
     justifyContent:'center'
    }

})