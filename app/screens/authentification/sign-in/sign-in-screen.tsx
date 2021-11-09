import React, { useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import {TextInput, View, ViewStyle } from "react-native"
import { AuthInput, Button, Screen, Text, } from "../../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../../theme"
import { SafeAreaView } from "react-native-safe-area-context"
import metrics from "../../../theme/metrics"



export const SignInScreen = observer(function SignInScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  const [test,setTest]=useState(1);
  const [userName,setUserName]=useState({
    name : "ahmed",
    password :"1111",
  });
  useEffect(()=>{
    console.log(userName)
  });
  return (
    
    <Screen style={ROOT} preset="scroll">

      <SafeAreaView>
        <Text preset="header" text="singin" />
        <TextInput  
        placeholder="text 1"
         onChangeText={(text)=>{userName.name=text}} 
        />
        <TextInput  
        placeholder="text 2"
         onChangeText={(text)=>{userName.name=text}} 
        />
        <AuthInput textinput="Enter Your username" 
          onChangeText={(text)=>{userName.name=text}} 
          style={AuthenStyle}
        />
        <AuthInput textinput="Enter Your password" 
          onChangeText={(text)=>{userName.password=text}} 
          style={AuthenStyle}
        />
        <Button  text ="SignIn" onPress={()=>setUserName({ name :userName.name,password:userName.password})}/>
      

      </SafeAreaView>
    </Screen>
  
    
  )
})
const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}
const AuthenStyle : ViewStyle={
  marginVertical:metrics.heightPercentageToDP(1),
}

