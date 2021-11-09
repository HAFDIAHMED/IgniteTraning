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
  
  const {ProfileStore}=useStores();
  const {Users}=ProfileStore;
  const [mail,setEmail]=useState({mail:""});
  const [userName,setUserName]=useState({
    userName : "ahmed",
    userPassword :"1111",
  });
  useEffect(()=>{
    console.log(mail);
   
    console.log(Users)
  });
  const AjouterProfile=(NewProfil)=>{
    ProfileStore.AddUser(NewProfil)
  }
  return (
    
    <Screen style={ROOT} preset="scroll">

      <SafeAreaView >
        <Text preset="header" text="SIGNIN" style={HEADER_TEXT}/>
        
        <AuthInput textinput="Enter Your username" 
          onChangeText={(text)=>{userName.userName=text}} 
          style={AuthenStyle}
          
        />
        <AuthInput textinput="Enter Your password" 
          onChangeText={(text)=>{userName.userPassword=text}} 
          style={AuthenStyle}
          secureTextEntry={true}
        />
        
        <Button  text ="SignIn" onPress={()=>
        {setUserName({ userName :userName.userName,userPassword:userName.userPassword});
        setEmail({mail:"ahmedhafdi"})
        //navigation.navigate("signup");
        AjouterProfile(mail)
        } }
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

