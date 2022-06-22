import React from 'react';
import RoleWrapper from 'shared/components/RoleWrapper/RoleWrapper';
import { ITeamIndicator } from '@shared/types';
import ManagerIndicatorsDetail from '../../performanceIndicators/views/ManagerIndicatorsDetails';

interface DashDetailsProps {
  route: { params: { indicators: ITeamIndicator } };
}
const DashDetail: React.FC<DashDetailsProps> = ({ route }) => (
  <RoleWrapper
    renderGVContent={() => <ManagerIndicatorsDetail indicators={route.params.indicators} />}
    renderGTContent={() => <ManagerIndicatorsDetail indicators={route.params.indicators} />}
  />
);

export default DashDetail;
