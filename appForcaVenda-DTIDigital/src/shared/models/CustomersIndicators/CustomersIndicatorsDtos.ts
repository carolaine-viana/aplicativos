import { Model } from '@nozbe/watermelondb';
import { ITimeCourse } from 'shared/types';

export interface ICustomersIndicatorsCreateDto extends Partial<Model>, ITimeCourse {
  userId?: string;
  startDate?: Date;
  endDate?: Date;
  customersForecast?: number | null;
  customersResult?: number | null;
  focusSuppliersCustomersResult?: number | null;
  wildcardSuppliersCustomersResult?: number | null;
  customersGap?: number | null;
  customersPercentage?: number | null;
  customersFulfillment?: string | null;
}

export interface ICustomersIndicatorsReadDto extends ICustomersIndicatorsCreateDto, ITimeCourse {
  createdAt?: Date;
  updatedAt?: Date;
}
