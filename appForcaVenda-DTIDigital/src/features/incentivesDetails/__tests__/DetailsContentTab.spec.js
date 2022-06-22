import React from 'react';
import expect from 'expect';
import { render, waitFor } from '@shared/utils/test-utils';
import DetailsContentTab from '../views/DetailsContentTab';
import IncentiveDetailsManager from '../services/IncentiveDetailsManager';

jest.mock('features/incentives/hooks/useSelectedIncentive', () => {
  return {
    useSelectedIncentive: () => ({
      selectedIncentive: {
        id: '2845',
        name: 'HEINZ MOCK',
        targetGroup: 'RCA MOCK',
        mechanics: 'Concurso/Ranking MOCK',
        status: 'Em apuração MOCK',
        startDate: '01/07/2021',
        endDate: '31/07/2021',
      },
      setSelectedIncentive: jest.fn(),
    }),
  };
});

jest.mock('@react-navigation/native', () => {
  return {
    useIsFocused: () => true,
  };
});

jest.mock('@react-native-community/netinfo', () => {
  return {
    useNetInfo: () => ({ isConnected: true }),
  };
});

jest.mock('../services/IncentiveDetailsManager');

const MOCK_SELECTED_INCENTIVE_ID = '2845';

const mockSelectedIncentiveContext = {
  incentive: {
    id: MOCK_SELECTED_INCENTIVE_ID,
    name: 'HEINZ MOCK',
    targetGroup: 'RCA MOCK',
    mechanics: 'Concurso/Ranking MOCK',
    status: 'Em apuração MOCK',
    startDate: '01/07/2021',
    endDate: '31/07/2021',
  },
};

const mockManagerData = {
  id: MOCK_SELECTED_INCENTIVE_ID,
  salesForecast: 'R$ 8.897,00',
  salesResult: 'R$ 458,00',
  campaignName: 'campaignName',
  campaignSalesForecast: 'R$ 4.586,00',
  campaignSalesResult: 'R$ 4.567,00',
  totalNumberOfDays: '20',
  elapsedNumberOfDays: '60',
  ruleDescription: 'rule_description...',
  awards: [
    {
      rule: '1',
      prize: 'SOME PRIZE',
    },
  ],
};
describe('Tests DetailsContentTab', () => {
  let ManagerMockInstance;
  beforeAll(() => {
    ManagerMockInstance = IncentiveDetailsManager.mock.instances[0];
    ManagerMockInstance.getIncentivesDetails = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should render incentive details from context', async () => {
    ManagerMockInstance.getIncentivesDetails.mockResolvedValueOnce(mockManagerData);

    const screen = render(<DetailsContentTab />);
    const loading = screen.queryByTestId('feedback-spinner');

    expect(loading).toBeDefined();

    await waitFor(() =>
      expect(ManagerMockInstance.getIncentivesDetails).toHaveBeenCalledWith(
        MOCK_SELECTED_INCENTIVE_ID
      )
    );

    expect(
      screen.getByText(`Incentivo ${mockSelectedIncentiveContext.incentive.name}`)
    ).toBeDefined();

    expect(screen.getByText('COD: ')).toBeDefined();
    expect(screen.queryByText(mockSelectedIncentiveContext.incentive.id)).toBeDefined();

    expect(screen.getByText('PÚBLICO ALVO: ')).toBeDefined();
    expect(screen.getByText(mockSelectedIncentiveContext.incentive.targetGroup)).toBeDefined();

    expect(screen.getByText('MECÂNICA: ')).toBeDefined();
    expect(screen.queryByText(mockSelectedIncentiveContext.incentive.mechanics)).toBeDefined();

    expect(screen.getByText('STATUS: ')).toBeDefined();
    expect(screen.queryByText(mockSelectedIncentiveContext.incentive.status)).toBeDefined();

    // expect(screen.getByText('01/07/2021 a 31/07/2021')).toBeDefined();
  });
  it('should render incentive details from manager', async () => {
    ManagerMockInstance.getIncentivesDetails.mockResolvedValueOnce(mockManagerData);

    const screen = render(<DetailsContentTab />);
    const loading = screen.queryByTestId('feedback-spinner');
    expect(loading).toBeDefined();
    await waitFor(() => expect(ManagerMockInstance.getIncentivesDetails).toHaveBeenCalled());

    expect(screen.getByText('Descrição')).toBeDefined();
    expect(screen.getByText(mockManagerData.ruleDescription)).toBeDefined();

    expect(screen.getByText('CAMPANHA: ')).toBeDefined();
    expect(screen.getByText(mockManagerData.campaignName)).toBeDefined();

    expect(screen.getByText('META DE CAMPANHA: ')).toBeDefined();
    // expect(screen.getByText(mockManagerData.campaignSalesForecast)).toBeDefined();

    expect(screen.getByText('VENDAS DA CAMPANHA: ')).toBeDefined();
    // expect(screen.getByText(mockManagerData.campaignSalesResult)).toBeDefined();

    expect(screen.getByText('META DO INCENTIVO: ')).toBeDefined();
    // expect(screen.getByText(mockManagerData.salesForecast)).toBeDefined();

    expect(screen.getByText('VENDAS DO INCENTIVO: ')).toBeDefined();
    // expect(screen.getByText(mockManagerData.salesResult)).toBeDefined();

    expect(screen.getByText('QUANTIDADE DE DIAS: ')).toBeDefined();
    expect(screen.getByText(mockManagerData.totalNumberOfDays)).toBeDefined();

    expect(screen.getByText('QUANTIDADE DE TRANSCORRIDOS: ')).toBeDefined();
    expect(screen.getByText(mockManagerData.elapsedNumberOfDays)).toBeDefined();
  });

  it('should render error feedback', async () => {
    ManagerMockInstance.getIncentivesDetails.mockImplementationOnce(() => {
      throw new Error('');
    });

    const screen = render(<DetailsContentTab />);
    const loading = screen.queryByTestId('feedback-spinner');
    expect(loading).toBeDefined();
    await waitFor(() => expect(ManagerMockInstance.getIncentivesDetails).toHaveBeenCalled());
    expect(screen.getByText('Erro inesperado.')).toBeDefined();
  });
});
