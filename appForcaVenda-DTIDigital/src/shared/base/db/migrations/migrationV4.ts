import { addColumns } from '@nozbe/watermelondb/Schema/migrations';
import { CUSTOMERS_TABLE_NAME } from 'shared/models';

const migrationV4 = {
  toVersion: 4,
  steps: [
    addColumns({
      table: CUSTOMERS_TABLE_NAME,
      columns: [{ name: 'purchased_this_month', type: 'boolean' }],
    }),
  ],
};
export default migrationV4;
