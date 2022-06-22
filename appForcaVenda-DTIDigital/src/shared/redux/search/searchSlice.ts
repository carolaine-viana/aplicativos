import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const INCENTIVES_REDUCER_NAME = 'search';

export interface ISearchState {
  searchText: string;
  showSearch: boolean;
  searchPlaceholder: string;
}

const initialState: ISearchState = {
  showSearch: false,
  searchText: '',
  searchPlaceholder: 'Buscar..',
};

const initState = (
  state: ISearchState,
  action: PayloadAction<Omit<ISearchState, 'searchText'>>
) => {
  state.searchPlaceholder = action.payload.searchPlaceholder;
  state.showSearch = action.payload.showSearch;
  state.searchText = '';
};
const setText = (state: ISearchState, action: PayloadAction<string>) => {
  state.searchText = action.payload;
};

const showSearch = (state: ISearchState, action: PayloadAction<boolean>) => {
  state.showSearch = action.payload;
};

const setPlaceHolder = (state: ISearchState, action: PayloadAction<string>) => {
  state.searchText = action.payload;
};

const incentivesSlice = createSlice({
  name: INCENTIVES_REDUCER_NAME,
  initialState,
  reducers: {
    setShowSearch: showSearch,
    setSearchText: setText,
    setSearchPlaceHolder: setPlaceHolder,
    setInitialState: initState,
  },
});

// Action creators are generated for each case reducer function
export const { setShowSearch, setSearchText, setSearchPlaceHolder, setInitialState } =
  incentivesSlice.actions;
export default incentivesSlice;
