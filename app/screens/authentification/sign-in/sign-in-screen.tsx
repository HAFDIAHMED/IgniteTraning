import React, { useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import {TextInput, TextStyle, View, ViewStyle } from "react-native"
import { AuthInput, Button, Screen, Text, } from "../../../components"
import { useNavigation } from "@react-navigation/native"
//import { UserStore, useStores } from "../../../models"
//import { useStores } from "../../models"
import { color } from "../../../theme"
import { SafeAreaView } from "react-native-safe-area-context"
import metrics from "../../../theme/metrics"
import { useStores } from "../../../models"



export const SignInScreen = observer(function SignInScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation();
  
  //const {ProfileStore}=useStores();
  //const {Users}=ProfileStore;
  const {tacheStore}=useStores()
  //const {taches}=tacheStore
  const {tacheExample}=useStores();
  const [task,setTask]=useState({title:"task 1"});
  const [userName,setUserName]=useState({
    userName : "ahmed",
    userPassword :"1111",
  });
  const todos ={"taches": [{title : "ff"}]}
  
  useEffect(()=>{
    //tacheExample.setTitle(task.title)
    //console.log(tacheStore.getTaches[0])
    //console.log(tacheExample.getTitle)
   // console.log(tacheStore.getTaches)
    
  });
  return ( 
    <Screen style={ROOT} preset="scroll">
      <SafeAreaView >
         <AuthInput textinput="Enter a task" 
          onChangeText={(text)=>setTask({title:text})} 
          style={AuthenStyle}  
        />
        <Button  text ="Add Task" onPress={()=>{ tacheStore.AddTache(task);}}
          style={BUTTON_SIGNIN}
          textStyle={BUTTON_TEXT}
        />
        
      </SafeAreaView>
    </Screen>
  
    
  )
})
const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
  justifyContent:'center',
}
const AuthenStyle : ViewStyle={
  marginVertical:metrics.heightPercentageToDP(1),
}
const BUTTON_SIGNIN : ViewStyle={
  marginHorizontal:metrics.widthPercentageToDP(30),
  marginVertical:metrics.heightPercentageToDP(5),
  
}
const HEADER_TEXT : TextStyle={
  alignSelf:'center',
}
const BUTTON_TEXT : TextStyle={
  fontSize:20,
}

