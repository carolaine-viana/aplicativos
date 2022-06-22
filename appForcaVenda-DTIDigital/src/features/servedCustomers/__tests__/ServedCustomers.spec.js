// TODO: INCLUIR ESTE TESTE QUANDO TIVER FOCO E CORINGA(PROX SPRINT)
import React from 'react';
import expect from 'expect';
import { render } from '@shared/utils/test-utils';
import ServedCustomers from '../../servedCustomers/views/ServedCustomers';
import * as incentiveHooks from '../../incentives/hooks/useIncentiveType';

jest.mock('../../../shared/hooks/useRedux');
jest.mock('../../incentives/hooks/useIncentiveType', () => ({
  useIncentiveType: jest.fn(),
}));

jest.mock('styled-components', () => {
  return {
    useTheme: jest.fn().mockReturnValue({
      palette: {
        white: '#ffffff',
      },
    }),
  };
});

// TODO: No used anymore
describe.skip('TODO: Tests ServedCustomers', () => {
  it('should be render Supliers correctly', () => {
    const mockSetIncentiveTypeFunc = jest.fn();

    incentiveHooks.useIncentiveType.mockReturnValue({
      intentiveType: 'TODOS',
      setIncentiveType: mockSetIncentiveTypeFunc,
    });

    const { toJSON } = render(<ServedCustomers />);
    expect(toJSON()).toMatchSnapshot();
  });
});
