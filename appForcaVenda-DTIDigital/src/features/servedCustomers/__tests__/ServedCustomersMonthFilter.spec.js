import React from 'react';
import expect from 'expect';
import '@shared/utils/mock-react-native-third-lib';
import { render, waitFor, fireEvent } from '@shared/utils/test-utils';
import ServedCustomersMonthFilter from '../views/ServedCustomersMonthFilter';
import selectedWeekHooks from '../hooks/useSelectedWeek';
import mothWeekHooks from '../hooks/useMonthWeeks';
import ServedCustomersManager from '../services/ServedCustomersManager';

jest.mock('../views/ServedCustomersWeeksFilter', () => {
  const { View } = require('react-native');
  return () => <View testID="ServedCustomersWeeksFilter" />;
});

jest.mock('../hooks/useSelectedWeek', () => {
  return {
    useSelectedWeek: jest.fn(),
  };
});

jest.mock('../hooks/useMonthWeeks', () => {
  return { useMonthWeeks: jest.fn() };
});

jest.mock('../services/ServedCustomersManager');

describe('Tests ServedCustomersMonthFilter', () => {
  let managerInstance;

  const MOCK_WEEK_DATE_FEV = {
    label: 'Feveiro',
    value: 'fev',
    ptBRFormat: '17/02/2022',
    universalFormat: '2022-02-17',
    pureDate: new Date(2022, 1, 17).toISOString(),
  };
  const MOCK_WEEK_DATE_MAR = {
    label: 'Março',
    value: 'mar',
    ptBRFormat: '17/03/2022',
    universalFormat: '2022-03-17',
    pureDate: new Date(2022, 2, 17).toISOString(),
  };

  beforeAll(() => {
    managerInstance = ServedCustomersManager.mock.instances[0];
    managerInstance.getMonthWeeks = jest.fn();
  });

  beforeEach(() => {
    selectedWeekHooks.useSelectedWeek.mockReturnValue({
      selectedWeek: MOCK_WEEK_DATE_FEV,
    });
    mothWeekHooks.useMonthWeeks.mockReturnValue({
      monthsWeeks: [MOCK_WEEK_DATE_FEV, { ...MOCK_WEEK_DATE_MAR, weeks: [] }],
      setMonthcWeeksFilters: jest.fn(),
    });
  });

  describe('Tests initial render', () => {
    it('should render tag " Semana 17/02/2022"', () => {
      const screen = render(<ServedCustomersMonthFilter />);
      expect(screen.queryByText(`Semana ${MOCK_WEEK_DATE_FEV.ptBRFormat}`)).not.toBeNull();
    });

    it('modal should be closed', async () => {
      const screen = render(<ServedCustomersMonthFilter />);
      const modal = screen.queryByTestId('servedMonthFiltersModal');
      expect(modal.props.visible).toBe(false);
    });

    it('should open modal when click calendar button', async () => {
      const screen = render(<ServedCustomersMonthFilter />);
      const calendarButton = screen.queryByText('FEV / 2022');
      const modal = screen.queryByTestId('servedMonthFiltersModal');
      await fireEvent.press(calendarButton);
      expect(modal.props.visible).toBe(true);
    });

    it('should call managerInstance.getMonthWeeks to get weeks', async () => {
      managerInstance.getMonthWeeks.mockResolvedValueOnce([MOCK_WEEK_DATE_FEV, MOCK_WEEK_DATE_MAR]);
      const screen = render(<ServedCustomersMonthFilter />);
      const calendarButton = screen.queryByText('FEV / 2022');
      await fireEvent.press(calendarButton);

      const marchMonth = screen.queryByTestId('Março');
      expect(marchMonth).not.toBeNull();
      await fireEvent.press(marchMonth);

      await waitFor(() => expect(managerInstance.getMonthWeeks).toHaveBeenCalledWith('202203'));
    });
  });
});
