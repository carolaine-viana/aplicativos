import { IMixCategory } from './IMixCategory';
import { IMixProduct } from './IMixProduct';
import { IMixSupplier } from './IMixSupplier';

export interface IMixData {
  businessIncentiveSuppliers: Array<IMixSupplier>;
  businessIncentiveCategories: Array<IMixCategory>;
  businessIncentiveProducts: Array<IMixProduct>;
}
