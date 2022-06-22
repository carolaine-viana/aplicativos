import React, { useState, useEffect } from 'react';
import { useRoleInfo } from '@shared/hooks';
import { EnvWrapper, FlexCenter, Typography } from '@shared/components';
import { CustomersIndicators } from '@features/performanceIndicators';
import { ObjectivesContainer } from './PerformanceSC';
import PerformanceManager from '../services/PerformanceManager';
import OrdersIndicators from './OrdersIndicators';
import ProductsIndicators from './ProductsIndicators';
import SalesIndicators from './SalesIndicators';

interface IRcaIndicatorsProps {
  rcaId?: string;
  onModalOpen?: () => void;
}

const RcaIndicators: React.FC<IRcaIndicatorsProps> = ({ rcaId, onPressInfo }) => {
  const { roleInfo } = useRoleInfo();
  const [indicators, setIndicators] = useState({
    customersIndicators: null,
    salesIndicators: null,
  });

  useEffect(() => {
    if (roleInfo) {
      const Manager = new PerformanceManager();
      const callSyncDados = async () => {
        const { customersIndicators, salesIndicators } = await Manager.getIndicators(
          roleInfo?.isRCA,
          rcaId
        );

        setIndicators({
          customersIndicators,
          salesIndicators,
        });
      };
      callSyncDados();
    }
  }, [roleInfo, rcaId]);

  function renderContent() {
    if (indicators) {
      return (
        <>
          <FlexCenter bg="light">
            <ObjectivesContainer>
              <Typography variant="titleMedium">Meus objetivos</Typography>
            </ObjectivesContainer>

            <SalesIndicators
              testID="SalesIndicators"
              data={indicators.salesIndicators}
              onPressInfo={(indicator) => onPressInfo(indicator)}
            />
          </FlexCenter>
          <FlexCenter bg="light">
            <CustomersIndicators
              testID="CustomersIndicators"
              data={indicators.customersIndicators}
              onPressInfo={(indicator) => onPressInfo(indicator)}
            />
          </FlexCenter>
          <EnvWrapper
            renderHomContent={() => (
              <>
                <FlexCenter bg="light">
                  <OrdersIndicators testID="ordersIndicators" />
                </FlexCenter>
                <FlexCenter bg="light">
                  <ProductsIndicators testID="productsIndicators" />
                </FlexCenter>
              </>
            )}
          />
        </>
      );
    }
    return null;
  }

  return <>{renderContent()}</>;
};

export default RcaIndicators;
