/**
 * Use this to apply business rules on data input/output
 */

import { getUserLogin } from '@shared/utils/asyncStorage';
import BaseManager from '@shared/base/api/BaseManager';
import { IVisitCustomer, IClickemonReadDto } from '@shared/types';
import ClickemonModel from '@shared/models/Clickemon/ClickemonModel';
import { mapperClickemons } from 'shared/utils/mappers/mapperClickemons';
import CustomerRoutesRepository from './CustomerRoutesRepository';
import { transformClickemonResponseCreate } from '../customerRoutesUtils';

export class CustomerRoutesManager extends BaseManager {
  repo: CustomerRoutesRepository;

  clickemonModel: ClickemonModel;

  constructor() {
    super();
    this.repo = new CustomerRoutesRepository();
    this.clickemonModel = new ClickemonModel();
  }

  public async syncClickemons(latitude: number, longitude: number, radius: number) {
    try {
      const userLogin = await getUserLogin();

      if (userLogin) {
        const response = await this.repo.getClickemons(userLogin, latitude, longitude, radius);

        const transformedData = transformClickemonResponseCreate(response.data);

        await this.repo.deleteAll();
        await this.repo.insertMany(transformedData);
      }
    } catch {}
  }

  public async getClickemons(
    latitude: number,
    longitude: number,
    radius: number
  ): Promise<IClickemonReadDto[] | undefined> {
    try {
      await this.syncClickemons(latitude, longitude, radius);
      const clickemons = await this.clickemonModel.getAllLocal(mapperClickemons);
      return clickemons as IClickemonReadDto[];
    } catch (error) {
      this.handleError(error);
    }
  }

  public async getCustomerRoutes(): Promise<IVisitCustomer[] | undefined> {
    try {
      const visits = await this.repo.getVisits();
      return visits as IVisitCustomer[];
    } catch (error) {
      this.handleError(error);
    }
  }

  public async getCustomer(id: string, isClickemon = false) {
    try {
      if (isClickemon) {
        const clickemon = await this.clickemonModel.getById(id.toString());
        return clickemon;
      }
      const customer = await this.repo.getCustomerById(id);
      return customer;
    } catch (error) {
      return this.handleError(error);
    }
  }
}
