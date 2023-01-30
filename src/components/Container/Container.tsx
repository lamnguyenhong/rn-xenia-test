import React from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ContainerProps } from './Container.props'
import { useStyle } from './useStyle'

export const Container = (props: ContainerProps) => {
  const { bottom, top } = useSafeAreaInsets()
  const style = useStyle({
    bottom: props.disableBottomPadding ? 0 : bottom,
    top: props.disableTopPadding ? 0 : top
  })

  return (
    <View style={[style.container, props.style]}>
      {props.children}
    </View>
  )
}