import expect from 'expect';
import * as incetiveMixUtils from '../incetiveMixUtils';
import IncentiveMixRepositoryMock from '../services/IncentiveMixRepository';
import IncentiveMixManager from '../services/IncentiveMixManager';

jest.mock('../services/IncentiveMixRepository', () => {
  return class IncentiveMixRepositoryMock {
    fetchMix = jest.fn();
  };
});

jest.mock('../incetiveMixUtils', () => ({
  transformMixResponse: jest.fn(),
}));

describe('Tests IncentiveMixManager', () => {
  describe('Tests getIncentiveMix', () => {
    let manager;
    const MOCK_INCENTIVE_ID = '2740';
    beforeAll(() => {
      const mockRepo = new IncentiveMixRepositoryMock();
      manager = new IncentiveMixManager();
      manager.repo = mockRepo;
      manager.handleError = jest.fn();
    });

    afterEach(() => {
      jest.resetAllMocks();
    });

    it(`should call fetchMix with incentiveId = ${MOCK_INCENTIVE_ID} and then, transformMixResponse`, async () => {
      manager.repo.fetchMix.mockResolvedValueOnce(MOCK_DATA_RESPONSE);
      await manager.getIncentiveMix(MOCK_INCENTIVE_ID);
      expect(manager.repo.fetchMix).toHaveBeenCalledWith(MOCK_INCENTIVE_ID);
      expect(incetiveMixUtils.transformMixResponse).toHaveBeenCalledWith(MOCK_DATA_RESPONSE.data);
    });
    it(`should handle error when repo throws an error`, async () => {
      manager.repo.fetchMix.mockImplementationOnce(() => {
        throw new Error('');
      });

      await manager.getIncentiveMix(MOCK_INCENTIVE_ID);
      expect(manager.repo.fetchMix).toHaveBeenCalledWith(MOCK_INCENTIVE_ID);
      expect(manager.handleError).toHaveBeenCalledTimes(1);
    });
    it(`should handle error when transformMixResponse throws an error`, async () => {
      incetiveMixUtils.transformMixResponse(() => {
        throw new Error('');
      });

      await manager.getIncentiveMix(MOCK_INCENTIVE_ID);
      expect(manager.repo.fetchMix).toHaveBeenCalledWith(MOCK_INCENTIVE_ID);
      expect(manager.handleError).toHaveBeenCalledTimes(1);
    });
  });
});

var MOCK_DATA_RESPONSE = {
  data: {
    business_incentive_suppliers: [
      {
        business_group_id: 123,
        business_group_name: 'business_group_name',
        supplier_division_id: 123,
        supplier_division_name: 'supplier_division_name',
      },
    ],

    business_incentive_categories: [
      {
        products_group: 'products_group',
        products_category: 'products_category',
        products_subcategory: 'products_subcategory',
        operation_type: 'operation_type',
      },
    ],

    business_incentive_products: [
      {
        id: 123,
        name: 'name',
        operation_type: 'operation_type',
      },
    ],
  },
};
