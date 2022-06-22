import ModelBase from '../ModelBase';
import { ISalesIndicatorsCreateDto, ISalesIndicatorsReadDto } from './SalesIndicatorsDtos';
import { SALES_INDICATORS_TABLE_NAME } from './SalesIndicatorsSchema';

export default class SalesIndicatorsModel extends ModelBase<
  ISalesIndicatorsReadDto,
  ISalesIndicatorsCreateDto
> {
  constructor() {
    super(SALES_INDICATORS_TABLE_NAME);
  }
}
