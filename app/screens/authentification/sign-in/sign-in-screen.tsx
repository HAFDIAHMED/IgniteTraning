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



export const SignInScreen = observer(function SignInScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()
  //const {UserStore}=useStores()
  //const {Users}=UserStore
  const [userName,setUserName]=useState({
    name : "ahmed",
    password :"1111",
  });
  useEffect(()=>{
    console.log(userName)
  });
  return (
    
    <Screen style={ROOT} preset="scroll">

      <SafeAreaView >
        <Text preset="header" text="SIGNIN" style={HEADER_TEXT}/>
        
        <AuthInput textinput="Enter Your username" 
          onChangeText={(text)=>{userName.name=text}} 
          style={AuthenStyle}
          
        />
        <AuthInput textinput="Enter Your password" 
          onChangeText={(text)=>{userName.password=text}} 
          style={AuthenStyle}
          secureTextEntry={true}
        />
        
        <Button  text ="SignIn" onPress={()=>
        {setUserName({ name :userName.name,password:userName.password});
        navigation.navigate("signup");
        }
        
                                    }
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

