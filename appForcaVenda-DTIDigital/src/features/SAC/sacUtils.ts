import { encryptTextTripleDES, replaceMultiCharacters } from '@shared/utils';
import { EPage, IUserRoleResponse } from 'shared/types';
import { SAC_API_KEY, SAC_API_IV, SAC_URL_BASE } from 'shared/constants/API_SDK_KEYS';

export const mountAuthenticatedLink = (
  pagina: EPage.HISTORY | EPage.OCCURRENCE,
  params: Partial<{ login: string }>
) => {
  const url = `${SAC_URL_BASE}${pagina}/p_li/`;
  let reqParams = '';

  if (params.login) {
    reqParams = `p_userid=${params.login}&p_org_id=`;
  }

  const encodado = encryptTextTripleDES(reqParams, SAC_API_IV, SAC_API_KEY);
  const removedSpecialCharacters = replaceMultiCharacters(encodado, [
    {
      from: '+',
      to: '_',
    },
    {
      from: '/',
      to: '~',
    },
    {
      from: '=',
      to: '*',
    },
  ]);
  const result = `${url}${removedSpecialCharacters}`;

  return result;
};

export const isValidCredentials = (cnpjCpf: string) => cnpjCpf && cnpjCpf !== '0';
export const extractCPF = (data: IUserRoleResponse) => data.sales_reps[0].cpf;
