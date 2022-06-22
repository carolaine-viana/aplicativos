import { ICustomerReadDto } from '../../shared/models/Customer';

export const mountAddress = (customer: ICustomerReadDto): string =>
  `${customer?.visitingStreet}, ${customer?.visitingNeighborhood}, ${customer?.visitingNumber}, ${customer?.visitingCity}, ${customer?.visitingState}`;
