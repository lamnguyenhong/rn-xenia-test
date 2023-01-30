import { Container } from '@/components'
import { FAB, Tab, TabView, Text } from '@rneui/themed'
import React, { useCallback, useMemo } from 'react'
import { View } from 'react-native'
import { CarsScreenPayloadProps } from './CarsScreen.props'
import { useStyle } from './useStyle'
import { AllCars, CompletedReservedCars } from './Tabs'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { RFValue } from 'react-native-responsive-fontsize'
import { Car, CarStatus, Reservation } from '@/typings/api'

export const CarsScreen = (props: CarsScreenPayloadProps) => {
  const style = useStyle()
  const { top } = useSafeAreaInsets()
  const [index, setIndex] = React.useState(0);

  const tabs = useMemo(() => [
    {
      icon: { name: 'car-multiple', type: 'material-community', color: 'white' },
      titleStyle: { fontSize: RFValue(12) },
      title: 'Available'
    },
    {
      icon: { name: 'heart', type: 'ionicon', color: 'white' },
      titleStyle: { fontSize: RFValue(12) },
      title: 'Reserved'
    },
    {
      icon: { name: 'cart', type: 'ionicon', color: 'white' },
      titleStyle: { fontSize: RFValue(12) },
      title: 'Completed'
    },
  ], [])

  const handleViewCarDetails = useCallback((item: Car) => {
    props.navigation.navigate('ViewCarDetailsScreen', { car: item })
  }, [])

  const handleReserve = useCallback((item: Reservation) => {
    props.navigation.navigate('ReservationDetailsScreen', { reservation: item })
  }, [])

  return (
    <Container
      disableBottomPadding
      style={{ ...style.container, paddingTop: top }}
    >
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: 'white',
          height: 3,
        }}
        variant="primary"
      >
        {tabs.map(tab => (
          <Tab.Item
            title={tab.title}
            titleStyle={tab.titleStyle}
            icon={tab.icon}
            key={tab.title}
          />
        ))}
      </Tab>
      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={style.tabViewItem}>
          <AllCars
            onClick={handleViewCarDetails}
          />
        </TabView.Item>
        <TabView.Item style={style.tabViewItem}>
          <CompletedReservedCars
            status={CarStatus.RESERVED}
            onPress={handleReserve}
          />
        </TabView.Item>
        <TabView.Item style={style.tabViewItem}>
          <CompletedReservedCars
            status={CarStatus.COMPLETED}
            onPress={handleReserve}
          />
        </TabView.Item>
      </TabView>
      <FAB
        icon={{
          type: 'font-awesome',
          name: 'plus',
          color: 'white',
          onPress: () => props.navigation.navigate('UpsertCarPostScreen', {})
        }}
        buttonStyle={style.fabButtonStyle}
        placement="right"
      />
    </Container>
  )
}