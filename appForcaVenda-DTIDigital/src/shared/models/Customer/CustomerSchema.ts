import { tableSchema, Model } from '@nozbe/watermelondb';

import { field, date, children } from '@nozbe/watermelondb/decorators';

const CUSTOMERS_TABLE_NAME = 'customers';

const CustomerSchema = tableSchema({
  name: CUSTOMERS_TABLE_NAME,
  columns: [
    { name: 'trade_name', type: 'string' },
    { name: 'company_name', type: 'string' },
    { name: 'cnpj', type: 'string' },
    { name: 'latitude', type: 'number' },
    { name: 'longitude', type: 'number' },
    { name: 'visiting_street', type: 'string' },
    { name: 'visiting_number', type: 'string' },
    { name: 'visiting_complement', type: 'string' },
    { name: 'visiting_city', type: 'string' },
    { name: 'visiting_state', type: 'string' },
    { name: 'visiting_neighborhood', type: 'string' },
    { name: 'visiting_zip_code', type: 'string' },
    { name: 'territory_inclusion_date', type: 'string' },
    { name: 'last_purchase_date', type: 'string' },
    { name: 'credit_status', type: 'string' },
    { name: 'new_customer', type: 'boolean', isOptional: true },
    { name: 'business_unit', type: 'string', isOptional: true },
    { name: 'purchased_this_month', type: 'boolean' },
    { name: 'phone_number', type: 'string' },
    { name: 'buyer_name', type: 'string' },
    { name: 'buyer_phone_number', type: 'string' },
    { name: 'created_at', type: 'number' },
    { name: 'updated_at', type: 'number' },
  ],
});
class CustomerModelTable extends Model {
  static table = CUSTOMERS_TABLE_NAME;

  static associations: any = {
    visits: { type: 'has_many', foreignKey: 'customer_id' },
  };

  @children('visits') children?: any;

  @field('trade_name') tradeName?: string;

  @field('company_name') companyName?: string;

  @field('cnpj') cnpj?: string;

  @field('latitude') latitude?: number;

  @field('longitude') longitude?: number;

  @field('visiting_street') visitingStreet?: string;

  @field('visiting_number') visitingNumber?: string;

  @field('visiting_complement') visitingComplement?: string;

  @field('visiting_city') visitingCity?: string;

  @field('visiting_state') visitingState?: string;

  @field('visiting_neighborhood') visitingNeighborhood?: string;

  @field('visiting_zip_code') visitingZipcode?: string;

  @field('territory_inclusion_date') territoryInclusionDate?: string;

  @field('last_purchase_date') lastPurchaseDate?: string;

  @field('new_customer') newCustomer?: boolean;

  @field('credit_status') creditStatus?: string;

  @field('business_unit') businessUnit?: boolean;

  @field('purchased_this_month') purchasedThisMonth?: boolean;

  @field('phone_number') phoneNumber?: string;

  @field('buyer_name') buyerName?: string;

  @field('buyer_phone_number') buyerPhoneNumber?: string;

  @date('created_at') createdAt?: Date;

  @date('updated_at') updatedAt?: Date;
}

export { CustomerSchema, CustomerModelTable, CUSTOMERS_TABLE_NAME };
