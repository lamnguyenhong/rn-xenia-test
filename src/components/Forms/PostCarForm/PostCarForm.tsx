import { Switch, Text } from "@rneui/base"
import { Button, Card, Input } from "@rneui/themed"
import { View } from "react-native"

import { PostCarFormProps } from './PostCarForm.props'
import { useStyle } from "./useStyle"

export const PostCarForm = ({
  car: {
    modelName,
    isAvailableForRent,
    plateNumber,
  },
  isLoading,
  onAction,
  handleChangeText,
  handleRentToggle,
}: PostCarFormProps) => {
  const style = useStyle()

  return (
    <Card>
      <Card.Title>
        Post Car Form
      </Card.Title>
      <Card.Divider />
      <View>
        <View>
          <Input
            placeholder="Enter Model"
            value={modelName}
            onChangeText={v => handleChangeText('modelName', v)}
          />
        </View>
        <View>
          <Input
            placeholder="Enter Plate #"
            value={plateNumber}
            onChangeText={v => handleChangeText('plateNumber', v)}
          />
        </View>
        <View style={style.toggleRentView}>
          <Text>
            Available For Rent
          </Text>
          <Switch
            value={isAvailableForRent}
            onValueChange={handleRentToggle}
          />
        </View>
      </View>
      <View style={style.actionView}>
        <Button
          title="Proceed"
          onPress={onAction}
          disabled={isLoading}
          loading={isLoading}
        />
      </View>
    </Card>
  )
}