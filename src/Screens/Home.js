import { StyleSheet, View,Image,Text } from 'react-native'
import React,{useState} from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import Menu from "../icons/Menu";
import Search from "../icons/Search";
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Product from "../components/Product";
const Home = ({ navigation }) => {
  const [city,setCity] = useState("Setif")
  
 
  return(
    <ScrollView>
    <View
    style={{
    flexDirection: "row",
    marginTop: 50,
    paddingHorizontal: 20,
   alignItems: "center" 
  }}>
     <View style={{ flex: 1,}}> 
      <Menu color="black" size={23} />
    </View>
    <View style={{flex:1,paddingRight:70,   }}> 
      <Picker 
       selectedValue={city}
       onValueChange={(itemValue) => setCity(itemValue)}

      >
      <Picker.Item label="Setif" value="Setif" />
              <Picker.Item label="Algiers" value="Algiers" />
              <Picker.Item label="Oran" value="Oran" />
              <Picker.Item label="Constantine" value="Constantine" />
      </Picker>
    </View>
    <View style={{  }}> 
      <Search />
    </View>

    </View>
    <View style={{
      marginTop:20,
      marginLeft:20
    }}>
      <Text style={{
        fontSize:40,
        fontWeight:"bold"
      }}>Welcome to </Text>
      <Text
      style={{
        fontSize:40,
        fontWeight:"bold"
      }}>foodie delight!</Text>
    </View>
    <View style={{
      marginTop:20,
      paddingHorizontal:20,
      
    }}>
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{}}>
      <View style={{
        flexDirection:"row",
        backgroundColor:"#d2b48c",
        borderRadius:30,
        paddingHorizontal:20,
        height:50,
        width:160,
        alignItems:'center',
        marginRight: 15,
        
      }}>
      <Image
        source={require("../image/burger.png")}
        style={{height:40,width:50,}}
      />
         <Text
         style={{ paddingTop:1,
          fontSize:20,
          fontWeight:"bold"
          }}>Burger</Text>
          
      </View>

      <View style={{
        flexDirection:"row",
        backgroundColor:"#e6e6fa",
        borderRadius:30,
        paddingHorizontal:20,
        alignItems:'center',
        marginRight: 15,
        
      }}>
      <Image
        source={require("../image/chawarma.png")}
        style={{height:40,width:50,}}
      />
         <Text
         style={{ paddingTop:1,
          fontSize:20,
          color:"darck",
          fontWeight:"bold"
          }}>Chawarma</Text>
          
      </View>

      <View style={{
        flexDirection:"row",
        backgroundColor:"#e6e6fa",
        borderRadius:30,
        paddingHorizontal:20,
        alignItems:'center',
        marginRight: 15,
        
      }}>
      <Image
        source={require("../image/piza.png")}
        style={{height:40,width:50,}}
      />
         <Text
         style={{ paddingTop:1,
          fontSize:20,
          color:"darck",
          fontWeight:"bold"
          }}>Pizza</Text>
          
      </View>

      <View style={{
        flexDirection:"row",
        backgroundColor:"#e6e6fa",
        borderRadius:30,
        paddingHorizontal:20,
        alignItems:'center',
        marginRight: 15,
        
      }}>
      <Image
        source={require("../image/tacos.png")}
        style={{height:40,width:50,}}
      />
         <Text
         style={{ paddingTop:1,
          fontSize:20,
          color:"darck",
          fontWeight:"bold"
          }}>Taxos</Text>
          
      </View>

      <View style={{
        flexDirection:"row",
        backgroundColor:"#e6e6fa",
        borderRadius:30,
        paddingHorizontal:20,
        alignItems:'center',
        marginRight: 15,
        
      }}>
      <Image
        source={require("../image/pasta.png")}
        style={{height:30,width:50,}}
      />
         <Text
         style={{ paddingTop:1,
          fontSize:20,
          color:"darck",
          fontWeight:"bold",
          }}>Pasta</Text>
          
      </View>
       </ScrollView>
       
    </View>
    
      <ScrollView>
      <View style={{
      flexDirection: "row",
    marginTop: 50,
    paddingHorizontal: 20,
   alignItems: "center" 
    }}>
        <Text style={{
           fontSize:20,
        fontWeight:"bold",
        }}>New Product</Text>
        <Icon name="more-horiz" size={30} color="#808080" style={{paddingLeft:230}}/>
        </View>
       <View style={{
      flexDirection: "row",
    marginTop: 30,
   paddingHorizontal: 20,
  
    }}>
    <View style={{
    backgroundColor: "#e6e6fa",
    borderRadius: 30,
    height: 300,
    width: 170,
    alignItems: "center",
    }}>
    <Product
      Calories={"290 Calories"}
      Images={require("../image/burger.png")}
      title={"Burger"}
      navigation={navigation}
      price={"$7.99"}
      
    />
    </View>
    
    
<View style={{
  marginTop:20,
     marginLeft: 20,
    backgroundColor: "#e6e6fa",
    borderRadius: 30,
    height: 300,
    width: 170,
    alignItems: "center",
    
    
    }}>
    <Product
      Calories={"310 Calories"}
      Images={require("../image/chawarma.png")}
      title={"Chawarma"}
      navigation={navigation}
      price={"$10.99"}
      
    />
</View>


    </View>

    <View style={{
      flexDirection: "row",
    marginTop: 30,
   paddingHorizontal: 20,
  
    }}>
    <View style={{
    backgroundColor: "#e6e6fa",
    borderRadius: 30,
    height: 300,
    width: 170,
    alignItems: "center",
    }}>
    <Product
      Calories={"240 Calories"}
      Images={require("../image/piza.png")}
      title={"Pizza"}
      price={"$12.99"}
      navigation={navigation}
      
    />
    </View>
    
    
<View style={{
  marginTop:20,
     marginLeft: 20,
    backgroundColor: "#e6e6fa",
    borderRadius: 30,
    height: 300,
    width: 170,
    alignItems: "center",
    
    
    }}>
    <Product
      Calories={"400 Calories"}
      Images={require("../image/tacos.png")}
      title={"Taxos"}
      navigation={navigation}
      price={"$17.99"}
      
    />
</View>


    </View>
        
       
       
      </ScrollView>
    
  </ScrollView>
  
  )
}
export default Home

const styles = StyleSheet.create({})