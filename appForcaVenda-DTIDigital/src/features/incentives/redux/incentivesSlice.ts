import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IIncentive, TIncentive } from 'shared/types';

export const INCENTIVES_REDUCER_NAME = 'incentives';

export interface IIncentivesState {
  selectedIncentive: Partial<IIncentive> | null;
  incentiveType: TIncentive | 'TODOS';
}

export const initialState: IIncentivesState = {
  selectedIncentive: null,
  incentiveType: 'TODOS',
};

const setSelected = (
  state: IIncentivesState,
  action: PayloadAction<Partial<IIncentive> | null>
) => {
  state.selectedIncentive = action.payload;
};

const setType = (state: IIncentivesState, action: PayloadAction<TIncentive>) => {
  state.incentiveType = action.payload;
};

const incentivesSlice = createSlice({
  name: INCENTIVES_REDUCER_NAME,
  initialState,
  reducers: {
    setSelectedIncentive: setSelected,
    setIncentiveType: setType,
  },
});

// Action creators are generated for each case reducer function
export const { setSelectedIncentive, setIncentiveType } = incentivesSlice.actions;
export default incentivesSlice;
