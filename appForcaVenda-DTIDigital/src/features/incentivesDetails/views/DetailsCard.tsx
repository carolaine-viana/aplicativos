import React from 'react';
import { Typography, Divider, CardPaper } from 'shared/components';

import { DetailsTabHeader, DetailsTabBody, DetailsTabContent } from './DetailsTabSC';

interface DetailsCardProps {
  title: string;
  id: string;
  renderBody: () => React.ReactNode;
  renderFooter?: () => React.ReactNode;
}

const DetailsCard: React.FC<DetailsCardProps> = ({ title, renderBody, renderFooter }) => {
  const renderContent = () => (
    <DetailsTabContent>
      <DetailsTabHeader>
        <Typography variant="bodyMedium" color="primary" size={16}>
          {title}
        </Typography>
      </DetailsTabHeader>
      <Divider color="blue100" />
      <DetailsTabBody>{renderBody()}</DetailsTabBody>
      {renderFooter && <Divider color="blue100" />}
      {renderFooter?.()}
    </DetailsTabContent>
  );

  return <CardPaper bg="light" renderBody={renderContent} />;
};

export default React.memo(DetailsCard, (p, n) => p.id === n.id);
