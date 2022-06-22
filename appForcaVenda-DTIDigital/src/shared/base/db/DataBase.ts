/**
 * Use this to create generic/reusable Local DB connection and operations
 */

import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import { UserModelTable } from '@shared/models/User/UserSchema';
import AppSchema from './AppSchema';
import { VisitModelTable } from '../../models/Visit';
import { CustomerModelTable } from '../../models/Customer';
import { ClickemonModelTable } from '../../models/Clickemon';
import { CustomersIndicatorsTable } from '../../models/CustomersIndicators';
import { SalesIndicatorsTable } from '../../models/SalesIndicators';
import migrations from './migrations';

// First, create the adapter to the underlying database:
const adapter = new SQLiteAdapter({
  schema: AppSchema,
  // useWebWorker: false,
  // optional database name or file system path
  // dbName: 'myapp',
  // optional migrations
  migrations,
  // synchronous mode only works on iOS. improves performance and reduces glitches in most cases,
  // but also has some downsides - test with and without it
  jsi: true,
  // experimental JSI mode, a more advanced version of synchronous: true
  // experimentalUseJSI: true,
  // Optional, but you should implement this method:
  // onSetUpError: (error) => { // TODO: checar como implmentar função
  // Database failed to load -- offer the user to reload the app or log out
  // },
});

// Then, make a Watermelon database from it!
const database = new Database({
  adapter,
  modelClasses: [
    VisitModelTable,
    CustomerModelTable,
    ClickemonModelTable,
    UserModelTable,
    CustomersIndicatorsTable,
    SalesIndicatorsTable,
  ],
  actionsEnabled: true,
});

export default database;
