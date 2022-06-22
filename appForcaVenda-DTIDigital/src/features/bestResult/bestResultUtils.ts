import { IBestResultResponse, IBestResultResponseGT } from 'shared/types';
import { isArrayEmpty } from 'shared/utils';

export const transformBestResultResponse = (response: IBestResultResponse) => {
  const result = response.performance_indicators_best_result[0];

  return {
    bestResult: result.customers_best_result,
    month: result.customers_best_month,
  };
};

export const transformBestResultResponseGT = (response: IBestResultResponseGT) => {
  const result = response.team_performance_indicators_best_result[0];

  return {
    bestResult: result.team_customers_best_result,
  };
};

export const getBestMonth = (bestResultDateResp: string | undefined) => {
  if (bestResultDateResp) {
    const dateRegex = /[0-9]{2}\/[0-9]{4}/g;
    const matchedDate = bestResultDateResp.match(dateRegex);
    if (matchedDate && !isArrayEmpty(matchedDate)) {
      const monthYear = matchedDate[0];
      const month = monthYear?.toString().substring(0, 2);
      const year = monthYear?.toString().substring(2, 7);
      return `${months[Number(month) - 1].name}${year}`;
    }
  }
};

export const months = [
  { number: '01', name: 'Jan' },
  { number: '02', name: 'Fev' },
  { number: '03', name: 'Mar' },
  { number: '04', name: 'Abr' },
  { number: '05', name: 'Mai' },
  { number: '06', name: 'Jun' },
  { number: '07', name: 'Jul' },
  { number: '08', name: 'Ago' },
  { number: '09', name: 'Set' },
  { number: '10', name: 'Out' },
  { number: '11', name: 'Nov' },
  { number: '12', name: 'Dez' },
];
