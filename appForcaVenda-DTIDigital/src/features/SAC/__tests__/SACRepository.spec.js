import expect from 'expect';
import '../../../shared/utils/mock-react-native-third-lib';
import SACRepository from '../services/SACRepository';
import MockAPISAC from '../../../shared/base/api/APISAC';

jest.mock('../../../shared/base/api/APIBFF', () => {
  return class APIBFF {};
});

jest.mock('../../../shared/base/api/APISAC', () => {
  return class MockAPISAC {
    get = jest.fn();
  };
});

describe('Testes on SACRepository', () => {
  const USER_CPF = '46839925072';
  const USER_CNPJ = '41351228000103';
  let repository;
  beforeAll(() => {
    repository = new SACRepository();
    repository.apiECommerce.instance = new MockAPISAC();
  });
  it('should call e-commerce api to get user and customer credentials', async () => {
    await repository.fetUserCustomerCredentials(USER_CPF, USER_CNPJ);
    expect(repository.apiECommerce.instance.get.mock.calls[0][0]).toMatch(
      'cnpj=41351228000103&cpf=46839925072'
    );
  });
});
