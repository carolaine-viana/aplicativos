import React from 'react';

import { Typography, CardPaper } from 'shared/components';
import { ListItemText, Content, CardContainer } from './IncentivesCustomersSC';

interface IncentiveCustomersItemProps {
  customer: {
    state?: string;
    businessSegment?: string;
    businessUnit?: string;
  };
}

const IncentivesCustomersItem: React.FC<IncentiveCustomersItemProps> = ({ customer }) => (
  <CardContainer>
    <CardPaper
      bg="light"
      alignItems="stretch"
      renderBody={() => (
        <Content>
          <ListItemText variant="overline" color="gray600">
            ESTADO:{' '}
            <Typography variant="overlineMedium" fallbackText="-" color="gray600">
              {`${customer.state}`}
            </Typography>
          </ListItemText>
          <ListItemText variant="overline" color="gray600">
            SEGMENTO:{' '}
            <Typography variant="overlineMedium" fallbackText="-" color="gray600">
              {`${customer.businessSegment}`}
            </Typography>
          </ListItemText>
          <ListItemText variant="overline" color="gray600">
            UNID DE NEGÓCIO:{' '}
            <Typography variant="overlineMedium" fallbackText="-" color="gray600">
              {`${customer.businessUnit}`}
            </Typography>
          </ListItemText>
        </Content>
      )}
    />
  </CardContainer>
);

export default IncentivesCustomersItem;
