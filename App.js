import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import AddItem from './screens/AddItem';
import List from './screens/List';
// import Login from './emailauth/Login';
import MobileLogin from './mobileotp/MobileLogin';


const Stack = createStackNavigator();

function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
           <Stack.Screen name="MobileLogin" component={MobileLogin} />
           {/* <Stack.Screen name="Login" component={Login} />  */}
           <Stack.Screen name="Home" component={Home} />
           <Stack.Screen name="AddItem" component={AddItem} />
           <Stack.Screen name="List" component={List} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;