import '../../../shared/utils/mock-react-native-third-lib';
import CustomerRoutesRepository from '../service/CustomerRoutesRepository';
import { CustomerRoutesManager } from '../service/CustomerRoutesManager';
import ClickemonModel from '../../../shared/models/Clickemon/ClickemonModel';
import { mapperClickemons } from '../../../shared/utils/mappers/mapperClickemons';
import { default as expect } from 'expect';

jest.mock('../customerRoutesUtils', () => ({
  transformClickemonResponseCreate: jest.fn(),
}));

jest.mock('../service/CustomerRoutesRepository', () => {
  return class MockRepo {
    constructor() {}
    getVisits = jest.fn();
    getClickemons = jest.fn();
    getCustomerById = jest.fn();
    deleteAll = jest.fn();
    insertMany = jest.fn();
  };
});

jest.mock('../../../shared/models/Clickemon/ClickemonModel', () => {
  return class MockClickemonModel {
    constructor() {}
    getById = jest.fn();
    getAllLocal = jest.fn();
  };
});

jest.mock('../../../shared/utils/mappers/mapperClickemons', () => {
  return { mapperClickemons: jest.fn() };
});

describe('Tests customer routes manager', () => {
  let mockRepo;
  let manager;

  beforeAll(() => {
    mockRepo = new CustomerRoutesRepository();
    manager = new CustomerRoutesManager();
    manager.repo = mockRepo;
    clickemonMock = new ClickemonModel();
    manager.clickemonModel = clickemonMock;
    manager.handleError = jest.fn();
  });

  describe('testando getClickemons', () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });
    it('should call syncClickemons and transform data', async () => {
      const spySyncClickemons = jest.spyOn(manager, 'syncClickemons');

      manager.repo.getClickemons = jest.fn().mockResolvedValueOnce([]);

      const currentLocation = {
        latitude: -21.2432,
        longitude: -44.9887,
      };

      await manager.getClickemons(currentLocation.latitude, currentLocation.longitude, 10000000);

      expect(spySyncClickemons).toBeCalled();
      expect(manager.clickemonModel.getAllLocal).toBeCalledWith(mapperClickemons);
    });

    it('should catch error with handleError', async () => {
      const spySyncClickemons = jest.spyOn(manager, 'syncClickemons');
      const mockError = new Error('sync error');
      spySyncClickemons.mockImplementationOnce(() => {
        throw mockError;
      });

      const currentLocation = {
        latitude: -21.2432,
        longitude: -44.9887,
      };

      await manager.getClickemons(currentLocation.latitude, currentLocation.longitude, 10000000);

      expect(manager.handleError).toHaveBeenCalledWith(mockError);
    });
  });

  describe('Tests getCustomerRoutes', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('Deve chamar repo getVisits() e retornar array com 1 visita ', async () => {
      mockRepo.getVisits.mockResolvedValueOnce([{ id: '000', customer_id: '456979' }]);
      const res = await manager.getCustomerRoutes();
      expect(mockRepo.getVisits).toBeCalledTimes(1);
      expect(res).toHaveLength(1);
      expect(res[0]).toHaveProperty('customer_id');
    });
    it('Deve chamar repo getVisits() e retornar array vazio', async () => {
      mockRepo.getVisits.mockResolvedValue([]);
      const res = await manager.getCustomerRoutes();
      expect(mockRepo.getVisits).toBeCalledTimes(1);
      expect(res).toHaveLength(0);
    });
  });

  describe('Tests getCustomer', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should return customer with id 655666', async () => {
      mockRepo.getCustomerById.mockResolvedValueOnce({
        id: '655666',
        tradeName: 'Trade Name',
        companyName: 'company Name',
        cnpj: '123456789456',
        latitude: -18.979026,
        longitude: -18.979026,
      });
      const res = await manager.getCustomer('655666');

      expect(mockRepo.getCustomerById).toBeCalledTimes(1);
      expect(mockRepo.getCustomerById.mock.calls[0][0]).toEqual('655666');
    });
    it('should throw an error', async () => {
      mockRepo.getCustomerById.mockImplementationOnce(() => {
        throw new Error('some error');
      });

      await manager.getCustomer('6555666');
      expect(manager.handleError).toBeCalledTimes(1);
    });

    it('should return clickemon with id 789456', async () => {
      manager.clickemonModel.getById.mockResolvedValueOnce({
        id: '789456',
        tradeName: 'Trade Name',
        companyName: 'company Name',
        cnpj: '123456789456',
        latitude: -18.979026,
        longitude: -18.979026,
      });

      await manager.getCustomer('789456', true);

      expect(manager.clickemonModel.getById).toBeCalledTimes(1);
      expect(manager.clickemonModel.getById.mock.calls[0][0]).toEqual('789456');
    });
  });
});
