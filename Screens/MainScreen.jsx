import React from 'react'
import { StyleSheet,Image, Text, View} from 'react-native';
import { TextInput } from 'react-native';
import { Button ,Box,Stack} from "native-base";
import { TouchableOpacity } from 'react-native';
const styles=StyleSheet.create({
    inputContainer:{
        width:200,
        height:30,
        marginLeft:135,
        fontWeight:"bold"
    },
imgContainer:{
  marginTop:25,
  borderRadius:12,
  width:50,
  height:50,
},
textSt:{
  fontSize:20,
  fontWeight:'bold'
},
imgContainer:{
  width:50,
  height:40,
  marginLeft:75
},
imgContaine:{
  width:50,
  height:40,
  marginLeft:80
},
flex:{
    flexDirection:'row',
    marginTop:50,
    backgroundColor:'pink',
    borderRadius:15
},
texts:{
    marginLeft:90,
    marginTop:5 ,
    fontSize:20
},
flexi:{
  flexDirection:'row',
  marginTop:50,
  backgroundColor:'#CBC3E3',
  borderRadius:15
},
text:{
  marginLeft:100,
  marginTop:5 ,
  fontSize:20
},
goalContainer:{
  flexDirection:'row',
  justifyContent:'space-between',
  marginTop:15
},
goalUnder:{
marginLeft:15,
backgroundColor:"#D3D3D3",
fontFamily:'Radio Canada'
},
goalUnde:{
  marginRight:15,
backgroundColor:"#D3D3D3",
fontFamily:'Radio Canada'
},
goalLeft:{
  marginLeft:8
},
t:{
  fontSize:25,
  
},
ta:{
  fontSize:25
},
undernav:{
  marginTop:15,
  alignItems:'center',
  flexDirection:'row',
  justifyContent:'space-between'
},
b:{
  flexDirection:'row',
  marginTop:20
},
ba:{
    marginLeft:60
},
bb:{
    marginLeft:40
},
bd:{
    marginTop:20
}
})
function MainScreen() {
  return (
    <>
    <View>
      <Image style={styles.imgContainer}source={require("../images/user.jpeg")}/>
      <View style={styles.inputContainer}><Text style={styles.textSt}>Welcome!</Text></View>
    </View>
    <View>
 <View style={styles.flex}>
 <Text style={styles.texts}>Today's Progress!</Text>
 <Image style={styles.imgContainer} source={require("../images/guyrun.jpeg")}/>
 </View>
 <View style={styles.goalContainer}>
     <View style={styles.goalUnder}> 
    <Text>Current Goal</Text>
     <Text style={styles.goalLeft}>1000 Min</Text>
     </View>
     <View style={styles.goalUnde}> 
     <Text>Current Total</Text>
     <Text style={styles.goalLeft}>80Min</Text>
     </View>
 </View>
<View style={styles.flexi}>
<Text style={styles.text}>Today's Activity</Text>  
<Image style={styles.imgContaine} source={require("../images/dumbleguy.jpeg")}/>
</View>
 </View>
 <View style={styles.undernav}>
          <Box p="1" bg="primary.500" _text={{
      fontSize: "md",
      fontWeight: "medium",
      color: "warmGray.50",
      letterSpacing: "lg",
    }} shadow={2}>
        <Text style={styles.ta}>Walk</Text>
       <Text>Duration:20min</Text>
          <Text>Calories:100cal</Text>
      </Box>
          <Box p="1" bg="secondary.500" _text={{
      fontSize: "md",
      fontWeight: "medium",
      color: "warmGray.50",
      letterSpacing: "lg",
    }} shadow={2}>
        <Text style={styles.ta}>Cycling</Text>
       <Text>Duration:60min</Text>
          <Text>Calories:550cal</Text>
      </Box>
      </View>
      <View>
<View style={styles.b}>
<Button  size="md" style={styles.ba} colorScheme="secondary">Add Exercise</Button>
<Button size="md" style={styles.bb} colorScheme="purple">
         Refresh
          </Button>
          </View>
          <View style={styles.bd}>
          <Stack mb="2.5" mt="1.5" direction={{
        base: "column",
        md: "row"
      }} space={2} mx={{
        base: "auto",
        md: "0"
      }}>
              <Button size="md"colorScheme="primary">View Profile</Button>
              <Button size="md"colorScheme="red">Logout</Button>
              </Stack>
          </View>
          </View>
 </>
  )
}

export default MainScreen