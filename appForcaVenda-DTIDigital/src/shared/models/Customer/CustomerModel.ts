import ModelBase from '../ModelBase';
import { ICustomerReadDto, ICustomerCreateDto } from './ICustomerDtos';
import { CUSTOMERS_TABLE_NAME } from './CustomerSchema';

export default class CustomerModel extends ModelBase<ICustomerReadDto, ICustomerCreateDto> {
  constructor() {
    super(CUSTOMERS_TABLE_NAME);
  }
}
