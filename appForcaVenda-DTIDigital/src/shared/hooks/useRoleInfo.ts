// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useContext } from 'react';
import UserRoleContext from '@shared/contexts/UserRoleContext';

export const useRoleInfo = () => {
  const { roleInfo, signOut } = useContext(UserRoleContext);

  return {
    roleInfo,
    signOut,
  };
};
