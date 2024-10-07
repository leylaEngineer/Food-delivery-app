import { Image, StyleSheet, Text, View } from 'react-native'
import React,{ useState } from 'react'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import Arrow from "../icons/Arrow";
import Heart from "../icons/Heart";
const Details = ({ route,navigation }) => {
  const [quantity,setQuantity] = useState(1);
  const { title, Calories, Images,price } = route.params;
  const [favorit,setFavorit]=useState(false);

  const checkFav = () =>{
    setFavorit(!favorit);
  }
  const addQ = () =>{
    setQuantity(quantity +1);
  }
  const subQ = () =>{
    if(quantity > 0){
      setQuantity(quantity - 1);
    }
  }
  return (
    
    <ScrollView>
       <View
    style={{
    flexDirection: "row",
    marginTop: 50,
    paddingHorizontal: 20,
   alignItems: "center" 
  }}>
  <TouchableOpacity onPress={() => navigation.goBack()}>
     <View style={{ flex: 1,}}> 
      <Arrow color="black" size={23}  />
    </View>
    </TouchableOpacity>
    <View style={{flex:1, alignItems:"center" ,}}> 
    <View style={{flexDirection:"row"}}>
    <Image source={Images} style={{height:30,
      width:30,
      marginRight:10,}}/>
      <Text style={{fontWeight:"bold",fontSize:17}}>{Calories}</Text>
      </View>
    </View>
    <TouchableOpacity onPress={checkFav}>
    <View style={{  }}> 
      <Heart color={favorit ? "red" : "black"} size={23}/>
    </View>
    </TouchableOpacity>

    </View>

    <View style={{
      paddingTop:10,
      alignItems:"center",
    }}>
      <Image source={Images} style={{height:300,width:300}}/>
      <View
      
      style={{backgroundColor:"#e6e6fa",
      borderRadius:30,
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"center",
      paddingHorizontal:10,
      height:40,
      width:100
      
      }}>
      <TouchableOpacity onPress={addQ}>
      <Text style={{paddingHorizontal:10,fontWeight:"bold",fontSize:20}}>+</Text></TouchableOpacity>
      <Text style={{paddingHorizontal:10,fontWeight:"bold",fontSize:20,alignItems:'center'}}>{quantity}</Text>
      <TouchableOpacity onPress={subQ}>
      <Text style={{paddingHorizontal:10,fontWeight:"bold",fontSize:20}}>-</Text>
      </TouchableOpacity>
      </View>
    </View>
    <View style={{flexDirection: "row",
    marginTop: 50,
    paddingHorizontal: 20,
   alignItems: "center" }}>
      <Text style={{fontWeight:"bold",fontSize:30,}}>{title}</Text>
      <Text style={{fontWeight:"bold",fontSize:30,marginLeft:130,paddingTop:20}}>$12.99</Text>
    </View>
    <View style={{marginLeft:20,paddingTop:20, }}>
      <Text style={{fontWeight:"bold",fontSize:20,paddingVertical:20,}}>Ingredients</Text>
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}>
       <View style={{
        flexDirection:"row",
        backgroundColor:"#e6e6fa",
        borderRadius:40,
        marginRight:15
        

       }}>
       <Image source={Images} style={{height:50,width:50}}/>
       

       </View>
       <View style={{
        flexDirection:"row",
        backgroundColor:"#e6e6fa",
        borderRadius:40,
        marginRight:15
        

       }}>
       <Image source={Images} style={{height:50,width:50}}/>
       

       </View>
       <View style={{
        flexDirection:"row",
        backgroundColor:"#e6e6fa",
        borderRadius:40,
        marginRight:15
        

       }}>
       <Image source={Images} style={{height:50,width:50}}/>
       

       </View>
       <View style={{
        flexDirection:"row",
        backgroundColor:"#e6e6fa",
        borderRadius:40,
        marginRight:15
        

       }}>
       <Image source={Images} style={{height:50,width:50}}/>
       

       </View>
       <View style={{
        flexDirection:"row",
        backgroundColor:"#e6e6fa",
        borderRadius:40,
        marginRight:15
        

       }}>
       <Image source={Images} style={{height:50,width:50}}/>
       

       </View>
       <View style={{
        flexDirection:"row",
        backgroundColor:"#e6e6fa",
        borderRadius:40,
        marginRight:15
        

       }}>
       <Image source={Images} style={{height:50,width:50}}/>
       

       </View>
       <View style={{
        flexDirection:"row",
        backgroundColor:"#e6e6fa",
        borderRadius:40,
        marginRight:15
        

       }}>
       <Image source={Images} style={{height:50,width:50}}/>
       

       </View>
      </ScrollView>
      <View>
        <Text  style={{fontWeight:"bold",fontSize:20,paddingVertical:20,}}>Details</Text>
        <Text style={{fontWeight:"bold",fontSize:20, color:"#c0c0c0"}}>
        Indulge in our Classic Cheeseburger, a timeless favorite that 
        combines a juicy, 100% beef patty with melted cheddar cheese,
         fresh vegetables, and zesty condiments. Perfectly grilled to
          perfection, this burger is served on a toasted sesame seed 
          bun, making it a delightful meal for any occasion.
        </Text>
       </View>
    </View>
    </ScrollView>
  )
}

export default Details

