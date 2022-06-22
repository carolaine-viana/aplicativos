/**
 * Use this to deal/manipulate arrays
 */
export function isArrayEmpty<T = null>(arr: Array<T> | null | undefined) {
  return arr && arr?.length === 0;
}

export function doesArrayHaveContent<T = null>(arr: Array<T> | null | undefined) {
  const isEmpty = isArrayEmpty(arr);
  if (isEmpty) {
    return false;
  }
  return arr?.some((i) => !!i);
}

export function filterArraObjectAnyValue<T>(
  arr: Array<T>,
  valueFilter: string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  keysFilter?: Array<keyof T>
) {
  return arr.filter((item: T) => {
    const values = Object.values(item).map((value: string) => {
      if (typeof value !== 'object') {
        return String(value).toUpperCase();
      }
      return null;
    });
    return values.join(' ').includes(valueFilter.toUpperCase());
  });
}

export const addNoRepeatedString = (list: string[], newValue: string) => {
  const newList = list.filter((str) => str !== newValue || str.length === 0);
  newList.push(newValue);
  return newList;
};

export const mergArrayIntoStrings = (list: string[], separator = ';') => {
  if (!list || isArrayEmpty(list)) {
    return '';
  }

  const noEmptyStrings = list.filter((str) => str.length > 0);
  const mergedString =
    noEmptyStrings.length === 1 ? noEmptyStrings[0] : noEmptyStrings.join(separator);

  return mergedString;
};
