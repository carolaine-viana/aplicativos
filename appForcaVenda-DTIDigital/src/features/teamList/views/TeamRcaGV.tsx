import React, { useState, useMemo, useCallback } from 'react';
import { VirtualizedList } from 'react-native';
import { useTheme } from 'styled-components';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import {
  FlexCenter,
  SearchHeader,
  FallbackWrapper,
  CustomStatusBar,
  Typography,
  ListItemAvatar,
} from '@shared/components';
import { isArrayEmpty } from '@shared/utils';
import { useNetInfo } from '@react-native-community/netinfo';
import { usePromise } from 'shared/hooks';
import { IRcaTerritory } from '@shared/types';
import { joinGTRegions } from 'features/gtList/gtListUtils';
import RCACard from '../../rcaList/views/RCACard';
import { RCA_CARD_HIGHT, ListContainer } from '../../rcaList/views/RCAsListSC';
import { filterRcasWithTerritories } from '../../rcaList/rcasListUtils';
import TeamListManager from '../services/TeamListManager';
import { ContainerCenterText, ContainerHeader } from './TeamListSC';

const rcaManager = new TeamListManager();
const ITEM_HEIGHT = 100;

const TeamRcaGV: React.FC = ({ route }) => {
  const theme = useTheme();
  const screenIsFocused = useIsFocused();
  const [textFilter, setTextFilter] = useState('');
  const { isConnected } = useNetInfo();
  const navigation = useNavigation();

  const loadRcasPromise = useCallback(() => {
    if (isConnected && screenIsFocused) {
      return rcaManager.getRCALIST(route.params.territoryManagerId);
    }
  }, [isConnected, screenIsFocused]);

  const { data: rcaList, ...promiseStatus } =
    usePromise<IRcaTerritory[] | undefined>(loadRcasPromise);

  const renderItem = (rca: IRcaTerritory) => {
    if (rca?.name) {
      return <RCACard key={`${rca.name}-${rca.id}`} rca={rca} showNavigation />;
    }
    return null;
  };

  const getItem = (data: Array<IRcaTerritory>, index: number) => ({
    ...data[index],
  });

  const filteredRcasList = useMemo(
    () => filterRcasWithTerritories(rcaList, textFilter),
    [textFilter, rcaList]
  );

  const renderList = () => (
    <VirtualizedList
      showsVerticalScrollIndicator={false}
      data={filteredRcasList}
      keyExtractor={(item) => item?.id?.toString()}
      renderItem={({ item }) => renderItem(item)}
      initialNumToRender={8}
      getItemCount={() => rcaList?.length || 0}
      getItem={getItem}
      getItemLayout={(_, index) => ({
        length: RCA_CARD_HIGHT,
        offset: RCA_CARD_HIGHT * index,
        index,
      })}
    />
  );

  const handleOnClose = () => {
    setTextFilter('');
  };

  const shouldShowEmptyComponent =
    promiseStatus.done && isArrayEmpty<IRcaTerritory>(filteredRcasList);

  return (
    <>
      <CustomStatusBar backgroundColor={theme.palette.white} barStyle="dark-content" />

      <SearchHeader
        searchProps={{
          onChangeText: (text: string) => {
            setTextFilter(text);
          },
          onClose: handleOnClose,
          value: textFilter,
        }}
        headerProps={{
          title: 'Equipe do Gestor',
        }}
      />

      <ContainerHeader>
        <ListItemAvatar
          mainText={route.params.territoryManagerName}
          itemHeight={ITEM_HEIGHT}
          renderSecondaryText={() => (
            <Typography variant="overline" color="gray300">
              {joinGTRegions(route.params.regions)}
            </Typography>
          )}
        />
      </ContainerHeader>

      <FlexCenter bg="light">
        <ContainerCenterText>
          <Typography color="gray900" size={18} bold>
            Representantes
          </Typography>
        </ContainerCenterText>

        <ListContainer testID="rcaList">
          <FallbackWrapper
            {...promiseStatus}
            loadingComponent="spinner"
            showEmptyState={shouldShowEmptyComponent}
            renderContent={renderList}
          />
        </ListContainer>
      </FlexCenter>
    </>
  );
};

export default TeamRcaGV;
