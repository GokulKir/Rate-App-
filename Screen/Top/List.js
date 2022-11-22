import { StyleSheet, Text, View , ScrollView , Image , TouchableOpacity } from 'react-native'
import React,{useEffect , useState } from 'react'
import firestore from '@react-native-firebase/firestore';
import Icon1 from "react-native-vector-icons/Ionicons";
export default function List() {
  const [List , setList] = useState([])
  useEffect(()=>{
   RateData1()
  })

   const RateData1 = () =>{
    firestore()
    .collection('phoneNumber')
    .get().then((snapshot)=>{
      const Rate1 = snapshot.docs.map((Rate)=>{
       return {
        ...Rate.data(),
        id : Rate.id
       }
      })
      setList(Rate1)
      console.log(Rate1);
    })
    
 
   }

   
  return (
    <View style={styles.container}>
      <ScrollView>
   <View style={{width:"100%" , height:75 , alignItems:'center'}}>
    <Text style={{color:'#fff',marginTop:30 , fontWeight:'bold', fontSize:20}}>Rate products</Text>
    
   </View>
   <ScrollView>
    <View style={{marginLeft:30 , marginTop:20 , flexDirection:'row' , }}>
      <Icon1 style={{marginLeft:5}}  name="star" size={20} color="yellow"/>
      <Icon1 style={{marginLeft:5}} name="star" size={20} color="yellow"/>
      <Icon1 style={{marginLeft:5}} name="star" size={20} color="yellow"/>
      <Icon1  style={{marginLeft:5}} name="star" size={20} color="yellow"/>
      <Icon1  style={{marginLeft:5}} name="star" size={20} color="yellow"/>
      <Text style={{color:'#74d10a', marginLeft:40, fontSize:18}}>Awesome !</Text>
    </View>

    <View style={{flexDirection:'row' , marginTop:30 , marginLeft:10}}>
    <ScrollView  horizontal>
     <View style={{flexDirection:'row'}}>
      {List.map((obj , index)=>{
        return (               
          obj.Rating === 5 ? 
              <View  key={index} style={{marginLeft:10 ,}}>
          <Image  key={index} style={{width:154 , height:186 , borderRadius:10 , }}  source={{uri : obj.image}}/>
            <View style={{ marginTop:10 , alignItems:'center'}}>
            <Text style={{color:'#fff' , fontWeight:'bold' , }}> {obj.name}</Text>
              <Text style={{color:'yellow' , fontWeight:'bold' , marginTop:5 }}>RS : {obj.Rate}</Text>
              <TouchableOpacity>

              </TouchableOpacity>
              
            </View>
          </View>     

   
          
        :  null 
        //   <View  key={index} style={{alignItems:'center'}}>
        // <Text style={{color:'#fff' , fontSize:16 , fontWeight:'bold', marginTop:10}}>No Rating  5*</Text>
        //   </View>
          
   
        
          
        )
      })}
    </View>
   
  
  
    </ScrollView>
    
   </View>
 
   <View style={{marginLeft:30 , marginTop:30 , flexDirection:'row' , }}>
      <Icon1 style={{marginLeft:5}}  name="star" size={20} color="yellow"/>
      <Icon1 style={{marginLeft:5}} name="star" size={20} color="yellow"/>
      <Icon1 style={{marginLeft:5}} name="star" size={20} color="yellow"/>
      <Icon1  style={{marginLeft:5}} name="star" size={20} color="yellow"/>
      <Icon1  style={{marginLeft:5}} name="star" size={20} color="#fff"/>
      <Text style={{color:'#6f09db', marginLeft:40, fontSize:18}}>Greate !</Text>
    </View>
  <View  style={{flexDirection:'row'}}>
    <ScrollView horizontal>
    {List.map((obj , index)=>{
      return (
        obj.Rating === 4 ? 

        <View key={index} style={{  marginTop:20 , marginLeft:20 }}>
       
         
         
             
            
      

        <Image  key={index} style={{width:154 , height:186 , borderRadius:10 , }}  source={{uri : obj.image}}/>
          <View style={{ marginTop:10 , alignItems:'center'}}>
          <Text style={{color:'#fff' , fontWeight:'bold' , }}> {obj.name}</Text>
            <Text style={{color:'yellow' , fontWeight:'bold' , marginTop:5 }}>RS : {obj.Rate}</Text>
          </View>

       
 
      
      
    
  
        </View>
          : null
      )
       
    })}
    </ScrollView>
    </View>

    



   </ScrollView>
 
<View style={{marginTop:10}}>
<View style={{marginLeft:30 , marginTop:10 , flexDirection:'row'  }}>
      <Icon1 style={{marginLeft:5}}  name="star" size={20} color="yellow"/>
      <Icon1 style={{marginLeft:5}} name="star" size={20} color="yellow"/>
      <Icon1 style={{marginLeft:5}} name="star" size={20} color="yellow"/>
      <Icon1  style={{marginLeft:5}} name="star" size={20} color="#fff"/>
      <Icon1  style={{marginLeft:5}} name="star" size={20} color="#fff"/>
      <Text style={{color:'yellow', marginLeft:40, fontSize:18}}>Good !</Text>
    </View>
    </View>
    <View  style={{flexDirection:'row'}}>
    <ScrollView horizontal>
    {List.map((obj , index)=>{
      return (
        obj.Rating === 3 ? 
         
        <View key={index} style={{  marginTop:20 , marginLeft:20 }}>
       
   
         
             
            
      

        <Image  key={index} style={{width:154 , height:186 , borderRadius:10 , }}  source={{uri : obj.image}}/>
          <View style={{ marginTop:10 , alignItems:'center'}}>
          <Text style={{color:'#fff' , fontWeight:'bold' , }}> {obj.name}</Text>
            <Text style={{color:'yellow' , fontWeight:'bold' , marginTop:5 }}>RS : {obj.Rate}</Text>
          </View>

       
 
      
      
    
  
        </View>
          : null
      )
       
    })}
    </ScrollView>

    </View>

    <View style={{marginTop:10}}>
<View style={{marginLeft:30 , marginTop:10 , flexDirection:'row'  }}>
      <Icon1 style={{marginLeft:5}}  name="star" size={20} color="yellow"/>
      <Icon1 style={{marginLeft:5}} name="star" size={20} color="yellow"/>
      <Icon1 style={{marginLeft:5}} name="star" size={20} color="#fff"/>
      <Icon1  style={{marginLeft:5}} name="star" size={20} color="#fff"/>
      <Icon1  style={{marginLeft:5}} name="star" size={20} color="#fff"/>
      <Text style={{color:'orange', marginLeft:40, fontSize:18}}>Low !</Text>
    </View>
    </View>

    <View  style={{flexDirection:'row'}}>
    <ScrollView horizontal>
    {List.map((obj , index)=>{
      return (
        obj.Rating === 2 ? 
         
        <View key={index} style={{  marginTop:20 , marginLeft:20 }}>
       
   
         
             
            
      

        <Image  key={index} style={{width:154 , height:186 , borderRadius:10 , }}  source={{uri : obj.image}}/>
          <View style={{ marginTop:10 , alignItems:'center'}}>
          <Text style={{color:'#fff' , fontWeight:'bold' , }}> {obj.name}</Text>
            <Text style={{color:'yellow' , fontWeight:'bold' , marginTop:5 }}>RS : {obj.Rate}</Text>
          </View>

       
 
      
      
    
  
        </View>
          : null
      )
       
    })}



    </ScrollView>

    </View>


    <View style={{marginTop:10}}>
<View style={{marginLeft:30 , marginTop:10 , flexDirection:'row'  }}>
      <Icon1 style={{marginLeft:5}}  name="star" size={20} color="yellow"/>
      <Icon1 style={{marginLeft:5}} name="star" size={20} color="#fff"/>
      <Icon1 style={{marginLeft:5}} name="star" size={20} color="#fff"/>
      <Icon1  style={{marginLeft:5}} name="star" size={20} color="#fff"/>
      <Icon1  style={{marginLeft:5}} name="star" size={20} color="#fff"/>
      <Text style={{color:'red', marginLeft:40, fontSize:18}}>Bad !</Text>
    </View>
    </View>

    <View  style={{flexDirection:'row'}}>
    <ScrollView horizontal>
    {List.map((obj , index)=>{
      return (
        obj.Rating === 1 ? 
         
        <View key={index} style={{  marginTop:20 , marginLeft:20 }}>
       
   
         
             
            
      

        <Image  key={index} style={{width:154 , height:186 , borderRadius:10 , }}  source={{uri : obj.image}}/>
          <View style={{ marginTop:10 , alignItems:'center'}}>
          <Text style={{color:'#fff' , fontWeight:'bold' , }}> {obj.name}</Text>
            <Text style={{color:'yellow' , fontWeight:'bold' , marginTop:5 }}>RS : {obj.Rate}</Text>
          </View>

       
 
      
      
    
  
        </View>
          : null
      )
       
    })}



    </ScrollView>

    </View>


    <View style={{height:67}}>

    </View>
</ScrollView>
   
    </View>
  )
}

const styles = StyleSheet.create({

  container :{ 
    flex : 1 ,
    backgroundColor : 'black' ,

  }

})