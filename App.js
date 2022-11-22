import * as React from 'react';
import {View} from 'react-native' ;
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/Feather";
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons"
import Icon1 from "react-native-vector-icons/FontAwesome";
//* 1 St step is Navigate the main screen using  react native navigation library//



//Screen//
import Plash from './Screen/Plash' ;
import Main from './Screen/Main' ;

//Top barList//
import Add from './Screen/Top/Add' ;
import List from './Screen/Top/List' ;
import Rate from './Screen/Top/Rate' ;
//Top barList//



//Mobile//
import Mobile from './Screen/Mobile' ;
//Mobile//

//Screen//

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();
const Tap = createBottomTabNavigator();

function MyBottom() {
  return (
    <Tap.Navigator
    
    screenOptions={{
      tabBarShowLabel: false,
      tabBarStyle: {  position: 'absolute',backgroundColor:'black'},
      tabBarBackground: () =>(
    <View  style={{flex:1}}>

    </View>
      )
    }}
    
    >
      <Tap.Screen name="Main" component={Main} options={{headerShown:false}} options={{ headerShown:false,tabBarIcon : ({focused}) => focused ? <Icon name="home" size={30} color="orange"/> : <Icon name="home" size={26} color="grey"/>}}/>
      <Tap.Screen name="List" component={List} options={{headerShown:false}} options={{ headerShown:false,tabBarIcon : ({focused}) => focused ? <Icon1 name="list-ol" size={30} color="orange"/> : <Icon1 name="list-ol" size={26} color="grey"/>}} />
      <Tap.Screen name="Rate" component={Rate} options={{headerShown:false}} options={{ headerShown:false,tabBarIcon : ({focused}) => focused ? <Icon1 name="star-half-full" size={30} color="orange"/> : <Icon1 name="star-half-full" size={26} color="grey"/>}} />
    </Tap.Navigator>
  );
}

export function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Add" component={Add} />
      <Tab.Screen name="List" component={List} />
      <Tab.Screen name="Rate" component={Rate} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator>
       <Stack.Screen name="Plash" component={Plash} options={{headerShown:false}}/> 
      <Stack.Screen name="MyBottom" component={MyBottom} options={{headerShown:false}} />
      <Stack.Screen name="Mobile" component={Mobile} options={{headerShown:false}}/>
    </Stack.Navigator>

    </NavigationContainer>
  );
}