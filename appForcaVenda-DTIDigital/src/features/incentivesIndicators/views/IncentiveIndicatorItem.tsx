import React from 'react';
import { Typography, CardPaper } from 'shared/components';
import { SectionContainer, SectionTitle, SectionContent } from './IncentiveIndicatorsSC';

interface IncentiveIndicatorItemProps {
  measure: string;
  criterion: string;
}

const IncentiveIndicatorItem: React.FC<IncentiveIndicatorItemProps> = ({ measure, criterion }) => (
  <SectionContainer>
    <CardPaper
      bg="light"
      alignItems="stretch"
      renderBody={() => (
        <SectionContent>
          <SectionTitle variant="overlineMedium" color="gray700">
            Medida
          </SectionTitle>
          <Typography variant="overline" color="gray600" align="left">
            {measure}
          </Typography>
          <SectionTitle variant="overlineMedium" color="gray700">
            Critério
          </SectionTitle>
          <Typography variant="overline" color="gray600" align="left">
            {criterion}
          </Typography>
        </SectionContent>
      )}
    />
  </SectionContainer>
);

export default IncentiveIndicatorItem;
