import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Home from "../Screens/Home";
import Details from "../Screens/Details"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();//A stack navigator allows you to navigate through a stack of screens, where each new screen is pushed on top of the previous one.
const screenOptionStyle = {//an object named screenOptionStyle is defined. This object contains options for the navigator. The property headerShown: false means that the default header (navigation bar) will not be displayed for the screens in this navigator.
    headerShown:false
}

//TO USE NAVIGATION U SHOULD GO TO REACTNAVIGATION.ORG/DOCS/GETTING-STARTED/ FOT INSTALLATIONS
const Navigato = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigato

const styles = StyleSheet.create({})