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
import { ScrollView } from "react-native-gesture-handler"



export const SignInScreen = observer(function SignInScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation();
  
  //const {ProfileStore}=useStores();
  //const {Users}=ProfileStore;
  //const {tacheStore}=useStores()
  //const {taches}=tacheStore
 // const {profilesStore, HumanStore}=useStores();
  //const {utilisateurstore}=useStores()
  const [task,setTask]=useState({title:"task 1"});
  const [userName,setUserName]=useState({
    email : "ahmed",
    password :"1111",
  });
  const [usersList,setUsersList]=useState({});
  const [ProfilList,setProfilList]=useState([]);
  const FetchUsers=async (url_user) =>{
      try {
          const response =await fetch("http://192.168.0.106:3000"+url_user);
          const json = await response.json();
          //console.log(json)
          //setUsersList([])
          //setUsersList(json);
          console.log(json.name)
          return json;
      }catch(error){
        console.error(error)
      }
      
  }
  const Get=async ()=>{
    setUsersList( await FetchUsers("/person") );
  }
  const TestApi = async ()=>{
    try {
    const response = await fetch("http://192.168.0.106:8000/products");
    console.log(response)
    }catch(error){
      console.error(error)
    }
    
  }
  
  useEffect( ()=>{
  //profilesStore.getProfile();
    //console.log(profilesStore)  
   //HumanStore.getHumans()
   //utilisateurstore.setPassword("bamir")
   //utilisateurstore.login("nilson@email.com","nilson")
   //console.log(utilisateurstore.email)
    //TestApi();
  //console.log(utilisateurstore.GetProd(utilisateurstore.getToken))
  
  });
  return ( 
    <Screen style={ROOT} preset="fixed">
      <SafeAreaView >
         <AuthInput textinput="email" 
          onChangeText={(text)=>userName.email=text} 
          style={AuthenStyle}  
        />
        <AuthInput textinput="password" 
          onChangeText={(text)=>userName.password=text} 
          style={AuthenStyle}  
        />
        <Button  text ="login" onPress={()=>{ 
          setUserName({
            email:userName.email,
            password:userName.password
          })
         // utilisateurstore.login(userName.email,userName.password)
        }}
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

