import { useEffect, useState } from 'react';
import { IVisitCustomer, TPredefinedFilter } from '@shared/types';
import { ICustomerReadDto } from '@shared/models/Customer';
import { filterCustomers, searchingCustomers } from '../customersFiltersUtils';

export const useCustomersFilters = (
  customers: ICustomerReadDto[] | IVisitCustomer[] | undefined | null,
  selectedFilters: TPredefinedFilter[],
  search: string
) => {
  const [filteredData, setFilteredData] = useState<ICustomerReadDto[]>(customers);
  const [loadingFilter, setLoadingFilter] = useState(false);

  useEffect(() => {
    setLoadingFilter(true);
    const promiseFilter = (): Promise<ICustomerReadDto[]> =>
      new Promise((res) => {
        setTimeout(() => {
          if (customers) {
            const filtered = filterCustomers(selectedFilters, customers);
            const dataResult = searchingCustomers(search, filtered);
            res(dataResult);
          }
        }, 500);
      });

    const filterData = async () => {
      const data = await promiseFilter();
      setFilteredData(data);
      setLoadingFilter(false);
    };

    filterData();
  }, [search, customers, selectedFilters]);

  return {
    filteredDataSource: filteredData,
    loadingFilter,
  };
};
