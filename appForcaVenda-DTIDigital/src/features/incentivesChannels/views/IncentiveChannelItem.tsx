import React from 'react';
import { Typography, CardPaper } from 'shared/components';
import { SectionContainer, SectionContent } from './IncentiveChannelSC';

interface IncentiveChannelItemProps {
  channel: string;
}

const IncentiveChannelItem: React.FC<IncentiveChannelItemProps> = ({ channel }) => (
  <SectionContainer>
    <CardPaper
      bg="light"
      alignItems="stretch"
      renderBody={() => (
        <SectionContent>
          <Typography variant="overline" color="gray600" align="left" size={12}>
            {channel}
          </Typography>
        </SectionContent>
      )}
    />
  </SectionContainer>
);

export default IncentiveChannelItem;
