import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const BEST_RESULT_REDUCER_NAME = 'bestResult';

export interface IBestResultState {
  modalBestResultOpened: boolean;
}

const initialState: IBestResultState = {
  modalBestResultOpened: false,
};

const setModalVisible = (state: IBestResultState, action: PayloadAction<boolean>) => {
  state.modalBestResultOpened = action.payload;
};

const bestResultSlice = createSlice({
  name: BEST_RESULT_REDUCER_NAME,
  initialState,
  reducers: {
    setShowBestResult: setModalVisible,
  },
});

// Action creators are generated for each case reducer function
export const { setShowBestResult } = bestResultSlice.actions;
export default bestResultSlice;
