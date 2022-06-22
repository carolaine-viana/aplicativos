import React from 'react';
import { Typography, CardPaper } from 'shared/components';
import { ListItemText, Content, CardPaperCustom } from './IncentivesCustomersSC';

interface IncentivesCustomersBusinessProps {
  customerBusiness: {
    id?: string;
    name?: string;
    operationType?: string;
  };
}

const IncentivesCustomersBusiness: React.FC<IncentivesCustomersBusinessProps> = ({
  customerBusiness,
}) => (
  <CardPaperCustom>
    <CardPaper
      bg="light"
      alignItems="stretch"
      renderBody={() => (
        <Content>
          <ListItemText variant="overline" color="gray600">
            COD:
            <Typography variant="overlineMedium" color="gray600" fallbackText="-">
              {` ${customerBusiness.id}`}
            </Typography>
          </ListItemText>
          <ListItemText variant="overline" color="gray600">
            NOME:
            <Typography variant="overlineMedium" color="gray600" fallbackText="-">
              {` ${customerBusiness.name}`}
            </Typography>
          </ListItemText>
          <ListItemText variant="overline" color="gray600">
            OPERAÇÃO:
            <Typography variant="overlineMedium" color="gray600" fallbackText="-">
              {` ${customerBusiness.operationType}`}
            </Typography>
          </ListItemText>
        </Content>
      )}
    />
  </CardPaperCustom>
);

export default IncentivesCustomersBusiness;
