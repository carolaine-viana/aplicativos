import React from 'react';

import { Typography, CardPaper, Divider } from 'shared/components';
import { getCurrency } from 'shared/utils';
import {
  Container,
  ContainerHistory,
  ContainerDate,
  ContainerValue,
  CardPaperContainer,
  WrappedContainer,
  ContainerDivider,
} from './StatementSC';
import { getTransformDescription } from '../statementUtils';

interface StatementItemProps {
  statement: {
    entryDate?: string;
    entryDay?: number;
    entryDescription?: string;
    entryAmount?: number;
  };
}

const StatementItem: React.FC<StatementItemProps> = ({ statement }) => (
  <CardPaperContainer>
    <CardPaper
      alignItems="stretch"
      renderBody={() => (
        <Container>
          <WrappedContainer>
            <ContainerHistory>
              <Typography variant="overline" color="gray600" size={11} bold>
                {getTransformDescription(statement.entryDescription)}
              </Typography>
            </ContainerHistory>

            <ContainerDate>
              <Typography variant="overline" color="gray600" size={11}>
                {statement.entryDate}
              </Typography>
            </ContainerDate>
          </WrappedContainer>

          <ContainerValue>
            <Typography
              variant="overline"
              color={statement.entryAmount < 0 ? 'red600' : 'gray600'}
              size={11}
              bold
            >
              {getCurrency(statement.entryAmount)}
            </Typography>
          </ContainerValue>
          <ContainerDivider>
            <Divider color="blue50" width="312px" />
          </ContainerDivider>
        </Container>
      )}
    />
  </CardPaperContainer>
);

export default StatementItem;
