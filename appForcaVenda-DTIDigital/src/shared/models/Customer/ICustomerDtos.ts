import { TCreditStatus } from 'shared/types/TCreditStatus';

export interface ICustomerCreateDto {
  id?: string;
  tradeName?: string;
  companyName?: string;
  cnpj?: string;
  latitude?: number;
  longitude?: number;
  visitingStreet?: string;
  visitingNumber?: string;
  visitingComplement?: string;
  visitingCity?: string;
  visitingState?: string;
  visitingNeighborhood?: string;
  visitingZipCode?: string;
  territoryInclusionDate?: string;
  lastPurchaseDate?: string;
  newCustomer?: boolean;
  creditStatus?: TCreditStatus;
  businessUnit?: string;
  purchasedThisMonth?: boolean;
  phoneNumber: string;
  buyerName: string;
  buyerPhoneNumber: string;
}
export interface ICustomerReadDto extends ICustomerCreateDto {
  visitingAddress?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
