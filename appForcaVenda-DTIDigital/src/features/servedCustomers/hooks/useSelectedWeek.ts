import { useCallback } from 'react';
import { useRedux } from 'shared/hooks';
import { IWeekFormats } from 'shared/types';
import { setSelectedWeek as setWeek, IServedCustomersState } from '../redux/servedCustomersSlice';

export const useSelectedWeek = () => {
  const { dispatch, sliceState } = useRedux<IServedCustomersState>('servedCustomers');

  const setSelectedWeekTypeMemoized = useCallback(
    (week: IWeekFormats & { pureDate: string }) => dispatch(setWeek(week)),
    [dispatch]
  );

  return {
    selectedWeek: sliceState.selectedWeek,
    setSelectedWeek: setSelectedWeekTypeMemoized,
  };
};
