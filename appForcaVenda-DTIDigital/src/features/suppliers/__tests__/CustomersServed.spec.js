import React from 'react';
import expect from 'expect';
import { render, waitFor } from '@shared/utils/test-utils';
import CustomersServed from '../views/CustomersServed';
import SuppliersManagerMock from '../services/SuppliersManager';

jest.mock('../services/SuppliersManager');

// TODO: VERIFICAR SE COMPONENTE CustomersServed.tsx ESTÁ SENDO USADO
describe.skip('Tests CustomersServed', () => {
  let ManagerMockInstance;
  beforeAll(() => {
    ManagerMockInstance = SuppliersManagerMock.mock.instances[0];
    ManagerMockInstance.getCustomersServed = jest.fn();
  });

  it(`should render spinner feedback and then a list of CustomersServed`, async () => {
    ManagerMockInstance.getCustomersServed.mockResolvedValueOnce([
      {
        id: 'YYYY',
        tradeName: 'NOME FANTASIA NÃO ENCONTRADO',
        companyName: 'FUTURA D BEBIDAS E ALIMENTOS EIRELI',
        cnpj: '00.000.000/0000-00 0000000',
        businessUnit: 'VAREJO ALIMENTAR',

        focusSuppliers: [
          {
            id: 'ZZZZ',
            name: 'LYSOFORM',
            type: 'Type?',
            level: 'Level?',
          },
        ],
      },
    ]);

    const screen = render(<CustomersServed />);
    const loading = screen.getByText('Carregando...');
    expect(loading).toBeDefined();

    await waitFor(() => expect(ManagerMockInstance.getCustomersServed).toHaveBeenCalled());

    expect(screen.queryByTestId('feedback-spinner')).toBeNull();
    expect(screen.getByText('NOME FANTASIA NÃO ENCONTRADO')).toBeDefined();
    expect(screen.getByText('LYSOFORM')).toBeDefined();
  });
});
