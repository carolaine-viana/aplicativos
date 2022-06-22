import { addColumns } from '@nozbe/watermelondb/Schema/migrations';
import { CUSTOMERS_TABLE_NAME } from 'shared/models';

const migrationV4 = {
  toVersion: 5,
  steps: [
    addColumns({
      table: CUSTOMERS_TABLE_NAME,
      columns: [
        { name: 'phone_number', type: 'string' },
        { name: 'buyer_name', type: 'string' },
        { name: 'buyer_phone_number', type: 'string' },
      ],
    }),
  ],
};
export default migrationV4;
