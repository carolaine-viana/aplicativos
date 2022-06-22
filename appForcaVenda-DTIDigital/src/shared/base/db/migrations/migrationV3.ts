import { addColumns } from '@nozbe/watermelondb/Schema/migrations';
import { CUSTOMERS_TABLE_NAME } from 'shared/models';

const migrationV3 = {
  toVersion: 3,
  steps: [
    addColumns({
      table: CUSTOMERS_TABLE_NAME,
      columns: [
        { name: 'new_customer', type: 'boolean', isOptional: true },
        { name: 'business_unit', type: 'string', isOptional: true },
        { name: 'credit_status', type: 'string' },
      ],
    }),
  ],
};
export default migrationV3;
