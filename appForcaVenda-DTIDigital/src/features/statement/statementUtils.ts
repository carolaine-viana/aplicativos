import {
  IEarningsStatement,
  IEarningsSummary,
  IStatementResponse,
  ISummaryResponse,
} from '@shared/types';
import { getCurrency } from 'shared/utils';

const transformEarningsSummaryResponse = (
  summaryResponse: ISummaryResponse
): IEarningsSummary | null => {
  const summaryEarnings = summaryResponse.earnings_summary[0];
  if (summaryEarnings) {
    return {
      ...summaryEarnings,
      totalDebts: summaryEarnings.total_debts,
      totalCredits: summaryEarnings.total_credits,
      openingBalance: summaryEarnings.opening_balance,
      finalBalance: summaryEarnings.final_balance,
      availableBalance: summaryEarnings.available_balance,
    };
  }
  return null;
};

const transformEarningsStatementResponse = (
  statementResponse: IStatementResponse
): Array<IEarningsStatement> =>
  statementResponse.earnings_statement.map((earning) => ({
    entryDate: earning.entry_date,
    entryDay: earning.entry_day,
    entryDescription: earning.entry_description,
    entryAmount: earning.entry_amount,
  }));

export const transformEarningsResponses = (responses: [ISummaryResponse, IStatementResponse]) => {
  const summaryResponse = responses[0];
  const statementResponse = responses[1];

  const summaryEarnings = transformEarningsSummaryResponse(summaryResponse);
  const statementEarnings = transformEarningsStatementResponse(statementResponse);
  return {
    summaryEarnings,
    statementEarnings,
  };
};

export const searchingStatements = (
  text: string,
  statements: IEarningsStatement[]
): IEarningsStatement[] => {
  try {
    if (text) {
      return statements?.filter((item: IEarningsStatement) => {
        const itemData = {
          ...item,
          entryAmount: getCurrency(item.entryAmount),
        };
        const values = Object.values(itemData).join(' ').toUpperCase();
        const searchData = text.toUpperCase();
        return values.includes(searchData);
      });
    }
    return statements;
  } catch (error) {
    return [];
  }
};

export const getTransformDescription = (entryDescription: string) => {
  const myRgx = /[0-9]{2}\/[0-9]{2}\/[0-9]{4}/;
  const found = entryDescription.match(myRgx);

  if (found && found[0]) {
    return entryDescription
      .replace(found[0], '')
      .split('-')
      .map((item) => (item.search('COMISSAO') ? item : `${item}\n`))
      .join('');
  }
  return entryDescription;
};

// export const getTransformDescription = (entryDescription: string) => {
//   const myRgx = /[0-9]{2}\/[0-9]{2}\/[0-9]{4}/;

//   const found = entryDescription.match(myRgx);

//   if (found && found[0]) {
//     return entryDescription
//       .replaceAll(found[0], '')
//       .split(' ')
//       .map((item) => (item.search('COMISSAO') ? item : item + '\n'))
//       .join(' ');
//   }

//   return entryDescription;
// };

// TODO SPRINT 14: TESTAR EXTRATO E REMOVER

// export const mount12MonthsLess = () => {
//   const listMonths = [];
//   let newDate;
//   let newListMonth;

//   // eslint-disable-next-line no-plusplus
//   for (let index = 0; index < 12; index++) {
//     newDate = subtractMonths(new Date(), index);
//     const { monthYearDescription, monthYearNumber } = getYearMonth(newDate);
//     newListMonth = { label: monthYearDescription, value: monthYearNumber };
//     listMonths.push(newListMonth);
//   }

//   return listMonths;
// };

// export const mountMonthSelectedLabel = (yearMonth: string): string => {
//   const year = yearMonth.slice(0, 4);
//   const month = yearMonth.slice(-2);

//   const monthDescription = getMonthDescription(Number(month) - 1);
//   return `${monthDescription} / ${year}`;
// };
