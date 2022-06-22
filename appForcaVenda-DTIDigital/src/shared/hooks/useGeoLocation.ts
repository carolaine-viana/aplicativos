/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import Geolocation from 'react-native-geolocation-service';
import { Alert, PermissionsAndroid } from 'react-native';
import { DeviceFeatures } from '../base';
import { ICurrentLocation } from '../types';
import { handlePlataforms } from '../utils';
import ErrorMessages from '../constants/errorMessages';

const useGeoLocation = () => {
  const [currentLocation, setCurrentLocation] = useState<ICurrentLocation>({
    currentLatitude: 0,
    currentLongitude: 0,
  });

  useEffect(() => {
    function loadLocation() {
      Geolocation.getCurrentPosition(
        (position) => {
          if (position) {
            setCurrentLocation({
              currentLatitude: position.coords.latitude,
              currentLongitude: position.coords.longitude,
            });
          }
        },
        () => {},
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    }

    loadLocation();
  }, []);

  const handlePosition = (currentLocationPosition: ICurrentLocation) => {
    setCurrentLocation(currentLocationPosition);
  };

  const handleError = () => {};

  const requestLocationAndroid = async () => {
    const rationale = {
      title: 'Permissão de Acesso à Localização',
      message: 'Este aplicativo precisa acessar sua localização.',
      buttonNeutral: 'Pergunte-me depois',
      buttonNegative: 'Cancelar',
      buttonPositive: 'OK',
    };

    const permissionGranted = await DeviceFeatures.androidPermissionGranted(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      rationale
    );

    if (permissionGranted) {
      DeviceFeatures.getLocation(handlePosition, handleError);
    } else {
      Alert.alert(ErrorMessages.LOCATION_PERMISSION_DENIED);
    }
  };

  const requestLocationiOS = async () => {
    const authLevel = 'whenInUse';
    const authGranted = await Geolocation.requestAuthorization(authLevel);
    const permissiongranted = authGranted === 'granted';
    if (permissiongranted) {
      DeviceFeatures.getLocation(handlePosition, handleError);
    } else {
      Alert.alert(ErrorMessages.LOCATION_PERMISSION_DENIED);
    }
  };

  useEffect(() => {
    handlePlataforms({
      handleException: () => {},
      handleAndroid: requestLocationAndroid,
      handleIOS: requestLocationiOS,
    });
  }, []);

  return { ...currentLocation };
};

export default useGeoLocation;
