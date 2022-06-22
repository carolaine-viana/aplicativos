import { IVisitCustomer } from '@shared/types';
import { ICustomerReadDto } from '@shared/models/Customer';

export const getPendingVisits = (visits: IVisitCustomer[]) =>
  visits.filter((visit) => !visit.visitCompleted);

export const filterRoadmaps = (masterDataSource: ICustomerReadDto[], text: string) => {
  if (!text) {
    return masterDataSource;
  }
  return masterDataSource.filter((item: ICustomerReadDto) => {
    const itemString = Object.values(item)
      .map((value: number | string) => value.toString())
      .join('')
      .toUpperCase();

    return itemString.includes(text.toUpperCase());
  });
};
