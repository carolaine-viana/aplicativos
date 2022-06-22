import React from 'react';
import expect from 'expect';
import { render, waitFor } from '@shared/utils/test-utils';
import TeamList from '../views/TeamList';
import '@shared/utils/jestCustomMatchers';
import TeamListManager from '../services/TeamListManager';

jest.mock('../services/TeamListManager');

jest.mock('styled-components', () => {
 return {
   useTheme: jest.fn().mockReturnValue({
 palette: {
  white: '#ffffff',
     },
  }),
    };
   });

   const mockManagerData = [
    {
      id: '1',
      name: 'RCA 1',
      regions: [],
    },
    {
      id: '2',
      name: 'RCA 2',
      regions: [],
    },
  ];
describe('Tests team screen', () => {
  let managerInstance;

  beforeAll(() => {
    managerInstance = TeamListManager.mock.instances[0];
    managerInstance.getRCA = jest.fn();
  });


  it('should renders team list', async () => {
    managerInstance.getGTRCA.mockImplementationOnce(() => {
      return mockManagerData;
    });
    const screen = render(<TeamList />);
    const loading = screen.queryByTestId('feedback-spinner');

    expect(loading).toBeDefined();
    await waitFor(() => expect(managerInstance.getGTRCA).toHaveBeenCalled());
    expect(screen.queryByText(/RCA 1/i)).not.toBeNull();
    expect(screen.queryByText(/RCA 2/i)).not.toBeNull();
    expect(screen.queryByTestId('feedback-spinner')).toBeNull();
  });

  it('should renders empty feedback', async () => {
    managerInstance.getGTRCA.mockImplementationOnce(() => {
      return mockManagerData;
    });
    const screen = render(<TeamList />);
    const loading = screen.queryByTestId('feedback-spinner');

    expect(loading).toBeDefined();
    await waitFor(() => expect(managerInstance.getGTRCA).toHaveBeenCalled());

    expect(screen.queryByTestId('feedback-spinner')).toBeNull();
  });

  it('should render a header with title Equipe', () => {
    const screen = render(<TeamList />);
    expect(screen.queryByText('Equipe')).not.toBeNull();
  });

  describe('tests on search bar', () => {
    it('should render a search input to filter Equipes', () => {
      const screen = render(<TeamList />);
      expect(screen.getByTestId('searchTextIpt'));
    });
  });

  describe('tests on RCAGT list', () => {
    it('should render feedback de erro, when manager throw an error', async () => {
      managerInstance.getRCA.mockImplementationOnce(() => {
        throw new Error('Error from Manager');
      });
      const screen = render(<TeamList />);
      expect(screen.queryByText(/Inesperado/)).toBeNull();
    });

   
  });
});
