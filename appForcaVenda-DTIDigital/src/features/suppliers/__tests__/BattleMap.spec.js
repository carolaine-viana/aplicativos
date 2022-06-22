import React from 'react';
import expect from 'expect';
import { render, waitFor } from '@shared/utils/test-utils';
import BattleMap from '../views/BattleMap';
import SuppliersManagerMock from '../services/SuppliersManager';

jest.mock('../services/SuppliersManager');

describe('Tests BattleMap', () => {
  let ManagerMockInstance;
  beforeAll(() => {
    ManagerMockInstance = SuppliersManagerMock.mock.instances[0];
    ManagerMockInstance.getSuppliersBattleMap = jest.fn();
  });

  it(`should render spinner feedback and then a list of Suppliers with Name and Level`, async () => {
    ManagerMockInstance.getSuppliersBattleMap.mockResolvedValueOnce([
      {
        id: 'XXX',
        name: 'Suplier One',
        level: 'LEVEL I',
      },
      {
        id: 'YYY',
        name: 'Suplier Two',
        level: 'LEVEL I',
      },
    ]);

    const screen = render(<BattleMap />);
    const loading = screen.queryByTestId('feedback-spinner');
    expect(loading).toBeDefined();

    await waitFor(() => expect(ManagerMockInstance.getSuppliersBattleMap).toHaveBeenCalled());

    expect(screen.queryByTestId('feedback-spinner')).toBeNull();
    expect(screen.getByText('Suplier One')).toBeDefined();
    expect(screen.getByText('Suplier Two')).toBeDefined();
  });

  it('should render spinner feedback and then error feedback', async () => {
    ManagerMockInstance.getSuppliersBattleMap.mockImplementationOnce(() => {
      throw new Error('');
    });
    const screen = render(<BattleMap />);
    const loading = screen.queryByTestId('feedback-spinner');
    expect(loading).toBeDefined();

    await waitFor(() => expect(ManagerMockInstance.getSuppliersBattleMap).toHaveBeenCalled());

    expect(screen.queryByTestId('feedback-spinner')).toBeNull();
    expect(screen.getByText(/Ops!/i)).toBeDefined();
    expect(screen.getByText(/Erro inesperado/i)).toBeDefined();
  });
  it('should render spinner feedback and then empty state feedback', async () => {
    ManagerMockInstance.getSuppliersBattleMap.mockImplementationOnce(() => {
      return [];
    });
    const screen = render(<BattleMap />);
    const loading = screen.queryByTestId('feedback-spinner');
    expect(loading).toBeDefined();

    await waitFor(() => expect(ManagerMockInstance.getSuppliersBattleMap).toHaveBeenCalled());
    expect(screen.queryByTestId('feedback-spinner')).toBeNull();
    expect(screen.getByText(/Nenhum fornecedor/i)).toBeDefined();
  });
});
