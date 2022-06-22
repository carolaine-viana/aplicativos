import { IUserCreateDto } from 'shared/models/User/IUserDtos';
import { Profiles, IGVLoginResponse, IUserRoleResponse } from 'shared/types';

export const checkUserLoginGV = (userLogin: string) => {
  const reg = new RegExp('^[0-9]+$');
  const loginIsOnlyNumbers = reg.test(userLogin);

  return !loginIsOnlyNumbers;
};

export const mountUserGVInfo = (loginResponseData: IGVLoginResponse): IUserCreateDto => {
  const userInfo = loginResponseData.sales_managers[0];
  return {
    id: userInfo.id.toString(),
    name: userInfo.name,
    role: Profiles.GV,
  };
};

export const extractUserId = (data: IUserRoleResponse) => data.sales_reps[0].id.toString();
