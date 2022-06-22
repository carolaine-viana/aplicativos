import { AxiosResponse } from 'axios';
import { IUserResponse } from '@shared/types';
import { capitalizeText, formatDateOnlyPtBr } from 'shared/utils';

export function getEarningsBalace(response: AxiosResponse<IUserResponse>): number {
  return response.data.sales_reps[0].earnings_balance;
}

export function getDateString() {
  const dataStringDate = formatDateOnlyPtBr(new Date(), "dd MMM yyyy'");
  const transformDate = dataStringDate.split(' ');
  transformDate.splice(1, 1, capitalizeText(transformDate[1]));
  return transformDate.join(' ');
}
