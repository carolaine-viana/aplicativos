import React from 'react';
import expect from 'expect';
import '@shared/utils/jestCustomMatchers';
import '@shared/utils/mock-react-native-third-lib';
import { render, waitFor, fireEvent } from '@shared/utils/test-utils';
import IncentivesMartinsPerformanceWildCard from '../views/IncentivesMartinsPerformanceWildCard';
import IncentiveManagerMock from '../services/IncentiveManager';

jest.mock('../../../shared/components/MonthSelect/MonthSelect', () => {
  const { View } = require('react-native');
  return () => <View testID="MonthSelect"></View>;
});

jest.mock('../services/IncentiveManager');

describe('Tests IncentivesMartinsPerformanceWildCard', () => {
  let ManagerIncentiveMockInstance;

  beforeAll(() => {
    ManagerIncentiveMockInstance = IncentiveManagerMock.mock.instances[0];
    ManagerIncentiveMockInstance.getSuppliersIndicators = jest.fn();
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

  describe('Testes when MONTH tab is selected', () => {
    beforeEach(() => {
      ManagerIncentiveMockInstance.getSuppliersIndicators.mockResolvedValueOnce({
        weeks: MOCK_SUPPLIERS_INDICATORS_WEEKS,
        month: MOCK_SUPPLIERS_INDICATORS_MONTH,
      });
    });

    it('should month be selected', async () => {
      const screen = render(<IncentivesMartinsPerformanceWildCard />);
      const monthText = screen.getByText('Mês');

      await waitFor(() =>
        expect(ManagerIncentiveMockInstance.getSuppliersIndicators).toHaveBeenCalled()
      );

      expect(monthText.props.style).toContainObject({
        color: '#fff',
      });
    });

    it('should render MONTH data from manager', async () => {
      const expectedWildcardSuppliersQuantity =
        MOCK_SUPPLIERS_INDICATORS_MONTH.wildcardSuppliersCustomersResult[0]
          .wildcardSuppliersQuantity;
      const screen = render(<IncentivesMartinsPerformanceWildCard />);
      await waitFor(() =>
        expect(ManagerIncentiveMockInstance.getSuppliersIndicators).toHaveBeenCalled()
      );

      expect(screen.queryByText('Clientes FOCO')).not.toBeNull();
      expect(screen.queryByText('22')).not.toBeNull();

      expect(screen.queryByText('Clientes CORINGA')).not.toBeNull();
      expect(screen.queryByText('33')).not.toBeNull();

      expect(
        screen.queryByText(`Clientes Atendidos C/${expectedWildcardSuppliersQuantity} CORINGA`)
      ).not.toBeNull();
      expect(screen.queryByText('33')).not.toBeNull();
      expect(screen.queryByText('55')).not.toBeNull();

      expect(screen.queryByText('Acumulado previsto')).not.toBeNull();
      expect(screen.queryByText(/66,00/)).not.toBeNull();
    });
  });

  describe('Testes when WEEK tab is selected', () => {
    beforeEach(() => {
      ManagerIncentiveMockInstance.getSuppliersIndicators.mockResolvedValueOnce({
        weeks: MOCK_SUPPLIERS_INDICATORS_WEEKS,
        month: MOCK_SUPPLIERS_INDICATORS_MONTH,
      });
    });
    it('should WEEK be selected', async () => {
      const screen = render(<IncentivesMartinsPerformanceWildCard />);

      await waitFor(() =>
        expect(ManagerIncentiveMockInstance.getSuppliersIndicators).toHaveBeenCalled()
      );

      const weekText = screen.getByText('Semana');
      await fireEvent.press(weekText);

      expect(weekText.props.style).toContainObject({
        color: '#fff',
      });
    });
    it('should render WEEKS data from manager', async () => {
      const screen = render(<IncentivesMartinsPerformanceWildCard />);

      await waitFor(() =>
        expect(ManagerIncentiveMockInstance.getSuppliersIndicators).toHaveBeenCalled()
      );

      const weekText = screen.getByText('Semana');
      await fireEvent.press(weekText);

      expect(screen.queryByText('01/01/2022')).not.toBeNull();
      expect(screen.queryByText('08/01/2022')).not.toBeNull();
      expect(screen.queryAllByText('Clientes FOCO')).toHaveLength(2);
      expect(screen.queryAllByText('Clientes FOCO')).toHaveLength(2);
      expect(screen.queryAllByText('Clientes CORINGA')).toHaveLength(2);
      expect(screen.queryAllByText(/Clientes Atendidos/i)).toHaveLength(2);
      expect(screen.queryAllByText('Acumulado previsto')).toHaveLength(2);

      const firstWeek = render(screen.getByTestId('01/01/2022').props.children);
      expect(firstWeek.queryAllByText('Clientes FOCO')).toHaveLength(1);
    });

    it('should only first week data', async () => {
      const screen = render(<IncentivesMartinsPerformanceWildCard />);

      await waitFor(() =>
        expect(ManagerIncentiveMockInstance.getSuppliersIndicators).toHaveBeenCalled()
      );

      const weekText = screen.getByText('Semana');
      await fireEvent.press(weekText);

      const firstWeek = render(screen.getByTestId('01/01/2022').props.children);
      expect(firstWeek.queryAllByText('Clientes FOCO')).toHaveLength(1);
      expect(firstWeek.queryAllByText('11')).toHaveLength(1);
      expect(firstWeek.queryByText('22')).toBeNull();
    });

    it('should only second week data', async () => {
      const screen = render(<IncentivesMartinsPerformanceWildCard />);

      await waitFor(() =>
        expect(ManagerIncentiveMockInstance.getSuppliersIndicators).toHaveBeenCalled()
      );

      const weekText = screen.getByText('Semana');
      await fireEvent.press(weekText);

      const secondWeek = render(screen.getByTestId('08/01/2022').props.children);
      expect(secondWeek.queryAllByText('Clientes FOCO')).toHaveLength(1);
      expect(secondWeek.queryAllByText('22')).toHaveLength(1);
      expect(secondWeek.queryByText('11')).toBeNull();
    });
  });
});

const MOCK_SUPPLIERS_INDICATORS_WEEKS = [
  {
    week: '01/01/2022',
    id: '1',
    focusSuppliersTotalCustomersResult: 11,
    wildcardSuppliersTotalCustomersResult: 2,
    wildcardSuppliersCustomersResult: [
      {
        wildcardSuppliersQuantity: 3,
        customersQuantity: 4,
      },
    ],
    earnedValue: 5,
  },
  {
    week: '08/01/2022',
    id: '2',
    focusSuppliersTotalCustomersResult: 22,
    wildcardSuppliersTotalCustomersResult: 2,
    wildcardSuppliersCustomersResult: [
      {
        wildcardSuppliersQuantity: 3,
        customersQuantity: 4,
      },
    ],
    earnedValue: 5,
  },
];

const MOCK_SUPPLIERS_INDICATORS_MONTH = {
  id: '1-id-month',
  focusSuppliersTotalCustomersResult: 22,
  wildcardSuppliersTotalCustomersResult: 33,
  wildcardSuppliersCustomersResult: [
    {
      wildcardSuppliersQuantity: 44,
      customersQuantity: 55,
    },
  ],
  earnedValue: 66,
};
