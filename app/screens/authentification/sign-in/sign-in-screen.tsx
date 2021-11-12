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

  const [task,setTask]=useState({title:"task 1"});
  const [userName,setUserName]=useState({
    userName : "ahmed",
    userPassword :"1111",
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
  
  
  useEffect( ()=>{
  //profilesStore.getProfile();
    //console.log(profilesStore)  
   //HumanStore.getHumans()
  });
  return ( 
    <Screen style={ROOT} preset="fixed">
      <SafeAreaView >
         <AuthInput textinput="Enter a task" 
          onChangeText={(text)=>setTask({title:text})} 
          style={AuthenStyle}  
        />
        <Button  text ="Add Task" onPress={()=>{ console.log("hello")}}
          style={BUTTON_SIGNIN}
          textStyle={BUTTON_TEXT}
        />
        <Button style={BUTTON_SIGNIN} textStyle={BUTTON_TEXT} text="fetch users" onPress={()=>Get()}/>
       {/* <Text>{profilesStore.getJob}</Text>
        <Text>{profilesStore.getName}</Text> */}

         
        
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

