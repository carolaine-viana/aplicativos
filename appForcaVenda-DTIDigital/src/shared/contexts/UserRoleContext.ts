/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext } from 'react';
import { IRoleInfo, TRole } from 'shared/types';

interface IUserRoleContext {
  roleInfo: IRoleInfo;
  signOut: () => void;
}

const UserRoleContext = createContext<Partial<IUserRoleContext>>({});
export default UserRoleContext;
