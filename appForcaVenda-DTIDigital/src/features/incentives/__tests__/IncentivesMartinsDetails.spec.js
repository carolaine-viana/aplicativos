// TODO: VERIFICAR TESTES IncentiveMartinsDetails

import React from 'react';
import expect from 'expect';
import '@shared/utils/jestCustomMatchers';
import { render, waitFor, fireEvent } from '@shared/utils/test-utils';
import IncentivesMartinsDetails from '../views/IncentivesMartinsDetails';
import IncentiveManagerMock from '../services/IncentiveManager';
import { mockTransformedIncentiveDetails } from './_incentivesData.mock';

jest.mock('../services/IncentiveManager');

describe('Tests on IncentivesMartinsDetails Component', () => {
  let ManagerIncentiveMockInstance;

  beforeAll(() => {
    ManagerIncentiveMockInstance = IncentiveManagerMock.mock.instances[1];
    ManagerIncentiveMockInstance.getIncentivesMartinsDetails = jest.fn();
  });

  it('should render loading and then incetive details info', async () => {
    ManagerIncentiveMockInstance.getIncentivesMartinsDetails.mockImplementationOnce(
      () => mockTransformedIncentiveDetails
    );

    const screen = render(
      <IncentivesMartinsDetails
        route={{
          params: { incentive: { id: 2870, targetGroup: 'Público alvo', name: 'Positivações' } },
        }}
      />
    );
    const loading = screen.queryByTestId('feedback-spinner');
    expect(loading).toBeDefined();

    await waitFor(() =>
      expect(ManagerIncentiveMockInstance.getIncentivesMartinsDetails).toHaveBeenCalled()
    );
    expect(screen.getByText(/2870/i)).toBeDefined();
    expect(screen.getByText(/Positivações/i)).toBeDefined();
    expect(screen.getByText(/Some description../i)).toBeDefined();
  });
});
