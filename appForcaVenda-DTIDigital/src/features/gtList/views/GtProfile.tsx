import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import { useTheme } from 'styled-components';

import { SearchHeader, CustomStatusBar, ListItemAvatar, Typography } from '@shared/components';
import GTIndicators from 'features/performanceIndicators/views/GTIndicators';
import { joinGTRegions } from '../gtListUtils';
import { Container } from './GTProfileSC';

interface IGtProfileProps {
  route: {
    params: {
      id: number;
      name: string;
      regions: string[];
    };
  };
}

const GtProfile: React.FC<IGtProfileProps> = ({ route }) => {
  const { id, name, regions } = route.params;
  const theme = useTheme();
  const navigation = useNavigation();
  return (
    <>
      <CustomStatusBar backgroundColor={theme.palette.white} barStyle="dark-content" />
      <SearchHeader
        headerProps={{
          title: 'Perfil GT',
        }}
        onClickArrow={() => {
          navigation.goBack();
        }}
      />
      <ScrollView>
        <Container bg="light">
          <ListItemAvatar
            mainText={name}
            renderSecondaryText={() => (
              <Typography variant="overline" color="gray300">
                {joinGTRegions(regions)}
              </Typography>
            )}
          />
          <GTIndicators gtId={id} />
        </Container>
      </ScrollView>
    </>
  );
};

export default GtProfile;
