import React from 'react';
import { useRoleInfo } from '@shared/hooks';

interface RoleWrapperProps {
  renderRCAContent?: () => React.ReactNode;
  renderGTContent?: () => React.ReactNode;
  renderGVContent?: () => React.ReactNode;
}

const RoleWrapper: React.FC<RoleWrapperProps> = (props) => {
  const { roleInfo } = useRoleInfo();

  const renderContent = () => {
    if (roleInfo?.isRCA) {
      return props.renderRCAContent?.();
    }
    if (roleInfo?.isGT) {
      return props.renderGTContent?.();
    }
    if (roleInfo?.isGV) {
      return props.renderGVContent?.();
    }
    return null;
  };

  return <>{renderContent()}</>;
};

export default RoleWrapper;
