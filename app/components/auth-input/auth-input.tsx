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
const PRESETS: { [name: string]: ViewStyle } = {
  default: {},
}

export interface AuthInputProps {
  /**
   * An optional style override useful for padding & margin.
   */
  textinput : string
  style?: StyleProp<ViewStyle>
  preset?: keyof typeof PRESETS
  forwardedRef?: any
  children?: React.ReactNode

}

/**
 * Describe your component here
 */
export const AuthInput = observer(function AuthInput(props: AuthInputProps) {
  const { style,forwardedRef ,...rest} = props
  const styles = flatten([CONTAINER, style])

  return (
    <View style={styles}>
      <View style={INPUT}>
        <TextInput  placeholder={props.textinput}
        {...rest}
        ref={forwardedRef}
        />
      </View>
    </View>
  )
})
