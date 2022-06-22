import ModelBase from '../ModelBase';
import { IUserCreateDto, IUserReadDto } from './IUserDtos';
import { TABLE_NAME } from './UserSchema';

export default class UserModel extends ModelBase<IUserCreateDto, IUserReadDto> {
  constructor() {
    super(TABLE_NAME);
  }
}
