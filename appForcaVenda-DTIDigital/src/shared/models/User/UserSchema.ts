import { tableSchema, Model } from '@nozbe/watermelondb';

import { field, date } from '@nozbe/watermelondb/decorators';

export const TABLE_NAME = 'users';

const UserSchema = tableSchema({
  name: TABLE_NAME,
  columns: [
    { name: 'name', type: 'string' },
    { name: 'earnings_balance', type: 'number' },
    { name: 'role', type: 'string' },
    { name: 'manager_id', type: 'string', isOptional: true },
    { name: 'created_at', type: 'number' },
    { name: 'updated_at', type: 'number' },
  ],
});

class UserModelTable extends Model {
  static table = TABLE_NAME;

  static associations: any = {
    customerIndicators: { type: 'has_many', foreignKey: 'user_id' },
    salesIndicators: { type: 'has_many', foreignKey: 'user_id' },
  };

  // @children('customerIndicators') children?: any;

  // @children('salesIndicators') children?: any;

  @field('name') name?: string;

  @field('earnings_balance') earningsBalance?: number;

  @field('role') role?: string;

  @field('manager_id') managerId?: string;

  @date('created_at') createdAt?: Date;

  @date('updated_at') updatedAt?: Date;
}

export { UserSchema, UserModelTable };
