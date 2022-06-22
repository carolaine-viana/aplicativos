import React from 'react';
import FeatureFlag from '@shared/base/FeatureFlag';

interface EnvWrapperProps {
  renderHomContent?: () => React.ReactNode;
  renderProdContent?: () => React.ReactNode;
}

const EnvWrapper: React.FC<EnvWrapperProps> = (props) => {
  const flagInstance = FeatureFlag.getInstance();

  const env = flagInstance.getEnv();

  const renderContent = () => {
    if (env === 'hom' && props.renderHomContent) {
      return props.renderHomContent();
    }
    if (env === 'prod' && props.renderProdContent) {
      return props.renderProdContent();
    }

    return null;
  };

  return <>{renderContent()}</>;
};

export default EnvWrapper;
