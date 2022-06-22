import { createTable } from '@nozbe/watermelondb/Schema/migrations';

const migrationV2 = {
  toVersion: 2,
  steps: [
    createTable({
      name: 'users',
      columns: [
        { name: 'name', type: 'string' },
        { name: 'earnings_balance', type: 'number' },
        { name: 'role', type: 'string' },
        { name: 'manager_id', type: 'string', isOptional: true },
        { name: 'created_at', type: 'number' },
        { name: 'updated_at', type: 'number' },
      ],
    }),
  ],
};

export default migrationV2;
