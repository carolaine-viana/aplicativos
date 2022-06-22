import { appSchema } from '@nozbe/watermelondb';
import { UserSchema } from '../../models/User/UserSchema';
import { CustomerSchema } from '../../models/Customer/CustomerSchema';
import { VisitSchema } from '../../models/Visit/VisitSchema';
import { ClickemonSchema } from '../../models/Clickemon';
import { CustomersIndicatorsSchema } from '../../models/CustomersIndicators';
import { SalesIndicatorsSchema } from '../../models/SalesIndicators';

const AppSchema = appSchema({
  version: 5,
  tables: [
    VisitSchema,
    CustomerSchema,
    ClickemonSchema,
    UserSchema,
    CustomersIndicatorsSchema,
    SalesIndicatorsSchema,
  ],
});

export default AppSchema;
