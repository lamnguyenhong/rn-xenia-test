import { icons } from "@/assets"
import { Image } from "@rneui/base"
import { Card, Text } from "@rneui/themed"
import { View } from "react-native"
import { ReservationCardProps, ViewTextProps } from './ReservationCard.props'
import { useStyle } from "./useStyle"

const ViewText = (props: ViewTextProps) => {
  const style = useStyle()

  return (
    <View style={style.viewTextContainer}>
      <View>
        <Text style={style.labelTextStyle}>
          {props.label}
        </Text>
      </View>
      <View>
        <Text style={style.valueTextStyle}>
          {props.value}
        </Text>
      </View>
    </View>
  )
}

export const ReservationCard = ({
  date,
  img,
  modelName,
  ownerEmail,
  plateNumber,
  status,
}: ReservationCardProps) => {
  return (
    <Card>
      <View>
        <Card.Image
          source={{ uri: img || Image.resolveAssetSource(icons.car).uri }}
        />
      </View>
      <Card.Divider />
      <View>
        <ViewText
          label="Model Name"
          value={modelName}
        />
        <ViewText
          label="Plate Number"
          value={plateNumber}
        />
        <ViewText
          label={`${status === 'reserved' ? 'Reserved' : 'Completed'} Date`}
          value={date}
        />
        <ViewText
          label="Status"
          value={status.toLocaleUpperCase()}
        />
        <ViewText
          label="Owner Email"
          value={ownerEmail}
        />
      </View>
    </Card>
  )
}