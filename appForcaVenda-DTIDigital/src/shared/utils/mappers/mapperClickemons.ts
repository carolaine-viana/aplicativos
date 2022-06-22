import { IClickemon } from '@shared/types';
import { IClickemonReadDto } from '@shared/models/Clickemon/IClickemonDtos';

export const mapperClickemons = (
  record: { id: string } & IClickemon
): IClickemonReadDto | undefined => {
  if (record) {
    return {
      id: record?.id,
      cnpj: record?.cnpj,
      latitude: record?.latitude,
      longitude: record?.longitude,
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
    };
  }
};
