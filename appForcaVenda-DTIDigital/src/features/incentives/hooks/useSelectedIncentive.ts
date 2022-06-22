import { useCallback } from 'react';
import { useRedux } from 'shared/hooks';
import { IIncentive } from 'shared/types';
import { setSelectedIncentive as setIncentive, IIncentivesState } from '../redux/incentivesSlice';

export const useSelectedIncentive = () => {
  const { dispatch, sliceState } = useRedux<IIncentivesState>('incentives');

  const setIncentiveMemoized = useCallback(
    (incentive: Partial<IIncentive> | null) => dispatch(setIncentive(incentive)),
    [dispatch]
  );

  return {
    selectedIncentive: sliceState.selectedIncentive,
    setSelectedIncentive: setIncentiveMemoized,
  };
};
