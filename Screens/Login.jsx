import React from 'react'
import { StyleSheet,Image, Text, View} from 'react-native';
import { Button ,Box,Stack,Input,Icon,MaterialIcons,} from "native-base";
const styles=StyleSheet.create({
    pp:{
        marginTop:190
    },
    imgstyle:{
        width:100,
        height:100,
        marginLeft:130
    },
    stackposi:{
        marginTop:40
    }
})
function Login() {
  return (
   <>
   <View style={styles.pp}>
       <Image style={styles.imgstyle} source={require("../images/user.jpeg")}/>
   <Stack style={styles.stackposi}space={4} w="100%" alignItems="center">
   <Input mx="3" placeholder="UserName" w="75%" maxWidth="300px" />
   <Input mx="3" placeholder="Password" w="75%" maxWidth="300px" />
   </Stack>
   <Stack style={styles.stackposi} mb="2.5" mt="1.5" direction={{
        base: "row",
        md: "row"
      }} space={2} mx={{
        base: "auto",
        md: "0"
      }}>
          <Button size="md" colorScheme="primary">Login</Button>
          <Button size="md" colorScheme="purple">SignUp</Button>
          </Stack>
    </View>
   </>
  )
}

export default Login