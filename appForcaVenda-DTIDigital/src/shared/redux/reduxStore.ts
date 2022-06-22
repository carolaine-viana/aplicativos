import { configureStore } from '@reduxjs/toolkit';
import { fooSlice } from '../../features/foo/redux';
import incentivesSlice from '../../features/incentives/redux/incentivesSlice';
import servedCustomersSlice from '../../features/servedCustomers/redux/servedCustomersSlice';
import searchSlice from './search/searchSlice';
import featureFlagsSlice from './featureFlags/featureFlagsSlice';
import bestResultSlice from './bestResult/bestResultSlice';

const reducer = {
  [fooSlice.name]: fooSlice.reducer,
  [incentivesSlice.name]: incentivesSlice.reducer,
  [searchSlice.name]: searchSlice.reducer,
  [featureFlagsSlice.name]: featureFlagsSlice.reducer,
  [bestResultSlice.name]: bestResultSlice.reducer,
  [servedCustomersSlice.name]: servedCustomersSlice.reducer,
};

const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
