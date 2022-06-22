import { useCallback } from 'react';
import * as searchSlice from 'shared/redux/search/searchSlice';
import { useRedux } from './useRedux';

export const useSearch = () => {
  const { sliceState: searchState, dispatch } = useRedux<searchSlice.ISearchState>('search');

  const setSearchInitialState = useCallback(
    (show: boolean, placeholder: string = 'Buscar') =>
      dispatch(
        searchSlice.setInitialState({
          showSearch: show,
          searchPlaceholder: placeholder,
        })
      ),
    [dispatch]
  );
  const setShowSearch = useCallback(
    (showSearch: boolean) => dispatch(searchSlice.setShowSearch(showSearch)),
    [dispatch]
  );

  const setSearchText = useCallback(
    (text: string) => dispatch(searchSlice.setSearchText(text)),
    [dispatch]
  );

  const setSearchPlaceHolder = useCallback(
    (placeholder: string) => dispatch(searchSlice.setSearchPlaceHolder(placeholder)),
    [dispatch]
  );

  return {
    searchState,
    setShowSearch,
    setSearchText,
    setSearchPlaceHolder,
    setSearchInitialState,
  };
};
