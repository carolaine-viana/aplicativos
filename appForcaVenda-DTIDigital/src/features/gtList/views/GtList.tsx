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
import GTListManager from '../services/GTListManager';
import { filterGts, joinGTRegions } from '../gtListUtils';

interface GtListProps {
  gt: IGT;
}

const ITEM_HEIGHT = 100;
const Manager = new GTListManager();

const GtList: React.FC<GtListProps> = () => {
  const [searchText, setSearchText] = useState('');
  const navigation = useNavigation();

  const loadGTs = useCallback(() => Manager.getGTs(), []);

  const { data: GTList, ...promiseStatus } = usePromise<Array<IGT>>(loadGTs);

  const renderItem = ({ name, regions, id }: IGT) => (
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
          navigation.navigate('GtProfile', {
            id,
            regions,
            name,
          })
        }
      />
    </>
  );

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
          title: 'Gts',
        }}
      />
      <FlexCenter bg="light">
        <FallbackWrapper
          {...promiseStatus}
          showEmptyState={promiseStatus.success && (!filteredGTs || isArrayEmpty(filteredGTs))}
          loadingComponent="spinner"
          useOfflineFeedback
          renderContent={() => (
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
          )}
        />
      </FlexCenter>
    </DefaultScreen>
  );
};

export default GtList;
