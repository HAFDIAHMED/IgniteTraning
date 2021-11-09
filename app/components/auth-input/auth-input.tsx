import * as React from "react"
import { StyleProp, TextInput, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { color, typography } from "../../theme"
import { Text } from "../text/text"
import { flatten } from "ramda"
import metrics from "../../theme/metrics"

const CONTAINER: ViewStyle = {
  justifyContent: "center",
}

const TEXT: TextStyle = {
  fontFamily: typography.primary,
  fontSize: 14,
  color: color.primary,
}

const INPUT : ViewStyle = {
  borderWidth:1,
  marginHorizontal:metrics.widthPercentageToDP(5),
  backgroundColor:color.palette.white,
  borderRadius:20,
}
export interface AuthInputProps {
  /**
   * An optional style override useful for padding & margin.
   */
  textinput : string
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export const AuthInput = observer(function AuthInput(props: AuthInputProps) {
  const { style } = props
  const styles = flatten([CONTAINER, style])

  return (
    <View style={styles}>
      <View style={INPUT}>
        <TextInput  placeholder={props.textinput}
        
        />
      </View>
    </View>
  )
})
