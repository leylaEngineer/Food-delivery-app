import React from 'react';
import Home from './src/Screens/Home';
import Details from './src/Screens/Details';
import Product from './src/components/Product';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();//A stack navigator allows you to navigate through a stack of screens, where each new screen is pushed on top of the previous one.
const screenOptionStyle = {//an object named screenOptionStyle is defined. This object contains options for the navigator. The property headerShown: false means that the default header (navigation bar) will not be displayed for the screens in this navigator.
    headerShown:false
}

//TO USE NAVIGATION U SHOULD GO TO REACTNAVIGATION.ORG/DOCS/GETTING-STARTED/ FOT INSTALLATIONS
const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
    </GestureHandlerRootView>
  )
}


export default App;