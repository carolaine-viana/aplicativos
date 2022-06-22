import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TFeatureFlags } from 'shared/types';

export const FEATURE_FLAGS_REDUCER_NAME = 'featureFlags';

export interface IFeatrueFlagsState {
  flags: TFeatureFlags[];
}

const initialState: IFeatrueFlagsState = {
  flags: [],
};

const setFlags = (state: IFeatrueFlagsState, action: PayloadAction<TFeatureFlags[]>) => {
  state.flags = action.payload;
};

const incentivesSlice = createSlice({
  name: FEATURE_FLAGS_REDUCER_NAME,
  initialState,
  reducers: {
    setFeatureFlags: setFlags,
  },
});

// Action creators are generated for each case reducer function
export const { setFeatureFlags } = incentivesSlice.actions;
export default incentivesSlice;
