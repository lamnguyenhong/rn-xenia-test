import {
  PERMISSIONS,
  check,
  RESULTS,
  request,
} from 'react-native-permissions';
import { Platform } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

export const hasLocationPermission = async () => {
  const platformSpecificLocationPermission = Platform.select({
    android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
  });

  if (platformSpecificLocationPermission) {

    const result = await check(platformSpecificLocationPermission);

    return result === RESULTS.GRANTED
  }

  return false
}

const requestIOSLocationPermission = async () => {
  const status = await Geolocation.requestAuthorization('whenInUse');

  return status;
};

export const requestLocationPermission = async () => {
  const permissionData = Platform.select({
    android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
  });


  if (Platform.OS === 'ios') {
    const result = await requestIOSLocationPermission();

    return result;
  }

  const status = await request(permissionData as any);

  return status;
};
