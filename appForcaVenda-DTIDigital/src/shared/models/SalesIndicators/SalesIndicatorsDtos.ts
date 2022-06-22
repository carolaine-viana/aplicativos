import { Model } from '@nozbe/watermelondb';
import { ITimeCourse } from 'shared/types';

export interface ISalesIndicatorsCreateDto extends Partial<Model>, ITimeCourse {
  userId?: string;
  startDate?: Date;
  endDate?: Date;
  salesForecast?: number | null;
  salesResult?: number | null;
  privateBrandsSalesResult?: number | null;
  privateBrandsSalesPercentage?: number | null;
  salesPercentage?: number | null;
}

export interface ISalesIndicatorsReadDto extends ISalesIndicatorsCreateDto, ITimeCourse {
  createdAt?: Date;
  updatedAt?: Date;
}
