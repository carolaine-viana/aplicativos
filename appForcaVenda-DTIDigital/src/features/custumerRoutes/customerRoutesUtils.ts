import {
  IClickemonResponse,
  IMarker,
  IVisitCustomer,
  IVisitCustomerTable,
  IVisitReadDto,
} from '@shared/types';
import { IClickemonCreateDto } from '@shared/models/Clickemon';
import { DeviceFeatures } from 'shared/base';

import clickPinImage from '@assets/images/click-pin.png';
import clickClickemonImage from '@assets/images/click-clickemon.png';
import buttonGpsImage from '@assets/images/button-gps.png';

export const transformClickemonResponseCreate = (
  clickemonList: IClickemonResponse
): IClickemonCreateDto[] =>
  clickemonList?.customers?.map(
    (value): IClickemonCreateDto => ({
      id: value.id,
      cnpj: value.cnpj,
      companyName: value.company_name,
      latitude: value.latitude,
      longitude: value.longitude,
      tradeName: value.trade_name,
      visitingCity: value.visiting_city,
      visitingComplement: value.visiting_complement,
      visitingNeighborhood: value.visiting_neighborhood,
      visitingNumber: value.visiting_number,
      visitingState: value.visiting_state,
      visitingStreet: value.visiting_street,
      visitingZipCode: value.visiting_zip_code,
      newCustomer: value.new_customer,
      creditStatus: value.credit_status,
    })
  );

export const mapperVisits = (record: IVisitCustomerTable): IVisitCustomer | undefined => {
  if (record) {
    return {
      id: record.id,
      customerId: record.customer_id,
      schedule: record.schedule,
      latitude: record.latitude,
      longitude: record.longitude,
    };
  }
};

export const filterPendingVisits = (visits: IVisitReadDto[]) =>
  visits.filter((visit) => !visit.visitCompleted);

export const mountGpsUrl = (cordinates: IMarker, companyName: string) => {
  let scheme = '';
  const latLng = `${cordinates.latitude},${cordinates.longitude}`;

  if (DeviceFeatures.isAndroid) {
    scheme = 'geo:0,0?q=';
    return `${scheme}${latLng}(${companyName})`;
  }
  if (DeviceFeatures.isIOS) {
    scheme = 'maps:0,0?q=';
    return `${scheme}${companyName}&ll=${latLng}`;
  }
};

export const carouselItens = [
  {
    image: clickPinImage,
    text: 'Toque nos pins para visualizar as informações do cliente',
  },
  {
    image: clickClickemonImage,
    text: 'Os pontos verdes são os Clickemons. Toque nele para visualizar as informações.',
  },
  {
    image: buttonGpsImage,
    text: 'Você também pode compartilhar a rota com seu aplicativo de gps o percurso até o cliente.',
  },
];
