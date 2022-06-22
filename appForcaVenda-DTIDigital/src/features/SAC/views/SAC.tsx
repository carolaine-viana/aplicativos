import React from 'react';

import { DefaultScreen, SearchHeader, CardIcon, FallbackWrapper } from 'shared/components';
import { useNavigation } from '@react-navigation/native';
import { RoutesNames } from 'shared/types';
import { ContainerCards, Container } from './SACSC';

interface SACProps {}

const SAC: React.FC<SACProps> = () => {
  const navigation = useNavigation();

  const handleOccurrence = () => {
    navigation.navigate({
      name: RoutesNames.CUSTOMERSLIST,
      params: { fromSAC: true, isOccurrence: true },
    });
  };

  const handleHistory = () => {
    navigation.navigate({
      name: RoutesNames.CUSTOMERSLIST,
      params: { fromSAC: true, isOccurrence: false, isHistory: true },
    });
  };

  return (
    <DefaultScreen statusBarColor="blue50">
      <SearchHeader
        headerProps={{ title: 'SAC' }}
        onClickArrow={() => {
          navigation.goBack();
        }}
      />
      <FallbackWrapper
        loadingComponent="spinner"
        loading={false}
        success
        renderContent={() => (
          <Container>
            <ContainerCards>
              <CardIcon
                testID="occurrence"
                innerColor="default"
                outerColor="blue50"
                iconName="settings"
                label="Criar ocorrência"
                action={handleOccurrence}
              />
              <CardIcon
                testID="history"
                iconName="package"
                label="Histórico"
                action={handleHistory}
              />
            </ContainerCards>
          </Container>
        )}
      />
    </DefaultScreen>
  );
};

export default SAC;
