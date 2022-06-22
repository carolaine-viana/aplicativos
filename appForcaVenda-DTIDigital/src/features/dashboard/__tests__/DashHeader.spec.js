import React from 'react';
import expect from 'expect';
import { render, waitFor } from '@shared/utils/test-utils';
import DashHeader from '../views/DashHeader';
import DashboardManager from '../services/DashboardManager';

jest.mock('../../../shared/models/User/UserModel', () => {
  return class ModelMock {};
});

jest.mock('../services/DashboardManager');

const mockManagerData = {
  name: 'Marcelo Prata',
};

describe('DashHeader', () => {
  let ManagerMockInstance;
  beforeAll(() => {
    ManagerMockInstance = DashboardManager.mock.instances[0];
    ManagerMockInstance.getUserEarningsBalance = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should be render user profile', async () => {
    ManagerMockInstance.getUserEarningsBalance.mockResolvedValueOnce(mockManagerData);
    jest.spyOn(ManagerMockInstance, 'syncUserEarningsBalance');
    const screen = render(<DashHeader />);
    await waitFor(() => expect(ManagerMockInstance.getUserEarningsBalance).toHaveBeenCalled());
    expect(screen.queryByText('Marcelo Prata!')).not.toBeNull();
  });
});
