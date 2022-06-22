/* eslint-disable react-native/no-inline-styles */
import React, { useCallback, useMemo, useState } from 'react';
import { FlatList, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  ListItemAvatar,
  Typography,
  DefaultScreen,
  SearchHeader,
  FallbackWrapper,
  FlexCenter,
} from 'shared/components';
import { usePromise } from 'shared/hooks';
import { isArrayEmpty } from 'shared/utils';
import theme from 'shared/constants/theme';
import { IGT } from 'shared/types';
import TeamListManager from 'features/teamList/services/TeamListManager';
import { filterGts, joinGTRegions } from '../../gtList/gtListUtils';
import { ContainerHeader, ContainerCenterText } from './TeamListSC';

interface GtListProps {
  gt: IGT;
}

const ITEM_HEIGHT = 100;
const Manager = new TeamListManager();

const TeamGvGT: React.FC<GtListProps> = ({ route }) => {
  const [searchText, setSearchText] = useState('');
  const navigation = useNavigation();

  const { id, name, regions } = route.params;

  const loadGTs = useCallback(() => Manager.getRCALIST(route.params.id), []);

  const { data: GTList, ...promiseStatus } = usePromise<Array<IGT>>(loadGTs);

  const renderItem = ({ name, regions, id }: IGT) => {
    return (
      <>
        <ListItemAvatar
          mainText={name}
          itemHeight={ITEM_HEIGHT}
          renderSecondaryText={() => (
            <Typography variant="overline" color="gray300">
              {joinGTRegions(regions)}
            </Typography>
          )}
          navigateTo={() =>
            navigation.navigate('RCAProfile', {
              rca: {
                id,
                name,
                territories: [
                  {
                    id: '00',
                    name: regions,
                  },
                ],
              },
            })
          }
        />
      </>
    );
  };

  const filteredGTs = useMemo(() => filterGts(searchText, GTList), [searchText, GTList]);

  const handleCloseSearch = () => {
    setSearchText('');
    Keyboard.dismiss();
  };

  return (
    <DefaultScreen backgroundColor={theme.palette.white} barStyle="dark-content">
      <SearchHeader
        searchProps={{
          onChangeText: (text) => {
            setSearchText(text);
          },
          onClose: handleCloseSearch,
          value: searchText,
          searchPlaceholder: 'Buscar GT',
        }}
        headerProps={{
          title: 'Equipe do Gestor',
        }}
      />
      <FlexCenter bg="light">
        <FallbackWrapper
          {...promiseStatus}
          showEmptyState={promiseStatus.success && (!filteredGTs || isArrayEmpty(filteredGTs))}
          loadingComponent="spinner"
          useOfflineFeedback
          renderContent={() => (
            <>
              <ContainerHeader>
                <ListItemAvatar
                  mainText={route.params.name}
                  itemHeight={ITEM_HEIGHT}
                  renderSecondaryText={() => (
                    <Typography variant="overline" color="gray300">
                      {joinGTRegions(route.params.regions)}
                    </Typography>
                  )}
                  navigateTo={() => navigation.navigate('GtProfile', { id, name, regions })}
                />
              </ContainerHeader>

              <ContainerCenterText>
                <Typography color="gray900" size={18} bold>
                  Representantes
                </Typography>
              </ContainerCenterText>

              <FlatList
                contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 24 }}
                showsVerticalScrollIndicator={false}
                data={filteredGTs}
                renderItem={({ item }) => renderItem(item)}
                keyExtractor={(item) => `${item.id}`}
                initialNumToRender={6}
                getItemLayout={(_, index) => ({
                  length: ITEM_HEIGHT,
                  offset: ITEM_HEIGHT * index,
                  index,
                })}
                maxToRenderPerBatch={10}
              />
            </>
          )}
        />
      </FlexCenter>
    </DefaultScreen>
  );
};

export default TeamGvGT;
