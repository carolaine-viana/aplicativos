import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IWeekFormats, TSupplierTypes } from 'shared/types';
import { getMonthsFilters, getWeekCurrentMonth } from '../servedCustomersUtils';

export const SERVED_CUSTOMERS_REDUCER_NAME = 'servedCustomers';

type TMonthDateType = ReturnType<typeof getMonthsFilters>[0];

const monthsWeeks = getMonthsFilters();

export interface IServedCustomersState {
  selectedWeek: IWeekFormats & { pureDate: string };
  supplierType: TSupplierTypes | 'todos';
  monthsWeeks: TMonthDateType[];
}

export const initialState: IServedCustomersState = {
  selectedWeek: getWeekCurrentMonth(),
  supplierType: 'todos',
  monthsWeeks,
};

const setSelectedW = (
  state: IServedCustomersState,
  action: PayloadAction<IWeekFormats & { pureDate: string }>
) => {
  state.selectedWeek = action.payload;
};

const setSupplier = (
  state: IServedCustomersState,
  action: PayloadAction<IServedCustomersState['supplierType']>
) => {
  state.supplierType = action.payload;
};

const setMonthcWeeks = (
  state: IServedCustomersState,
  action: PayloadAction<{ idx: number; weeks: IServedCustomersState['selectedWeek'][] }>
) => {
  state.monthsWeeks[action.payload.idx].weeks = action.payload.weeks;
};

const incentivesSlice = createSlice({
  name: SERVED_CUSTOMERS_REDUCER_NAME,
  initialState,
  reducers: {
    setSelectedWeek: setSelectedW,
    setSupplierType: setSupplier,
    setMonthcWeeksFilters: setMonthcWeeks,
  },
});

// Action creators are generated for each case reducer function
export const { setSelectedWeek, setSupplierType, setMonthcWeeksFilters } = incentivesSlice.actions;
export default incentivesSlice;
