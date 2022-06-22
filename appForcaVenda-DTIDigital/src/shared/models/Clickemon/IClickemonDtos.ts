import { TCreditStatus } from 'shared/types';

export interface IClickemonCreateDto {
  id?: number;
  cnpj?: string;
  companyName?: string;
  latitude?: number;
  longitude?: number;
  tradeName?: string;
  visitingCity?: string;
  visitingComplement?: string;
  visitingNeighborhood?: string;
  visitingNumber?: string;
  visitingState?: string;
  visitingStreet?: string;
  visitingZipCode?: string;
  newCustomer?: boolean;
  creditStatus?: TCreditStatus;
}

export interface IClickemonReadDto extends IClickemonCreateDto {
  createdAt?: Date;
  updatedAt?: Date;
}
