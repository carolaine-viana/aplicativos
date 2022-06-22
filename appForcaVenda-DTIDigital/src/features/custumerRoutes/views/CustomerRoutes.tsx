import React, { useState } from 'react';
import { Marker } from 'react-native-maps';
import { Alert, Modal, Image } from 'react-native';
import withObservables from '@nozbe/with-observables';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import { Maps, Typography, FlexBox, FlexEnd, ModalPopUp } from '@shared/components';
import { useGeoLocation, useNavigationFocus } from '@shared/hooks';
import { IMarker, IVisitCustomer, IClickemonReadDto } from '@shared/types';
import { isValidCordinates, mapCordinatesToMarker } from '@shared/utils/generalUtils';
import { isArrayEmpty } from 'shared/utils';
import database from '@shared/base/db/DataBase';

import pinLocationImg from '@assets/images/pin.png';
import * as asyncStorage from '@shared/utils/asyncStorage';
import { CustomerRoutesManager } from '../service/CustomerRoutesManager';
import {
  Container,
  FooterClickemons,
  ClickemonsBadge,
  ClickemonMarker,
  CarouselItem,
  CarouselText,
} from './CustomerRoutesSC';
import CustomerDetails from './CustomerDetails';
import { filterPendingVisits, carouselItens } from '../customerRoutesUtils';

interface CustomerRoutesProps {
  clickemons: IClickemonReadDto[];
}

const manager = new CustomerRoutesManager();

const enhance = withObservables(['clickemons'], () => ({
  clickemons: database.collections.get('clickemons').query(),
}));

const Clickemons: React.FC<CustomerRoutesProps> = ({ clickemons }) => {
  const [showCustomerDetails, setShowCustomerDetails] = useState(false);
  const [isClickemon, setIsClickemon] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState<IMarker | null>(null);
  const { currentLatitude, currentLongitude } = useGeoLocation();
  const [visits, setVisits] = useState<IVisitCustomer[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [carouselIndexSelected, setCarouselIndexSelected] = useState(0);

  const markers = mapCordinatesToMarker(visits, 'customerId');
  const clickemonsMarkes = mapCordinatesToMarker(clickemons, 'id');

  async function loadFirst() {
    const visualizedStorage = await asyncStorage.getFirstTutoMap();
    if (visualizedStorage !== 'visualized') {
      setModalVisible(true);
    }
  }

  const handleCloseModal = async () => {
    setModalVisible(false);
    await asyncStorage.getFirstTutoMap('visualized');
  };

  useNavigationFocus({
    callback: () => {
      loadVisits();
      loadClickemons();
      loadFirst();
    },
    dependencies: [currentLatitude, currentLongitude],
  });

  const handleClickCustomerPin = (marker: IMarker) => {
    if (marker) {
      setSelectedMarker(marker);
      setShowCustomerDetails(true);
    }
  };

  const loadVisits = async () => {
    try {
      const visitsCustomers = await manager.getCustomerRoutes();
      const pendingVisits = filterPendingVisits(visitsCustomers);
      setVisits(pendingVisits);
    } catch {
      Alert.alert('Ocorreu um problema', 'Não foi possível carregar todos os dados');
    }
  };

  const loadClickemons = async () => {
    try {
      if (isValidCordinates(currentLatitude, currentLongitude)) {
        await manager.syncClickemons(currentLatitude, currentLongitude, 250000);
      }
    } catch (err) {
      Alert.alert('Deu ruim');
    }
  };

  const handleClickClickemon = (marker: IMarker) => {
    if (marker) {
      setIsClickemon(true);
      setSelectedMarker(marker);
      setShowCustomerDetails(true);
    }
  };

  const handleClick = (marker: IMarker, clickemon = false) => {
    if (clickemon) {
      handleClickClickemon(marker);
    } else {
      handleClickCustomerPin(marker);
    }
  };

  const renderMarker = (marker: IMarker<string>, idx: number, clickemon = false) => {
    const { latitude, longitude } = marker;
    return (
      <Marker
        testID={`marker-${latitude}-${longitude}`}
        key={`${idx}-${latitude}-${longitude}`}
        coordinate={{
          latitude,
          longitude,
        }}
        onPress={() => handleClick(marker, clickemon)}
      >
        {clickemon ? <ClickemonMarker color="green600" /> : <Image source={pinLocationImg} />}
      </Marker>
    );
  };

  return (
    <>
      <Container testID="customerRoutescontainer">
        <FlexBox testID="customerRoutesMaps">
          <Maps
            region={{ latitude: currentLatitude, longitude: currentLongitude }}
            markers={markers}
            renderMarker={(marker: IMarker, idx: number) => renderMarker(marker, idx)}
            clickemons={clickemonsMarkes}
            renderClickemons={(marker: IMarker, idx: number) => renderMarker(marker, idx, true)}
          />
        </FlexBox>
        <FooterClickemons testID="footer">
          <FlexEnd>
            <ClickemonsBadge testID="clickemonBadge" />
            <Typography variant="overline" bold>
              Clickemons:
            </Typography>

            <Typography testID="customerAmount" color="success" variant="overlineM" bold>
              {` ${isArrayEmpty(clickemons) ? '-' : clickemons.length}`}
            </Typography>
          </FlexEnd>
        </FooterClickemons>
      </Container>
      <Modal animationType="slide" transparent visible={showCustomerDetails}>
        {showCustomerDetails && (
          <CustomerDetails
            selectedMarker={selectedMarker}
            renderMarker={(params, idx) => renderMarker(params, idx)}
            closeModal={() => setShowCustomerDetails(false)}
            isClickemon={isClickemon}
          />
        )}
      </Modal>
      {modalVisible && (
        <ModalPopUp visible={modalVisible} onCloseModal={handleCloseModal}>
          <Carousel
            data={carouselItens}
            renderItem={({ item }) => (
              <CarouselItem>
                <Image source={item.image} />
                <CarouselText variant="body" color="gray400">
                  {item.text}
                </CarouselText>
              </CarouselItem>
            )}
            itemWidth={320}
            sliderWidth={320}
            onSnapToItem={(index) => setCarouselIndexSelected(index)}
          />
          <Pagination dotsLength={carouselItens.length} activeDotIndex={carouselIndexSelected} />
        </ModalPopUp>
      )}
    </>
  );
};

const CustomerRoutes = enhance(Clickemons);
export default CustomerRoutes;
