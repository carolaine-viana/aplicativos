import { ICustomer } from '@shared/types';
import { ICustomerReadDto } from '@shared/models/Customer/ICustomerDtos';

export const mapperCustomers = (record: { id: string } & ICustomer): ICustomerReadDto | null => {
  if (record) {
    return {
      id: record?.id,
      cnpj: record?.cnpj,
      latitude: Number(record?.latitude),
      longitude: Number(record?.longitude),
      tradeName: record?.trade_name,
      companyName: record?.company_name,
      visitingComplement: record?.visiting_complement,
      visitingCity: record?.visiting_city,
      visitingNeighborhood: record?.visiting_neighborhood,
      visitingNumber: record?.visiting_number,
      visitingStreet: record?.visiting_street,
      visitingZipCode: record?.visiting_zip_code,
      newCustomer: record?.new_customer,
      creditStatus: record?.credit_status,
      visitingState: record?.visiting_state,
      businessUnit: record?.business_unit,
      purchasedThisMonth: record?.purchased_this_month,
      phoneNumber: record?.phone_number,
      buyerName: record?.buyer_name,
      buyerPhoneNumber: record?.buyer_phone_number,
      lastPurchaseDate: record?.last_purchase_date,
    };
  }
  return null;
};
