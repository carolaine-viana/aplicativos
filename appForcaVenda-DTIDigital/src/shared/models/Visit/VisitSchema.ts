import { tableSchema, Model } from '@nozbe/watermelondb';

import { field, date } from '@nozbe/watermelondb/decorators';

const TABLE_NAME = 'visits';

const VisitSchema = tableSchema({
  name: TABLE_NAME,
  columns: [
    { name: 'customer_id', type: 'string' },
    { name: 'visit_completed', type: 'boolean' },
    { name: 'schedule', type: 'number' },
    { name: 'created_at', type: 'number' },
    { name: 'updated_at', type: 'number' },
  ],
});

class VisitModelTable extends Model {
  static table = TABLE_NAME;

  static associations: any = {
    customers: { type: 'belongs_to', key: 'customer_id' },
  };

  @field('visit_completed') visitCompleted?: boolean;

  @field('customer_id') customerId?: string;

  @date('schedule') schedule?: Date;

  @date('created_at') createdAt?: Date;

  @date('updated_at') updatedAt?: Date;
}

export { VisitSchema, VisitModelTable };
