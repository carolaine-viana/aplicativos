import React, { useState, useMemo, useCallback } from 'react';
import { VirtualizedList } from 'react-native';
import { useTheme } from 'styled-components';
import { useIsFocused } from '@react-navigation/native';
import { FlexCenter, SearchHeader, FallbackWrapper, CustomStatusBar } from '@shared/components';
import { isArrayEmpty } from '@shared/utils';
import { useNetInfo } from '@react-native-community/netinfo';
import { usePromise } from 'shared/hooks';
import { IRcaTerritory } from '@shared/types';
import RCACard from './RCACard';
import { RCA_CARD_HIGHT, ListContainer } from './RCAsListSC';
import RCAManager from '../services/RCAListManager';
import { filterRcasWithTerritories } from '../rcasListUtils';

const rcaManager = new RCAManager();

const RCAsList: React.FC = () => {
  const theme = useTheme();
  const screenIsFocused = useIsFocused();

  const [textFilter, setTextFilter] = useState('');

  const { isConnected } = useNetInfo();

  const loadRcasPromise = useCallback(() => {
    if (isConnected && screenIsFocused) {
      return rcaManager.getRcasGt();
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
          title: 'RCAs',
        }}
      />
      <FlexCenter bg="light">
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

export default RCAsList;
