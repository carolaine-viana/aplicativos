import { useCallback } from 'react';
import { useRedux } from 'shared/hooks';
import { TIncentive } from 'shared/types';
import { setIncentiveType as setType, IIncentivesState } from '../redux/incentivesSlice';

export const useIncentiveType = () => {
  const { dispatch, sliceState } = useRedux<IIncentivesState>('incentives');

  const setIncentiveTypeMemoized = useCallback(
    (incentiveType: TIncentive) => dispatch(setType(incentiveType)),
    [dispatch]
  );

  return {
    intentiveType: sliceState.incentiveType,
    setIncentiveType: setIncentiveTypeMemoized,
  };
};
