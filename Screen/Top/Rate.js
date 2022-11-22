import { StyleSheet, Text, View , ScrollView , TouchableOpacity , Image } from 'react-native'
import React,{useEffect , useState} from 'react'
import firestore from '@react-native-firebase/firestore';
import Icon1 from "react-native-vector-icons/Ionicons";

export default function Rate() {
  const [user , setUser] = useState([])
  useEffect(()=>{
  UserList()
  })


  const UserList = () =>{
    firestore()
    .collection('phoneNumber')
    .get().then((snapshot)=>{
      const Rate1 = snapshot.docs.map((Rate)=>{
       return {
        ...Rate.data(),
        id : Rate.id
       }
      })
      setUser(Rate1)
      console.log(Rate1);
    })
    
  }
  return (
    <View style={styles.container}>
      <ScrollView>
      {/* <View style={{alignItems:'center' , marginTop:20}}>
        <Text style={{color:'#fff' , fontSize:18 , fontWeight:'bold'}}>User List</Text>
      </View> */}
      <View >

        <ScrollView horizontal>
          <View  style={{flexDirection:'row' , marginLeft:8}}>
            {user.map((obj , index)=>{
              return (

                obj.Rating === 1 ?
                <View key={index} style={{marginTop:50 , marginLeft:10}}>
               
                  <View style={{flexDirection:'row'}}>
                    <ScrollView horizontal>
                  
                    <View style={{}}>
                      
                  
                  
                <TouchableOpacity  style={{ width:157 , height:197 ,borderColor:'orange' , borderWidth:2 , marginTop:30 , borderRadius:10 , flexDirection:'row'  }}>
                <Image style={{width:'100%' , height:'100%'}} source={{uri:obj.image}}/>
                 </TouchableOpacity>
                 <View style={{alignItems:'center' , marginTop:10}}>
                 <Text style={{color:'#fff' , fontWeight:'bold'}}>{obj.name}</Text>
                 <Text style={{color:'orange' , marginTop:5 , fontSize:16 , fontWeight:'bold'}}>{obj.Mobile}</Text>
                     <Icon1 name="star" size={15} color="red" style={{marginTop:10}}/>
                     <Text style={{color:'yellow' , fontWeight:'bold'}}>bad rating  user !</Text>
                 </View>
              
                 </View>

                  </ScrollView>
                 </View>
                
                 
               </View> : null
              )
       
            })}
      
        </View>
        </ScrollView>



        <View>
          
        <ScrollView horizontal>
          <View  style={{flexDirection:'row' , marginLeft:8}}>
            {user.map((obj , index)=>{
              return (

                obj.Rating === 2 ?
                <View key={index} style={{marginTop:10 , marginLeft:10}}>
               
                  <View style={{flexDirection:'row'}}>
                    <ScrollView horizontal>
                  
                    <View style={{}}>
                      
                  
                  
                <TouchableOpacity  style={{ width:157 , height:197 ,borderColor:'orange' , borderWidth:2 , marginTop:30 , borderRadius:10 , flexDirection:'row'  }}>
                <Image style={{width:'100%' , height:'100%'}} source={{uri:obj.image}}/>
                 </TouchableOpacity>
                 <View style={{alignItems:'center' , marginTop:10}}>
                 <Text style={{color:'#fff' , fontWeight:'bold'}}>{obj.name}</Text>
                 <Text style={{color:'orange' , marginTop:5 , fontSize:16 , fontWeight:'bold'}}>{obj.Mobile}</Text>
                     <Icon1 name="star" size={15} color="yellow" style={{marginTop:10}}/>
                     <Text style={{color:'yellow' , fontWeight:'bold'}}>low rating  user !</Text>
                 </View>
              
                 </View>

                  </ScrollView>
                 </View>
                
                 
               </View> : null
              )
       
            })}
           
      
        </View>
        </ScrollView>
        </View>




      </View>

      
      <View>
          
          <ScrollView horizontal>
            <View  style={{flexDirection:'row' , marginLeft:8}}>
              {user.map((obj , index)=>{
                return (
  
                  obj.Rating === 3 ?
                  <View key={index} style={{marginTop:10 , marginLeft:10}}>
                 
                    <View style={{flexDirection:'row'}}>
                      <ScrollView horizontal>
                    
                      <View style={{}}>
                        
                    
                    
                  <TouchableOpacity  style={{ width:157 , height:197 ,borderColor:'orange' , borderWidth:2 , marginTop:30 , borderRadius:10 , flexDirection:'row'  }}>
                  <Image style={{width:'100%' , height:'100%'}} source={{uri:obj.image}}/>
                   </TouchableOpacity>
                   <View style={{alignItems:'center' , marginTop:10}}>
                   <Text style={{color:'#fff' , fontWeight:'bold'}}>{obj.name}</Text>
                   <Text style={{color:'orange' , marginTop:5 , fontSize:16 , fontWeight:'bold'}}>{obj.Mobile}</Text>
                       <Icon1 name="star" size={15} color="orange" style={{marginTop:10}}/>
                       <Text style={{color:'orange' , fontWeight:'bold'}}>Good rating user !</Text>
                   </View>
                
                   </View>
  
                    </ScrollView>
                   </View>
                  
                   
                 </View> : null
                )
         
              })}
             
        
          </View>
          </ScrollView>
          </View>

                
      <View>
          
          <ScrollView horizontal>
            <View  style={{flexDirection:'row' , marginLeft:8}}>
              {user.map((obj , index)=>{
                return (
  
                  obj.Rating === 4 ?
                  <View key={index} style={{marginTop:10 , marginLeft:10}}>
                 
                    <View style={{flexDirection:'row'}}>
                      <ScrollView horizontal>
                    
                      <View style={{}}>
                        
                    
                    
                  <TouchableOpacity  style={{ width:157 , height:197 ,borderColor:'orange' , borderWidth:2 , marginTop:30 , borderRadius:10 , flexDirection:'row'  }}>
                  <Image style={{width:'100%' , height:'100%'}} source={{uri:obj.image}}/>
                   </TouchableOpacity>
                   <View style={{alignItems:'center' , marginTop:10}}>
                   <Text style={{color:'#fff' , fontWeight:'bold'}}>{obj.name}</Text>
                   <Text style={{color:'orange' , marginTop:5 , fontSize:16 , fontWeight:'bold'}}>{obj.Mobile}</Text>
                   <Icon1 name="star" size={15} color="#6f09db" style={{marginTop:10}}/>
                       <Text style={{color:'#6f09db' , fontWeight:'bold'}}>Great rating user !</Text>
                   </View>
                
                   </View>
  
                    </ScrollView>
                   </View>
                  
                   
                 </View> : null
                )
         
              })}
             
        
          </View>
          </ScrollView>
          </View>



          <View>
          
          <ScrollView horizontal>
            <View  style={{flexDirection:'row' , marginLeft:8}}>
              {user.map((obj , index)=>{
                return (
  
                  obj.Rating === 5 ?
                  <View key={index} style={{marginTop:10 , marginLeft:10}}>
                 
                    <View style={{flexDirection:'row'}}>
                      <ScrollView horizontal>
                    
                      <View style={{}}>
                        
                    
                    
                  <TouchableOpacity  style={{ width:157 , height:197 ,borderColor:'orange' , borderWidth:2 , marginTop:30 , borderRadius:10 , flexDirection:'row'  }}>
                  <Image style={{width:'100%' , height:'100%'}} source={{uri:obj.image}}/>
                   </TouchableOpacity>
                   <View style={{alignItems:'center' , marginTop:10}}>
                   <Text style={{color:'#fff' , fontWeight:'bold'}}>{obj.name}</Text>
                   <Text style={{color:'orange' , marginTop:5 , fontSize:16 , fontWeight:'bold'}}>{obj.Mobile}</Text>
                       <Icon1 name="star" size={15} color="#74d10a" style={{marginTop:10}}/>
                       <Text style={{color:'#74d10a' , fontWeight:'bold'}}>Awesome rating user !</Text>
                   </View>
                
                   </View>
  
                    </ScrollView>
                   </View>
                  
                   
                 </View> : null
                )
         
              })}
             
        
          </View>
          </ScrollView>
          </View>


           

      <View style={{height:67}}></View>
      {user.map((obj, index)=>{
        return (
          obj ?  null  : obj == null ? 
          <View style={{alignItems:'center'}}>
          <Text style={{color:'yellow', fontWeight:'bold'}}>No List</Text>
        </View> : null
        )
     
      })}
      
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : 'black'
  }

})