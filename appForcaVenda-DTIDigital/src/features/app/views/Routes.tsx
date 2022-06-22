import React, { useState, useEffect } from 'react';

import NetworkStatus from '@shared/components/NetworkStatus/NetworkStatus';
import UserRoleContext from '@shared/contexts/UserRoleContext';
import { IRoleInfo } from '@shared/types';
import { Error, FlexCenter, Spinner } from '@shared/components';
import { getUserLogin } from '@shared/utils/asyncStorage';
import AppManager from '../services/AppManager';
import { mountRoleInfo } from '../appUtils';
import AppRoutes from './App.Routes';
import AuthRoutes from './Auth.Routes';

const manager = new AppManager();

const Routes: React.FC = () => {
  const [error, setError] = useState(false);
  const [firstRender, setFirstRender] = useState<boolean>(true);

  const [roleInfo, setRoleInfo] = useState<IRoleInfo>({
    role: undefined,
    isRCA: false,
    isGT: false,
    isGV: false,
  });

  const onLogin = async () => {
    try {
      const user = await getUserLogin();
      const userRole = await manager.getUserRole();

      if (user && userRole) {
        setRoleInfo(mountRoleInfo(userRole));
      }
    } catch {
      setError(true);
    } finally {
      setFirstRender(false);
    }
  };

  const signOut = async () => {
    setFirstRender(true);
    try {
      await manager.logout();
    } catch {
    } finally {
      setRoleInfo({
        role: undefined,
        isRCA: true,
        isGT: false,
        isGV: false,
      });

      setFirstRender(false);
    }
  };

  useEffect(() => {
    onLogin();
  }, []);

  const userAuthorized = roleInfo.role;

  if (firstRender) {
    return (
      <FlexCenter bg="dark">
        <Spinner color="light" size={32} />
      </FlexCenter>
    );
  }

  if (error) {
    return <Error />;
  }

  return (
    <UserRoleContext.Provider value={{ roleInfo, signOut }}>
      <NetworkStatus />
      {!userAuthorized ? <AuthRoutes onLogin={onLogin} /> : <AppRoutes />}
    </UserRoleContext.Provider>
  );
};

export default Routes;
