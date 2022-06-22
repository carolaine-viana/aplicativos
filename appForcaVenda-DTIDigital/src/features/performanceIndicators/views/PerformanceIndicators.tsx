import React from 'react';
import RoleWrapper from '@shared/components/RoleWrapper/RoleWrapper';
import ManagerIndicators from './ManagerIndicators';
import RcaIndicators from './RcaIndicators';
// import SalesForecast from './SalesForecast';

interface PerformanceIndicatorsProps {
  setModalVisible: (isVisible: boolean) => void;
}

const PerformanceIndicators: React.FC<PerformanceIndicatorsProps> = ({
  setModalVisible,
  onPressInfo,
}) => {
  const renderGVContent = () => (
    <>
      <ManagerIndicators />
      {/* <SalesForecast /> */}
    </>
  );

  return (
    <RoleWrapper
      renderRCAContent={() => (
        <RcaIndicators
          onModalOpen={() => setModalVisible(true)}
          onPressInfo={(indicator) => onPressInfo(indicator)}
        />
      )}
      renderGTContent={() => <ManagerIndicators />}
      renderGVContent={renderGVContent}
    />
  );
};

export default PerformanceIndicators;
