import { mountAddress } from 'features/cardClient/customerCardUtils';
import { mapperCustomers } from 'shared/utils/mappers/mapperCustomers';
import { ICustomerReadDto } from '../../shared/models/Customer';
import { ICustomerResponse, ICustomer, IVisitReadDto } from '../../shared/types';

export const transformCustomers = (customerResponse: ICustomerResponse): ICustomerReadDto[] =>
  customerResponse.customers.map(mapper) as ICustomerReadDto[];

export const mapper = (value: { id: string } & ICustomer): ICustomerReadDto | null => {
  const mappedCustomer = mapperCustomers(value);
  if (mappedCustomer) {
    return { ...mappedCustomer, visitingAddress: mountAddress(mappedCustomer) };
  }
  return null;
};

export const getEmptyMessage = (search: string) => {
  if (!search) {
    return 'Nenhum cliente encontrado';
  }
};

export const extractCustomersIdsVisits = (records: IVisitReadDto[]) =>
  records?.map((r) => r.customerId);

export const disbaleAddVisit = (customersVisits: string[], customerId: string) =>
  customersVisits?.includes(customerId);
