import { IVisitCustomer, IVisitCustomerTable } from '@shared/types';

export const mapperVisits = (record: IVisitCustomerTable): IVisitCustomer | undefined => {
  if (record) {
    return {
      id: record.id,
      cnpj: record.cnpj,
      customerId: record.customer_id,
      schedule: record.schedule,
      latitude: record.latitude,
      longitude: record.longitude,
      tradeName: record.trade_name,
      companyName: record.company_name,
      visitCompleted: record.visit_completed,
      visitingComplement: record.visiting_complement,
      visitingState: record.visiting_state,
      visitingCity: record.visiting_city,
      visitingNeighborhood: record.visiting_neighborhood,
      visitingNumber: record.visiting_number,
      visitingStreet: record.visiting_street,
      visitingZipCode: record.visiting_zip_code,
      newCustomer: record.new_customer,
      creditStatus: record.credit_status,
      businessUnit: record.business_unit,
      lastPurchaseDate: record.last_purchase_date,
      phoneNumber: record.phone_number,
      buyerName: record.buyer_name,
      buyerPhoneNumber: record.buyer_phone_number,
    };
  }
};
