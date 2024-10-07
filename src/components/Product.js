import { StyleSheet, Text,Image, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Details from '../Screens/Details'
const Product = ({Images,title,Calories,navigation,price}) => {
  
  return (
    <TouchableOpacity onPress={() => {navigation.navigate('Details', { title, Calories, Images,price });
    }}>
    <View style={{
      alignItems:"center",
      margin:20,
      
     
    }}>
    <View style={{flexDirection:"row",alignItems:"center"}}> 
    <Image source={Images} style={{
      height:30,
      width:30,
      marginRight:10,
      
    }}/>
    <Text style={{
       fontWeight:"bold"
    }}>
      {Calories}
    </Text>
    </View>
    <View>
      <Image source={Images} style={{height:160,width:150}}/>
    </View>
    <Text style={{
      fontWeight:"bold"}}>{title}</Text>
     </View>
     </TouchableOpacity>
   
  )
}

export default Product

const styles = StyleSheet.create({})