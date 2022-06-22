import expect from 'expect';
import '../../../shared/utils/mock-react-native-third-lib';
import SACRepositoryMock from '../services/SACRepository';
import SACManager from '../services/SACManager';
import * as sacUtils from '../sacUtils';

jest.mock('../../../shared/utils/asyncStorage', () => {
  return { getUserLogin: jest.fn().mockResolvedValue('1234') };
});

jest.mock('../services/SACRepository', () => {
  return class SACRepositoryMock {
    fetUserCustomerCredentials = jest.fn();
    fetchLinkPage = jest.fn().mockResolvedValue({ status: 200 });
    fetchUserCpf = jest.fn().mockResolvedValue({
      data: {
        sales_reps: [
          {
            cpf: '46839925072',
          },
        ],
      },
    });
  };
});

jest.mock('../sacUtils', () => {
  return {
    mountAuthenticatedLink: jest.fn(),
    isValidCredentials: jest.fn(),
    extractCPF: jest.fn().mockReturnValue('46839925072'),
  };
});

describe('Tests SACManager', () => {
  const USER_CPF = '46839925072';
  const CUSTOMER_CNPJ = '41351228000103';

  let manager;
  beforeAll(() => {
    manager = new SACManager();
    manager.handleError = jest.fn();
    manager.repo = new SACRepositoryMock();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  describe('Testes on getOccurrencePage', () => {
    it('should  call repo.fetUserCustomerCredentials and mount "ask" page link', async () => {
      sacUtils.isValidCredentials.mockReturnValueOnce(true);

      expectedResponse = `${CUSTOMER_CNPJ}_${USER_CPF}`;
      manager.repo.fetUserCustomerCredentials.mockResolvedValueOnce({
        data: {
          CNPJ_CPF: expectedResponse,
        },
      });

      sacUtils.mountAuthenticatedLink.mockReturnValueOnce(expectedResponse);

      const res = await manager.getOccurrencePage(CUSTOMER_CNPJ);
      expect(manager.repo.fetchUserCpf).toHaveBeenCalled();
      expect(manager.repo.fetUserCustomerCredentials).toHaveBeenCalled();
      expect(sacUtils.mountAuthenticatedLink).toHaveBeenCalledWith('ask', {
        login: expectedResponse,
      });
      expect(res).toMatch(USER_CPF);
      expect(res).toMatch(CUSTOMER_CNPJ);
    });

    it('should call manager handleError', async () => {
      sacUtils.isValidCredentials.mockReturnValueOnce(false);

      manager.repo.fetUserCustomerCredentials.mockResolvedValueOnce({
        data: {
          CNPJ_CPF: null,
        },
      });

      await manager.getOccurrencePage(CUSTOMER_CNPJ);
      expect(manager.repo.fetchUserCpf).toHaveBeenCalled();
      expect(manager.repo.fetUserCustomerCredentials).toHaveBeenCalled();
      expect(sacUtils.mountAuthenticatedLink).not.toHaveBeenCalled();
      expect(manager.handleError).toHaveBeenCalled();
    });
  });

  describe('Testes on getHistoryPage', () => {
    it('should  call repo.fetUserCustomerCredentials and mount "account/questions/list" page link', async () => {
      sacUtils.isValidCredentials.mockReturnValueOnce(true);

      expectedResponse = `${CUSTOMER_CNPJ}_${USER_CPF}`;
      manager.repo.fetUserCustomerCredentials.mockResolvedValueOnce({
        data: {
          CNPJ_CPF: expectedResponse,
        },
      });

      sacUtils.mountAuthenticatedLink.mockReturnValueOnce(expectedResponse);

      const res = await manager.getHistoryPage(CUSTOMER_CNPJ);
      expect(manager.repo.fetchUserCpf).toHaveBeenCalled();
      expect(manager.repo.fetUserCustomerCredentials).toHaveBeenCalled();
      expect(sacUtils.mountAuthenticatedLink).toHaveBeenCalledWith('account/questions/list', {
        login: expectedResponse,
      });
      expect(res).toMatch(USER_CPF);
      expect(res).toMatch(CUSTOMER_CNPJ);
    });

    it('should call manager handleError getHistoryPage', async () => {
      sacUtils.isValidCredentials.mockReturnValueOnce(false);

      manager.repo.fetUserCustomerCredentials.mockResolvedValueOnce({
        data: {
          CNPJ_CPF: null,
        },
      });

      await manager.getHistoryPage(CUSTOMER_CNPJ);
      expect(manager.repo.fetchUserCpf).toHaveBeenCalled();
      expect(manager.repo.fetUserCustomerCredentials).toHaveBeenCalled();
      expect(sacUtils.mountAuthenticatedLink).not.toHaveBeenCalled();
      expect(manager.handleError).toHaveBeenCalled();
    });
  });
});
