import React from "react"
import { observer } from "mobx-react-lite"
import { TextInput, View, ViewStyle } from "react-native"
import { Screen, Text } from "../../../components"
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
  return (
    
    <Screen style={ROOT} preset="scroll">

      <SafeAreaView>
        <Text preset="header" text="singin" />
        <View style={INPUT}>
          <TextInput  placeholder="Enter Your username"/>
        </View>
      </SafeAreaView>

    </Screen>
  
    
  )
})
const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}
const INPUT : ViewStyle = {
  borderWidth:1,
  marginHorizontal:metrics.widthPercentageToDP(5),
  backgroundColor:color.palette.white,
  borderRadius:20,
}
