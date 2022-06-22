import { tableSchema, Model } from '@nozbe/watermelondb';
import { field, date } from '@nozbe/watermelondb/decorators';

const TABLE_NAME = 'clickemons';

const ClickemonSchema = tableSchema({
  name: TABLE_NAME,
  columns: [
    { name: 'cnpj', type: 'string' },
    { name: 'company_name', type: 'string' },
    { name: 'latitude', type: 'string' },
    { name: 'longitude', type: 'string' },
    { name: 'trade_name', type: 'string' },
    { name: 'visiting_city', type: 'string' },
    { name: 'visiting_complement', type: 'string' },
    { name: 'visiting_neighborhood', type: 'string' },
    { name: 'visiting_number', type: 'string' },
    { name: 'visiting_state', type: 'string' },
    { name: 'visiting_street', type: 'string' },
    { name: 'visiting_zip_code', type: 'string' },
    { name: 'created_at', type: 'number' },
    { name: 'updated_at', type: 'number' },
  ],
});

class ClickemonModelTable extends Model {
  static table = TABLE_NAME;

  @field('cnpj') cnpj?: string;

  @field('company_name') companyName?: string;

  @field('latitude') latitude?: number;

  @field('longitude') longitude?: number;

  @field('trade_name') tradeName?: string;

  @field('visiting_city') visitingCity?: string;

  @field('visiting_complement') visitingComplement?: string;

  @field('visiting_neighborhood') visitingNeighborhood?: string;

  @field('visiting_number') visitingNumber?: string;

  @field('visiting_state') visitingState?: string;

  @field('visiting_street') visitingStreet?: string;

  @field('visiting_zip_code') visitingZipCode?: string;

  @date('created_at') createdAt?: Date;

  @date('updated_at') updatedAt?: Date;
}

export { ClickemonSchema, ClickemonModelTable };
