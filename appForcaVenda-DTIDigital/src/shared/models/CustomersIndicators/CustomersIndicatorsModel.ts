import ModelBase from '../ModelBase';
import {
  ICustomersIndicatorsCreateDto,
  ICustomersIndicatorsReadDto,
} from './CustomersIndicatorsDtos';
import { CUSTOMERS_INDICATORS_TABLE_NAME } from './CustomersIndicatorsSchema';

export default class CustomersIndicatorsModel extends ModelBase<
  ICustomersIndicatorsReadDto,
  ICustomersIndicatorsCreateDto
> {
  constructor() {
    super(CUSTOMERS_INDICATORS_TABLE_NAME);
  }
}
