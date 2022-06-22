import React from 'react';
import '@shared/utils/jestCustomMatchers';
import expect from 'expect';
import { render, waitFor } from '@shared/utils/test-utils';
import IncentiveMixManagerMock from '../services/IncentiveMixManager';
import IncentiveMix from '../views/IncentiveMix';
import * as incetiveMixUtils from '../incetiveMixUtils';

jest.mock('../services/IncentiveMixManager');

jest.mock('../incetiveMixUtils', () => ({
  getChips: jest.fn(),
  extractData: jest.fn(),
  isThereMix: jest.fn(),
}));

jest.mock('features/incentives/hooks/useSelectedIncentive', () => {
  return {
    useSelectedIncentive: () => ({
      selectedIncentive: { id: '1234' },
      setSelectedIncentive: jest.fn(),
    }),
  };
});

let ManagerMockInstance = IncentiveMixManagerMock.mock.instances[0];
ManagerMockInstance.getIncentiveMix = jest.fn();
ManagerMockInstance.getIncentiveMix = jest.fn();
ManagerMockInstance.getIncentiveMix.mockResolvedValue(mockManagerData);

describe(' Tests IncentiveMix - Tests render data from manager', () => {
  beforeAll(() => {
    incetiveMixUtils.extractData.mockReturnValue(mockManagerData.businessIncentiveSuppliers);
    incetiveMixUtils.isThereMix.mockReturnValue(true);
    incetiveMixUtils.getChips.mockReturnValue(mockChips);
  });
  afterAll(() => {
    jest.resetAllMocks();
  });

  it('should render fornecedores', async () => {
    const screen = render(<IncentiveMix />);

    const loading = screen.queryByTestId('feedback-spinner');
    expect(loading).toBeDefined();

    await waitFor(() =>
      expect(ManagerMockInstance.getIncentiveMix).toHaveBeenCalledWith(
        MOCKSELECTEDINCENTIVECONTEXT.incentive.id
      )
    );

    expect(screen.queryByText(/COD:/i)).not.toBeNull();
    expect(screen.queryByText('000')).not.toBeNull();

    expect(screen.queryByText(/GRUPO ECONÔMICO:/i)).not.toBeNull();
    expect(screen.queryByText('businessGroupNameSupplier')).not.toBeNull();

    expect(screen.queryByText('supplierDivisionNameSupplier')).not.toBeNull();
  });
});

describe('Tests chips enabled/disabled', () => {
  beforeAll(() => {
    incetiveMixUtils.extractData.mockReturnValue(mockManagerData.businessIncentiveSuppliers);
    incetiveMixUtils.isThereMix.mockReturnValue(true);
    incetiveMixUtils.getChips.mockReturnValue(mockChips);
  });

  it('should render all chips enabled', async () => {
    const chipsEnabled = mockChips.map((chip) => ({ ...chip, disabled: false }));
    incetiveMixUtils.getChips.mockReturnValueOnce(chipsEnabled);

    const screen = render(<IncentiveMix />);

    await waitFor(() =>
      expect(ManagerMockInstance.getIncentiveMix).toHaveBeenCalledWith(
        MOCKSELECTEDINCENTIVECONTEXT.incentive.id
      )
    );

    const chipSuppliers = screen.queryByText('Fornecedores');
    const chipCategories = screen.queryByText('Categorias');
    const chipProducts = screen.queryByText('Produtos');
    const disabledChipStyle = {
      color: '#999DA9',
    };
    expect(chipSuppliers.props.style).not.toContainObject(disabledChipStyle);
    expect(chipCategories.props.style).not.toContainObject(disabledChipStyle);
    expect(chipProducts.props.style).not.toContainObject(disabledChipStyle);
  });

  it('should render all chips disabled', async () => {
    const chipsDisabled = mockChips.map((chip) => ({ ...chip, disabled: true }));
    incetiveMixUtils.getChips.mockReturnValue(chipsDisabled);
    incetiveMixUtils.isThereMix.mockReturnValueOnce(false);

    const screen = render(<IncentiveMix />);

    await waitFor(() =>
      expect(ManagerMockInstance.getIncentiveMix).toHaveBeenCalledWith(
        MOCKSELECTEDINCENTIVECONTEXT.incentive.id
      )
    );

    const chipSuppliers = screen.queryByText('Fornecedores');
    const chipCategories = screen.queryByText('Categorias');
    const chipProducts = screen.queryByText('Produtos');
    const feedbackNoMix = screen.queryByText(/ESSE INCENTIVO NÃO TEM/i);
    const disabledChipStyle = {
      color: '#999DA9',
    };

    expect(chipSuppliers.props.style).toContainObject(disabledChipStyle);
    expect(chipCategories.props.style).toContainObject(disabledChipStyle);
    expect(chipProducts.props.style).toContainObject(disabledChipStyle);
    expect(chipProducts.props.style).toContainObject(disabledChipStyle);
    expect(feedbackNoMix).not.toBeNull();
  });
});

const mockChips = [
  {
    text: 'Fornecedores',
  },
  {
    text: 'Produtos',
  },
  {
    text: 'Categorias',
  },
];
const MOCKSELECTEDINCENTIVECONTEXT = {
  incentive: {
    id: '1234',
  },
};
const mockManagerData = {
  businessIncentiveSuppliers: [
    {
      businessGroupId: '000',
      businessGroupName: 'businessGroupNameSupplier',
      supplierDivisionId: '1234',
      supplierDivisionName: 'supplierDivisionNameSupplier',
    },
  ],
  businessIncentiveCategories: [
    {
      productsGroup: 'productsGroup',
      productsCategory: 'productsCategory',
      productsSubcategory: 'productsSubcategory',
      operationType: 'operationType',
    },
  ],
  businessIncentiveProducts: [
    {
      id: '2740',
      name: 'product name',
      operationType: 'operation name',
    },
  ],
};
