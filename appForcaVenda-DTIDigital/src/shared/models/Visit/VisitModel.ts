import ModelBase from '@shared/models/ModelBase';
import { IVisitReadDto, IVisitCreateDto } from './IVisitDtos';

export default class VisitModel extends ModelBase<IVisitReadDto, IVisitCreateDto> {
  constructor() {
    super('visits');
  }
}
