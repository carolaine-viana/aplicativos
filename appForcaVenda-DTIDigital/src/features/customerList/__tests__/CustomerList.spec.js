import React from 'react';
import expect from 'expect';
import '@shared/utils/mock-react-native-third-lib';
import { render, waitFor, fireEvent, act } from '@shared/utils/test-utils';
import CustomerListManager from '../service/CustomerListManager';
import CustomerList from '../views/CustomerList';



jest.mock('shared/components/searchBar/SearchHeader', () => {
  const { View } = require('react-native');
  return () => <View testID="SearchHeader" />;
});

jest.mock('../../../shared/models/ModelBase', () => {
  return class MockVisitModel {
    constructor() {}
  };
});
jest.mock('../../visitSchedule/views/VisitScheduleForm', () => {
  const { View } = require('react-native');
  return () => <View testID="VisitScheduleForm" />;
});

jest.mock('../../../shared/components/CustomStatusBar/CustomStatusBar', () => {
  const { View } = require('react-native');
  return { CustomStatusBar: () => <View testID="CustomStatusBar" /> };
});

jest.mock('../../../shared/models/Customer', () => {
  return class MockVisitModel {
    constructor() {}
  };
});

jest.mock('styled-components', () => ({
  useTheme: jest.fn().mockReturnValue({
    palette: { blue50: '#145799' },
  }),
}));

jest.mock('../service/CustomerListManager');

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
  useIsFocused: jest.fn().mockReturnValue(true),
  useRoute: jest.fn().mockReturnValue({
    params: {
      origin: {
        fromSAC: false,
      },
    },
  }),
}));

describe('Tests CustomerList', () => {
  beforeAll(() => {
    CustomerListManagerInstance = CustomerListManager.mock.instances[0];
    CustomerListManagerInstance.getCustomersPendingVisit = jest.fn().mockResolvedValue([]);
    CustomerListManagerInstance.getCustomers = jest.fn().mockResolvedValue([
      {
        id: '1',
        newCustomer: false,
        creditStatus: 'Reabilitado',
        tradeName: 'Marcelo',
        companyName: 'Martins',
        cnpj: '1235',
        latitude: '1',
        visitingAddress: '2',
        distance: '200',
        schedule: new Date(),
      },
      {
        id: '2',
        newCustomer: false,
        creditStatus: 'Suspenso',
        tradeName: 'Maria Smith',
        companyName: 'Carone',
        cnpj: '12398',
        latitude: '100',
        visitingAddress: 'Alameda dos anjos',
        distance: '500',
        schedule: new Date(),
      },
      {
        id: '2',
        newCustomer: false,
        creditStatus: 'Normal',
        tradeName: 'Cliente status Normal',
        companyName: 'Carone',
        cnpj: '12398',
        latitude: '100',
        visitingAddress: 'Alameda dos anjos',
        distance: '500',
        schedule: new Date(),
      },
    ]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render filters', async () => {
    const screen = render(<CustomerList />);
    await waitFor(() => expect(CustomerListManagerInstance.getCustomers).toHaveBeenCalled());
    expect(screen.queryByText(/Novo/)).not.toBeNull();
    expect(screen.queryByText(/Positivado/)).not.toBeNull();
    expect(screen.queryByText(/Não positivado/)).not.toBeNull();
    expect(screen.queryByText(/Normal/)).not.toBeNull();
    expect(screen.queryByText(/Reabilitado/)).not.toBeNull();
    expect(screen.queryByText(/Suspenso/)).not.toBeNull();
  });

  it('should render sort chip "Ordenar"', async () => {
    const screen = render(<CustomerList />);
    await waitFor(() => expect(CustomerListManagerInstance.getCustomers).toHaveBeenCalled());
    const sortChip = screen.queryByText(/Ordenar/);
    expect(sortChip).not.toBeNull();
  });
});
it('should render sort modes "A a Z", "Z a A" if screen is "customers" ', async () => {
  const screen = render(<CustomerList />);
  await waitFor(() => expect(CustomerListManagerInstance.getCustomers).toHaveBeenCalled());

  const sortChip = screen.queryByText(/Ordenar/);
  await fireEvent.press(sortChip);
  expect(screen.queryByText(/A a Z/)).not.toBeNull();
  expect(screen.queryByText(/Z a A/)).not.toBeNull();
});
it('should render customers ', async () => {
  const screen = render(<CustomerList />);
  await waitFor(() => {
    expect(CustomerListManagerInstance.getCustomers).toHaveBeenCalled();
    expect(screen.queryByText(/Maria Smith/)).not.toBeNull();
    expect(screen.queryByText(/Marcelo/)).not.toBeNull();
  });
});

it('should filter customers with status "Reabilitado"', async () => {
  const screen = render(<CustomerList />);
  await waitFor(() => {
    expect(CustomerListManagerInstance.getCustomers).toHaveBeenCalled();
  });

  await act(() => {
    const filter = screen.getByTestId('Reabilitado');
    fireEvent.press(filter);
  });

  await waitFor(() => {
    expect(screen.queryByText(/Maria Smith/)).toBeNull();
    expect(screen.queryByText(/Marcelo/)).not.toBeNull();
  });
});
it('should filter customers with status "Suspenso"', async () => {
  const screen = render(<CustomerList />);
  await waitFor(() => {
    expect(CustomerListManagerInstance.getCustomers).toHaveBeenCalled();
  });

  await act(() => {
    const filter = screen.getByTestId('Suspenso');
    fireEvent.press(filter);
  });

  await waitFor(() => {
    expect(screen.queryByText(/Maria Smith/)).not.toBeNull();
    expect(screen.queryByText(/Marcelo/)).toBeNull();
  });
});
it('should filter customers with status "Normal"', async () => {
  const screen = render(<CustomerList />);
  await waitFor(() => {
    expect(CustomerListManagerInstance.getCustomers).toHaveBeenCalled();
  });

  await act(() => {
    const filter = screen.getByTestId('Normal');
    fireEvent.press(filter);
  });

  await waitFor(() => {
    expect(screen.queryByText(/Cliente status Normal/)).not.toBeNull();
    expect(screen.queryByText(/Maria Smith/)).toBeNull();
    expect(screen.queryByText(/Marcelo/)).toBeNull();
  });
});
