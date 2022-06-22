import { useEffect, useState } from 'react';
import { TAlphabeticalSort } from 'shared/types';
import { ICustomerReadDto } from '@shared/models/Customer';
import { sortByName, sortBySchedule, TScheduleSortMode } from '../customersFiltersUtils';

export const useCustomerSort = (
  customers: (ICustomerReadDto & Partial<{ schedule: Date }>)[] | undefined,
  sortMode: TAlphabeticalSort | TScheduleSortMode,
  sortSchedule = false
) => {
  const [sortedData, setsortedData] = useState<ICustomerReadDto[]>(customers);
  const [loadingSort, setLoadingSort] = useState(false);

  useEffect(() => {
    if (customers) {
      setLoadingSort(true);
      const promiseSort = (): Promise<ICustomerReadDto[]> =>
        new Promise((res) => {
          setTimeout(() => {
            let sorted;
            if (sortSchedule) {
              sorted = sortBySchedule(customers, sortMode);
            } else {
              sorted = sortByName(customers, sortMode as TAlphabeticalSort);
            }
            res(sorted);
          }, 500);
        });
      const load = async () => {
        const data = await promiseSort();
        setsortedData(data);
        setLoadingSort(false);
      };
      load();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customers, sortMode]);

  return {
    sortedData,
    loadingSort,
  };
};
