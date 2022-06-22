import ModelBase from '@shared/models/ModelBase';
import { IClickemonReadDto, IClickemonCreateDto } from './IClickemonDtos';

export default class ClickemonModel extends ModelBase<IClickemonReadDto, IClickemonCreateDto> {
  constructor() {
    super('clickemons');
  }
}
