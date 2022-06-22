import React, { useEffect, useRef, useState } from 'react';
import MapView, { Region, Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import { StyleSheet } from 'react-native';

import { ICordinates, IMarker } from '../../types';
import { UserMarker, CenterLocationButton } from './MapsSC';
import DefaultIcon from '../DefaultIcon/DefaultIcon';

interface MapsProps {
  region: Region | ICordinates;
  markers?: IMarker<string>[];
  clickemons?: IMarker<string>[];
  renderMarker?: (cordinates: IMarker, idx?: number) => void;
  renderClickemons?: (cordinates: IMarker, idx?: number) => void;
  renderUserMarker?: (currentLatitude: number, currentLongitude: number) => void;
}

const Maps: React.FC<MapsProps> = (props) => {
  let animateMap = useRef<MapView>(null);
  const { markers, clickemons, renderUserMarker, region } = props;
  const { latitudeDelta = 1.015, longitudeDelta = 1.0121 } = region as Region;
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  Geolocation.getCurrentPosition((position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  });

  useEffect(() => {
    goTo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [latitude, longitude]);

  // TODO: TRANSFORMAR USECALLBACK
  const goTo = () => {
    animateMap?.animateToRegion?.(
      {
        latitude: Number(latitude),
        longitude: Number(longitude),
        latitudeDelta,
        longitudeDelta,
      },
      1000
    );
  };

  const userMarker = () => {
    if (renderUserMarker) {
      renderUserMarker(latitude, longitude);
    }
    return (
      <Marker
        coordinate={{
          latitude,
          longitude,
        }}
      >
        <UserMarker />
      </Marker>
    );
  };

  return (
    <>
      <MapView
        ref={(mapView) => {
          animateMap = mapView;
        }}
        style={styles.map}
        initialRegion={{
          ...region,
          latitudeDelta,
          longitudeDelta,
        }}
      >
        {userMarker()}
        {markers?.map((marker, idx) => props.renderMarker?.(marker, idx))}
        {clickemons?.map((clickemon, idx) => props.renderClickemons?.(clickemon, idx))}
      </MapView>

      <CenterLocationButton onPress={() => goTo()} testID="centerLocationButton">
        <DefaultIcon name="crosshair" size={24} color="light" />
      </CenterLocationButton>
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    height: '100%',
    width: '100%',
  },
});

export default Maps;
