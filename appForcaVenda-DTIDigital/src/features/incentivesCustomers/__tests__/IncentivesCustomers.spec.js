import React from 'react';
import expect from 'expect';
import { render, waitFor } from '@shared/utils/test-utils';
import IncentivesCustomers from '../views/IncentivesCustomers';
import IncentivesCustomersManager from '../services/IncentivesCustomersManager';
import { INCENTIVES_CUSTOMERS_MANAGER_DATA } from './responses.mock';
import { useKeyBoardOpen } from '../../../shared/hooks/useKeyBoardOpen';

jest.mock('@react-navigation/native', () => ({
  useIsFocused: jest.fn().mockReturnValue(true),
}));

jest.mock('../../../shared/hooks/useKeyBoardOpen', () => {
  return {
    useKeyBoardOpen: jest.fn(),
  };
});

jest.mock('../services/IncentivesCustomersManager');

jest.mock('../../../features/incentives/hooks/useSelectedIncentive', () => {
  return {
    useSelectedIncentive: jest.fn().mockReturnValue({
      selectedIncentive: { id: '2740' },
    }),
  };
});

describe('Tests <IncentivesCustomers />', () => {
  let ManagerInstance = IncentivesCustomersManager.mock.instances[0];

  beforeAll(() => {
    ManagerInstance.getIncentivesCustomers = jest.fn();
    ManagerInstance.getIncentivesCustomersBusiness = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should render incentive customers', async () => {
    useKeyBoardOpen.mockResolvedValue({
      isKeyBoardOpen: true,
    });
    ManagerInstance.getIncentivesCustomers.mockResolvedValueOnce(INCENTIVES_CUSTOMERS_MANAGER_DATA);

    const screen = render(<IncentivesCustomers />);
    await waitFor(() => expect(ManagerInstance.getIncentivesCustomers).toHaveBeenCalled());

    expect(screen.queryByText(/ESTADO/i)).not.toBeNull();
    expect(screen.getByText('state')).not.toBeNull();
    expect(screen.queryByText(/SEGMENTO/i)).not.toBeNull();
    expect(screen.getByText('segment')).not.toBeNull();
    expect(screen.queryByText(/UNID DE NEGÓCIO/i)).not.toBeNull();
    expect(screen.getByText('unit')).not.toBeNull();
  });
});
