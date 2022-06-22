/**
 * Use this to setup/call device features
 */
import {
  Platform,
  Dimensions,
  PermissionsAndroid,
  Rationale,
  Permission,
  Linking,
  Alert,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { ICurrentLocation } from '../types';

export default class DeviceFeatures {
  static get dimensions() {
    return {
      ...Dimensions.get('window'),
    };
  }

  static get isAndroid() {
    return Platform.OS === 'android';
  }

  static get isIOS() {
    return Platform.OS === 'ios';
  }

  static async androidPermissionGranted(permission: Permission, rationale?: Rationale) {
    if (DeviceFeatures.isAndroid) {
      const permissionGranted = await PermissionsAndroid.check(permission);
      if (!permissionGranted) {
        const responsePermission = await PermissionsAndroid.request(permission, rationale);
        return responsePermission === PermissionsAndroid.RESULTS.GRANTED;
      }
      return permissionGranted;
    }
    return false;
  }

  static getLocation(
    handlePosition: ({ currentLatitude, currentLongitude }: ICurrentLocation) => void,
    handleError: Function
  ) {
    Geolocation.getCurrentPosition(
      (position) => {
        const currentLatitude = position.coords.latitude;
        const currentLongitude = position.coords.longitude;
        handlePosition({
          currentLatitude,
          currentLongitude,
        });
      },
      (error) => handleError(error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }

  static callPhone(phoneNumber: string) {
    const telText = `tel:${phoneNumber}`;
    Linking.canOpenURL(telText)
      .then((supported) => {
        if (!supported) {
          Alert.alert('Telefone não disponível');
        } else {
          return Linking.openURL(telText);
        }
      })
      .catch(() => Alert.alert('Nâo foi possível realizar ligação'));
  }
}
