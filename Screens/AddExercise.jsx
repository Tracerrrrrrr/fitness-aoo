import React, { useState } from 'react'
import { StyleSheet,Image, Text, View} from 'react-native';
import { Button ,Box,Stack,Input,Heading} from "native-base";
import DatePicker from 'react-native-date-picker'
const styles=StyleSheet.create({
    stackposi:{
        marginTop:150
    },
    te:{
        marginTop:40,
        fontWeight:'bold',
        fontSize:25,
       marginLeft:100
    }
})

function AddExercise() {
  return (
   <>
     <Text style={styles.te}>Add Exercise</Text>
   <View style={styles.stackposi} >
 <Stack space={4} w="100%" alignItems="center">
 <Heading size="sm">Exercise Name</Heading>
   <Input mx="3"  w="75%" maxWidth="300px" />
   <Heading size="sm">Duration</Heading>
   <Input mx="3" w="75%" maxWidth="300px" />
   <Heading size="sm">Calories</Heading>
   <Input mx="3" w="75%" maxWidth="300px" />
   <Heading size="sm">Date</Heading>
   <Input mx="3" w="75%" type='date' placeholder='Please Enter the Date
   '/>
    <Button size="md" colorScheme="primary">Submit</Button>
          <Button size="md" colorScheme="red">Log out</Button>
   </Stack>
   </View>
   </>
  )
}

export default AddExercise