import { useCallback } from 'react';
import { useRedux } from 'shared/hooks';
import {
  setMonthcWeeksFilters as setWeeks,
  IServedCustomersState,
} from '../redux/servedCustomersSlice';

type TPyload = {
  idx: number;
  weeks: IServedCustomersState['selectedWeek'][];
};
export const useMonthWeeks = () => {
  const { dispatch, sliceState } = useRedux<IServedCustomersState>('servedCustomers');

  const setMonthWeeksMemoized = useCallback(
    (payload: TPyload) =>
      dispatch(
        setWeeks({
          idx: payload.idx,
          weeks: payload.weeks,
        })
      ),
    [dispatch]
  );

  return {
    monthsWeeks: sliceState.monthsWeeks,
    setMonthcWeeksFilters: setMonthWeeksMemoized,
  };
};
