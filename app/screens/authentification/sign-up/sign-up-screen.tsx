import React, { useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { SafeAreaView, TextStyle, ViewStyle } from "react-native"
import { AuthInput, Button, Screen, Text } from "../../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../../theme"
import metrics from "../../../theme/metrics"

export const SignUpScreen = observer(function SignUpScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  const [userName,setUserName]=useState({
    name : "ahmed",
    password :"1111",
  });
  const [confirmPWD,setConfirmPWD]=useState('');
  useEffect(()=>{
    console.log(userName)
  });
  const navigation = useNavigation();
  const ConfirmPassword=(pwd1: any,pwd2: any)=>{
      if(pwd1===pwd2){
        return(
          <Text>passwords are matched</Text>
        );
      }else {
        return(
          <Text>passwords dont match </Text>
        );
      }
  }
  return (
    <Screen style={ROOT} preset="scroll">
      <SafeAreaView >
        <Text preset="header" text="SIGNUP" style={HEADER_TEXT}/>
        
        <AuthInput textinput="Enter Your username" 
          onChangeText={(text)=>{userName.name=text}} 
          style={AuthenStyle}
        />
        <AuthInput textinput="Enter Your password" 
          onChangeText={(text)=>{userName.password=text}} 
          style={AuthenStyle}
          secureTextEntry={true}

        />
        <AuthInput textinput="Confirm Your password" 
          onChangeText={(text)=>{setConfirmPWD(text)}} 
          style={AuthenStyle}
          secureTextEntry={true}

        />
        {
            ConfirmPassword(userName.password,confirmPWD) 
        }
        
        <Button  text ="SignUp" onPress={()=>
        {setUserName({ name :userName.name,password:userName.password});
        navigation.navigate("signin");
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
