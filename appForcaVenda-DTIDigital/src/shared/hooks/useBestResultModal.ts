import { useCallback } from 'react';
import { useRedux } from 'shared/hooks';
import {
  setShowBestResult as setModalVisible,
  IDashboardState,
  BEST_RESULT_REDUCER_NAME,
} from '../redux/bestResult/bestResultSlice';

export const useBestResultModal = () => {
  const { dispatch, sliceState } = useRedux<IDashboardState>(BEST_RESULT_REDUCER_NAME);

  const setModalVisibleMemoized = useCallback(
    (bestResultOpened: boolean) => dispatch(setModalVisible(bestResultOpened)),
    [dispatch]
  );

  return {
    bestResultOpened: sliceState.modalBestResultOpened,
    setModalVisible: setModalVisibleMemoized,
  };
};
