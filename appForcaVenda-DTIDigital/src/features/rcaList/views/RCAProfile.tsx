import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import { useTheme } from 'styled-components';

import { SearchHeader, CustomStatusBar } from '@shared/components';
import { IRcaTerritory } from 'shared/types';
import RcaIndicators from 'features/performanceIndicators/views/RcaIndicators';
import RCACard from 'features/rcaList/views/RCACard';
import { Container } from './RCAProfileSC';

interface IRCAProfileProps {
  route: {
    params: {
      rca: IRcaTerritory;
    };
  };
}

const RCAProfile: React.FC<IRCAProfileProps> = ({ route }) => {
  const { rca } = route.params;
  const theme = useTheme();
  const navigation = useNavigation();
  return (
    <>
      <CustomStatusBar backgroundColor={theme.palette.white} barStyle="dark-content" />
      <SearchHeader
        headerProps={{
          title: 'Perfil RCA',
        }}
        onClickArrow={() => {
          navigation.goBack();
        }}
      />
      <ScrollView>
        <Container bg="light">
          <RCACard rca={rca} testID={rca.name} />
          <RcaIndicators rcaId={rca?.id?.toString()} />
        </Container>
      </ScrollView>
    </>
  );
};

export default RCAProfile;
