import { tableSchema, Model } from '@nozbe/watermelondb';

import { field, date } from '@nozbe/watermelondb/decorators';

const CUSTOMERS_INDICATORS_TABLE_NAME = 'customersIndicators';

const CustomersIndicatorsSchema = tableSchema({
  name: CUSTOMERS_INDICATORS_TABLE_NAME,
  columns: [
    { name: 'user_id', type: 'string' },
    { name: 'time_course', type: 'string' },
    { name: 'start_date', type: 'number' },
    { name: 'end_date', type: 'number' },
    { name: 'customers_forecast', type: 'number', isOptional: true },
    { name: 'customers_result', type: 'number', isOptional: true },
    { name: 'focus_suppliers_customers_result', type: 'number', isOptional: true },
    { name: 'wildcard_suppliers_customers_result', type: 'number', isOptional: true },
    { name: 'sales_forecast', type: 'number', isOptional: true },
    { name: 'sales_result', type: 'number', isOptional: true },
    { name: 'private_brands_sales_result', type: 'number', isOptional: true },
    { name: 'created_at', type: 'number' },
    { name: 'updated_at', type: 'number' },
  ],
});

class CustomersIndicatorsTable extends Model {
  static table = CUSTOMERS_INDICATORS_TABLE_NAME;

  static associations: any = {
    users: { type: 'belongs_to', key: 'user_id' },
  };

  @field('user_id') userId?: string;

  @field('time_course') timeCourse?: string;

  @date('start_date') startDate?: Date;

  @date('end_date') endDate?: Date;

  @field('customers_forecast') customersForecast?: number;

  @field('customers_result') customersResult?: number;

  @field('focus_suppliers_customers_result') focusSuppliersCustomersResult?: number;

  @field('wildcard_suppliers_customers_result') wildcardSuppliersCustomersResult?: number;

  @field('sales_forecast') salesForecast?: number;

  @field('sales_result') salesResult?: number;

  @field('private_brands_sales_result') privateBrandsSalesResult?: number;

  @field('private_brands_sales_percentage') privateBrandsSalesPercentage?: number;

  @field('sales_percentage') salesPercentage?: number;

  @date('created_at') createdAt?: Date;

  @date('updated_at') updatedAt?: Date;
}

export { CustomersIndicatorsSchema, CustomersIndicatorsTable, CUSTOMERS_INDICATORS_TABLE_NAME };
