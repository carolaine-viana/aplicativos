import { IBEMBalance, IBEMBalanceResponse } from 'shared/types';

export const transformBEMBalanceResponse = (data: IBEMBalanceResponse): IBEMBalance => {
  const sheet = data.exclusive_benefits_customer_balances_spreadsheet[0];
  return {
    fileName: sheet.file_name,
    fileContent: sheet.file_content,
  };
};
export const errorMessages = {
  default: 'Ocorreu um erro inesperado',
  share: 'Ocorreu um erro\nao compartilhar o arquivo',
  open: 'Ocorreu um erro\nao abrir o arquivo',
};
