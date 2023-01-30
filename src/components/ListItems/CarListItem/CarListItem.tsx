import { icons } from '@/assets'
import { Text, Image } from '@rneui/themed'
import React from 'react'
import { ActivityIndicator, TouchableOpacity, View } from 'react-native'
import { useStyle } from './useStyle'
import { CarListItemProps } from './CarListItem.props'

export const CarListItem = ({
  email,
  img,
  model,
  plateNumber,
  status,
  disabled,
  onPress,
  onLongPress
}: CarListItemProps) => {
  const style = useStyle()
  return (
    <TouchableOpacity
      style={style.container}
      onPress={onPress}
      onLongPress={onLongPress}
      disabled={disabled}
    >
      <View style={style.imageView}>
        <Image
          source={{
            uri: img || Image.resolveAssetSource(icons.car).uri
          }}
          containerStyle={style.item}
          PlaceholderContent={<ActivityIndicator />}
        />
      </View>
      <View style={style.description}>
        <View>
          <View>
            <Text style={style.modelStyle}>
              Model: {model}
            </Text>
          </View>
          <View>
            <Text style={style.plateStyle}>
              Plate #: {plateNumber}
            </Text>
          </View>
        </View>
        <View>
          <View>
            <Text style={style.email}>
              {email}
            </Text>
          </View>
        </View>
      </View>
      <View style={style.statusView}>
        <View>
          <Text>
            Status
          </Text>
        </View>
        <View>
          <Text style={style.status}>
            {status}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}