import { schemaMigrations } from '@nozbe/watermelondb/Schema/migrations';
import migrationV2 from './migrations/migrationV2';
import migrationV3 from './migrations/migrationV3';
import migrationV4 from './migrations/migrationV4';
import migrationV5 from './migrations/migrationV5';

export default schemaMigrations({
  migrations: [
    {
      ...migrationV2,
    },
    {
      ...migrationV3,
    },
    {
      ...migrationV4,
    },
    {
      ...migrationV5,
    },
  ],
});
