import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FlatList, Image } from 'react-native';
import { useIsFocused, useRoute, getFocusedRouteNameFromRoute } from '@react-navigation/native';

import comingSonImg from '@assets/images/comingson.png';
import {
  IIncentive,
  KnownIncentives,
  RoutesNames,
  IIncentiveMartins,
  TOption,
  TIncentive,
} from '@shared/types';
import { FallbackWrapper, DefaultIcon } from '@shared/components';
import { usePromise, useSearch } from '@shared/hooks';
import { ButtonToTop } from '@shared/components/MonthSelect/MonthSelectSC';
import RoleWrapper from '@shared/components/RoleWrapper/RoleWrapper';

import { isArrayEmpty } from '@shared/utils';
import IncentiveConsult from './IncentiveConsult';
import IncentivesMartins from './IncentiveMartins';
import IncentiveSelect from './IncentiveSelect';
import { useIncentiveType } from '../hooks/useIncentiveType';
import IncentiveManager from '../services/IncentiveManager';
import { Container } from './IncentiveConsultSC';
import { EmptyWrapper } from './IncentivesSC';
import { getData } from '../incentivesUtils';

interface IncentivesProps {}

const Manager = new IncentiveManager();

const Incentives: React.FC<IncentivesProps> = () => {
  const isFocused = useIsFocused();

  const [loadingFilter, setLoadingFilter] = useState(false);

  const { intentiveType, setIncentiveType } = useIncentiveType();
  const { searchState } = useSearch();

  const [contentVerticalOffset, setContentVerticalOffset] = useState(0);
  const CONTENT_LIMIT = 300;

  const flatListRef = useRef<FlatList>(null);

  const route = useRoute();
  const routeName = getFocusedRouteNameFromRoute(route);

  useEffect(() => {
    setLoadingFilter(false);
  }, [intentiveType]);

  const loadAllIncentives = useCallback(() => {
    if (isFocused) {
      return Manager.getAllIncentives();
    }
    return null;
  }, [isFocused]);

  const { data, ...promiseStatus } = usePromise(loadAllIncentives);

  function handleScrollToTop() {
    flatListRef?.current?.scrollToOffset({ offset: 0 });
  }

  const shoudRenderFilter =
    routeName !== RoutesNames.INCENTIVEDETAILSTABS &&
    routeName !== RoutesNames.INCENTIVESMARTINSTABS;

  const onlySuppliers = intentiveType === KnownIncentives.INCENTIVE_SUPPLIER;
  const onlyMartins = intentiveType === KnownIncentives.INCENTIVE_MARTINS;

  const onSelect = (o: TOption) => {
    setLoadingFilter(true);
    setIncentiveType(o.value as TIncentive);
  };

  const renderItem = (
    item: ({ type: string } & IIncentive) | ({ type: string } & IIncentiveMartins)
  ) => {
    if (item.type === 'supplier') {
      return <IncentiveConsult incentive={item as IIncentive} />;
    }
    if (item.type === 'martins') {
      return <IncentivesMartins incentive={item as IIncentiveMartins} />;
    }

    return null;
  };

  return (
    <>
      {shoudRenderFilter && (
        <RoleWrapper
          renderRCAContent={() => (
            <IncentiveSelect onSelect={onSelect} intentiveType={intentiveType} />
          )}
        />
      )}
      <Container>
        <FallbackWrapper
          {...promiseStatus}
          loading={promiseStatus.loading || loadingFilter}
          loadingComponent="spinner"
          showEmptyState={
            !promiseStatus.loading &&
            !loadingFilter &&
            onlyMartins &&
            isArrayEmpty(data?.classifiedIncentivesMartins)
          }
          renderEmptyState={() => (
            <EmptyWrapper>
              <Image source={comingSonImg} />
            </EmptyWrapper>
          )}
          renderContent={() => {
            const dataRender = getData(
              data,
              searchState.searchText,
              loadingFilter,
              onlySuppliers,
              onlyMartins
            );
            return (
              <FlatList
                testID="incentives-list"
                ref={flatListRef}
                showsVerticalScrollIndicator={false}
                data={dataRender}
                renderItem={({ item }) => renderItem(item)}
                keyExtractor={(item, index) => `${item.id}-${index}`}
                initialNumToRender={3}
                maxToRenderPerBatch={6}
                onScroll={(event) => {
                  setContentVerticalOffset(event.nativeEvent.contentOffset.y);
                }}
              />
            );
          }}
        />
        {contentVerticalOffset > CONTENT_LIMIT && (
          <ButtonToTop onPress={handleScrollToTop}>
            <DefaultIcon name="arrow-up" size={24} color="light" />
          </ButtonToTop>
        )}
      </Container>
    </>
  );
};

export default Incentives;
