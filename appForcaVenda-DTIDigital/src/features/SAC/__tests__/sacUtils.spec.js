import '@shared/utils/mock-react-native-third-lib';
import expect from 'expect';

import { mountAuthenticatedLink } from '../sacUtils';

describe('Testes on sacUtils', () => {
  it('should  mount an authenticated link to "ask" page given a CNPJ and CPF', async () => {
    const mockExpected =
      'https://martins--tst3.custhelp.com/ci/pta/login/redirect/ask/p_li/w6fYAaNUqLk8r0Hj0Y8Cuy4cAsdosOjNs~DowcUitOA*';

    const res = mountAuthenticatedLink('ask', {
      login: 'testepta',
    });

    expect(res).toEqual(mockExpected);
  });
  it('should  mount an authenticated link to "account/questions/list" page given a CNPJ and CPF', async () => {
    const mockExpected =
      'https://martins--tst3.custhelp.com/ci/pta/login/redirect/account/questions/list/p_li/w6fYAaNUqLk8r0Hj0Y8Cuy4cAsdosOjNs~DowcUitOA*';

    const res = mountAuthenticatedLink('account/questions/list', {
      login: 'testepta',
    });

    expect(res).toEqual(mockExpected);
  });
});
