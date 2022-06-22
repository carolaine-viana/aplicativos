import { TRole } from 'shared/types';

export interface IUserCreateDto {
  id?: string;
  managerId?: string;
  name?: string;
  earningsBalance?: number;
  role?: TRole;
  cpf?: string;
}

export interface IUserReadDto extends IUserCreateDto {
  createdAt?: Date;
  updatedAt?: Date;
}
