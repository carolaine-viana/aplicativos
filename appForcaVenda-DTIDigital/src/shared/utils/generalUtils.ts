/**
 * Use this for general utility functions
 */

import { AsyncThunk } from '@reduxjs/toolkit';
import CryptoJS from 'crypto-js';
import theme from 'shared/constants/theme';
import { IPalette } from 'shared/types/IThemeInterface';
import { TAlphabeticalSort, TOption, TPredefinedFilter } from 'shared/types';
import {
  getLastMonday,
  formatDate,
  subtractMonths,
  getYearMonth,
  formatDateOnlyPtBr,
} from './dateUtils';
import { DeviceFeatures } from '../base';
import { IOperationReducer, IJoinQueryParam, ICordinates, IMarker } from '../types';

export const getOperationStatus = <T extends AsyncThunk<any, any, any>>(
  asyncThunkFunction: T
): IOperationReducer<T> => ({
  run: asyncThunkFunction,
  fulfilled: asyncThunkFunction.fulfilled.toString(),
  pending: asyncThunkFunction.pending.toString(),
  rejected: asyncThunkFunction.rejected.toString(),
});

export const handlePlataforms = ({
  handleException,
  handleAndroid,
  handleIOS,
  handlDefault,
}: {
  handleException: Function;
  handleAndroid?: Function | null;
  handleIOS?: Function | null;
  handlDefault?: Function | null;
}) => {
  try {
    if (DeviceFeatures.isAndroid && handleAndroid) {
      handleAndroid();
    } else if (DeviceFeatures.isIOS && handleIOS) {
      handleIOS();
    }

    if (handlDefault) {
      handlDefault();
    }
  } catch (error) {
    handleException(error);
  }
};

export const getKeyValue =
  <T, U extends keyof T>(key: U) =>
  (obj: T) =>
    obj[key];

export const getPartialObject = (obj: any, keepKeys: string[]) =>
  keepKeys.reduce((objResult: any, currentKey: string) => {
    if (obj[currentKey]) {
      return {
        ...objResult,
        [currentKey]: obj[currentKey],
      };
    }
  }, {});

export const mountJoinQuery = (params: IJoinQueryParam): string => {
  const { leftTable, rightTable } = params;
  const query = `select * from ${leftTable.name}
    inner join ${rightTable.name}
    on ${leftTable.name}.${leftTable.key} = ${rightTable.name}.${rightTable.key};`;
  return query
    .replace(/(\r\n|\n|\r)/gm, '')
    .replace(/ +(?= )/g, '')
    .trim();
};

export function mapCordinatesToMarker<T extends Partial<ICordinates>, U extends keyof T>(
  listWithCordinates: T[],
  identifierKey: U
): IMarker<T[U]>[] {
  try {
    return listWithCordinates?.map((item: T) => ({
      latitude: Number(item.latitude),
      longitude: Number(item.longitude),
      identifier: item[identifierKey],
    }));
  } catch {
    return [];
  }
}

export const searchingOptions = (text: string, data: TOption[]) => {
  if (text) {
    return data.filter((item: TOption) => {
      const name = item?.label?.toUpperCase();
      const searchData = text.toUpperCase();
      return name?.includes(searchData);
    });
  }
  return data;
};

export const getCurrency = (value: number = 0) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);

export const getIndicatorColor = (
  value = 0
): { color: string; textColor: 'error' | 'alert' | 'success' } => {
  if (value <= 90) {
    return {
      color: theme.palette.red600,
      textColor: 'error',
    };
  }
  if (value < 100) {
    return {
      color: theme.palette.yellow400,
      textColor: 'alert',
    };
  }
  return {
    color: theme.palette.green400,
    textColor: 'success',
  };
};

export const getPercentageValue = (value?: number) => {
  if (value) {
    if (value > 0) {
      return value.toFixed(2);
    }
    return value.toFixed(0);
  }
  return 0;
};

export const getNameLetters = (name: string) => {
  const splitedName = name.split(' ');
  const firstName = splitedName[0];
  let lastName = '';
  if (splitedName.length > 1) {
    lastName = splitedName.pop() as string;
    return `${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}`;
  }
  return firstName[0].toUpperCase();
};

export function formatCNPJ(cnpj?: string) {
  if (!cnpj) return '';
  return cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
}

export const isTokenExpired = (expirationDate: Date | number) => {
  const now = new Date();
  return now > expirationDate || expirationDate === 0;
};

export const isValidCordinates = (lat: number, lng: number) => lat !== 0 && lng !== 0;

export const mountMonthParam = (date = new Date()) => {
  const month = date.getMonth();
  const monthText = `0${month + 1}`.slice(-2);
  const year = date.getFullYear();
  return `month=${year}${monthText}`;
};

export const mountWeekParam = (date = new Date()) => {
  const lastMonday = getLastMonday(date);
  const formatedDate = formatDate(lastMonday, 'yyyy-MM-dd');
  return `week=${formatedDate}`;
};

const getNumberOfRows = (dataLength: number, numberOfColumns: number) =>
  Math.ceil(dataLength / numberOfColumns);

const sliceData = (data: Array<unknown>, indexStart: number, indexEnd: number) =>
  data.slice(indexStart, indexEnd);

const insertEmptyColumn = (columnsOfRows: Array<unknown>) =>
  columnsOfRows.push({
    text: 'empty',
  });

export function createRowsWithColumns(data, numberOfColumns) {
  const numberOfRowsToCreate = getNumberOfRows(data.length, numberOfColumns);

  let rowsFullFilled = 0;
  let indexStartSlice = 0;
  const listOfRows = [];

  while (rowsFullFilled < numberOfRowsToCreate) {
    const endIndexSlice = indexStartSlice + numberOfColumns;
    const columnsOfRows = sliceData(data, indexStartSlice, endIndexSlice);

    indexStartSlice = endIndexSlice;

    if (columnsOfRows.length < numberOfColumns) {
      insertEmptyColumn(columnsOfRows);
    }

    listOfRows.push(columnsOfRows);
    rowsFullFilled += 1;
  }

  return listOfRows;
}

export function mountChipOpbject<T extends Partial<{ activeColor: keyof IPalette }>>(
  data: Array<T | string>,
  activeColor = 'blue600'
) {
  return data?.map((item: T | string) => {
    if (typeof item === 'string') {
      return { text: item, disabled: false, activeColor };
    }

    return { ...item, activeColor: item.activeColor || activeColor };
  });
}

export const getArrayFromString = (str: string, separator: string = ';') =>
  str.split(separator) || [];

export const mergeArrayStringsWithSeparator = (values: string[], separator: string) =>
  values.join(separator);

export const arrayContainsString = (listOfStrings: string[], stringCheck: string) =>
  listOfStrings.includes(stringCheck);

export const checkArrayIsSubSet = (originalArray: string[], subSetArray: string[]) =>
  subSetArray.every((str) => originalArray.includes(str));

export const mount12MonthsLess = () => {
  const listMonths = [];
  let newDate;
  let newListMonth;

  for (let index = 0; index < 12; index++) {
    newDate = subtractMonths(new Date(), index);
    const { monthYearDescription, monthYearNumber } = getYearMonth(newDate);
    newListMonth = { label: monthYearDescription, value: monthYearNumber };
    listMonths.push(newListMonth);
  }

  return listMonths;
};

export const getMonthYearDescription = (monthYear: string | Date) => {
  if (typeof monthYear === 'string') {
    const [m, y] = monthYear.split(' ');
    return `${m.slice(0, 3).toUpperCase()} / ${y}`;
  }
  const copyDateParam = monthYear as unknown as Date;
  const ptBRDate = formatDateOnlyPtBr(copyDateParam, "MMMM' 'yyyy");
  const [m, y] = ptBRDate.split(' ');
  return `${m.slice(0, 3).toUpperCase()} / ${y}`;
};

export const objectMatchText = <T extends object>(obj: T, searchText = '') => {
  const valuesMerged = Object.values(obj)
    .filter((value) => typeof value === 'number' || typeof value === 'string')
    .join(' ');
  const normalizedString = valuesMerged.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const normalizedSearchText = searchText.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  return normalizedString.toUpperCase().includes(normalizedSearchText.toUpperCase());
};

export const getMonthWeekTabs = () => ({
  week: {
    id: 'week',
    title: 'Semana',
  },
  month: {
    id: 'month',
    title: 'Mês',
  },
});

export const getFilterReceiptTabs = () => ({
  todos: {
    id: 'todos',
    title: 'Todos',
  },
  credito: {
    id: 'credito',
    title: 'Créditos',
  },
  debito: {
    id: 'debito',
    title: 'Débitos',
  },
});
export const filterListByPreDefinedFilters = <T>(
  filters: TPredefinedFilter[],
  listItensToFilter: T[],
  searchStrategy: 'union' | 'intersection' = 'intersection'
) => {
  const arrayMethod = searchStrategy === 'union' ? 'some' : 'every';

  return listItensToFilter?.filter((item) => {
    const keysOfObjetctItem = Object.keys(item);
    const onlyKeysToFilter = filters.filter((filter) => keysOfObjetctItem.includes(filter.prop));

    return onlyKeysToFilter[arrayMethod]((filterCheck) => {
      if (filterCheck.type === 'string') {
        return String(item[filterCheck.prop as keyof T]).includes(filterCheck.value);
      }
      if (filterCheck.type === 'boolean') {
        return !!item[filterCheck.prop as keyof T] === !!filterCheck.shouldPass;
      }
    });
  });
};

export const sortListByKey = <T>(list: T[], key: keyof T, sortMode: TAlphabeticalSort) =>
  [...list]?.sort((a, b) => {
    if (a[key] && b[key]) {
      if (sortMode === 'az') {
        return a[key] < b[key] ? -1 : 1;
      }
      if (sortMode === 'za') {
        return a[key] < b[key] ? 1 : -1;
      }
    }
    return 0;
  });

export const capitalizeText = (text: string) => text && text[0].toUpperCase() + text.slice(1);

export const isValidValue = (value: string | number | boolean | undefined | null) =>
  value !== null && value !== undefined;

export const replaceMultiCharacters = (
  text: string,
  dictionary: Array<{ from: string; to: string }>
) =>
  Array.from(text)
    .map((c) => {
      const foundInDictionary = dictionary.find(
        (dictionaryCharacter) => dictionaryCharacter.from === c
      );
      if (foundInDictionary) {
        return foundInDictionary.to;
      }
      return c;
    })
    .join('');

export const encryptTextTripleDES = (text: string, iv: string, cryptkey: string) => {
  const encrypted = CryptoJS.TripleDES.encrypt(text, CryptoJS.enc.Utf8.parse(cryptkey), {
    iv: CryptoJS.enc.Utf8.parse(iv),
  });
  return encrypted.toString();
};
