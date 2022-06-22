import { tableSchema, Model } from '@nozbe/watermelondb';

import { field, date } from '@nozbe/watermelondb/decorators';

const SALES_INDICATORS_TABLE_NAME = 'salesIndicators';

const SalesIndicatorsSchema = tableSchema({
  name: SALES_INDICATORS_TABLE_NAME,
  columns: [
    { name: 'user_id', type: 'string' },
    { name: 'time_course', type: 'string' },
    { name: 'start_date', type: 'number' },
    { name: 'end_date', type: 'number' },
    { name: 'sales_forecast', type: 'number', isOptional: true },
    { name: 'sales_result', type: 'number', isOptional: true },
    { name: 'private_brands_sales_result', type: 'number', isOptional: true },
    { name: 'created_at', type: 'number' },
    { name: 'updated_at', type: 'number' },
  ],
});

class SalesIndicatorsTable extends Model {
  static table = SALES_INDICATORS_TABLE_NAME;

  static associations: any = {
    users: { type: 'belongs_to', key: 'user_id' },
  };

  @field('user_id') userId?: string;

  @field('time_course') timeCourse?: string;

  @date('start_date') startDate?: Date;

  @date('end_date') endDate?: Date;

  @field('sales_forecast') salesForecast?: number;

  @field('sales_result') salesResult?: number;

  @field('private_brands_sales_result') privateBrandsSalesResult?: number;

  @date('created_at') createdAt?: Date;

  @date('updated_at') updatedAt?: Date;
}

export { SalesIndicatorsSchema, SalesIndicatorsTable, SALES_INDICATORS_TABLE_NAME };
