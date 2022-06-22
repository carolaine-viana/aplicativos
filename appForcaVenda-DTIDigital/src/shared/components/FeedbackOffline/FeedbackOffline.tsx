import React from 'react';
import offlineImg from '@assets/images/offline.png';
import Typography from '@shared/components/Typography/Typography';

import { Container, OfflineImage } from './FeedbackOfflineSC';

export interface FeedbackOfflineProps {
  message?: string;
  imageSize?: number;
}

const FeedbackOffline: React.FC<FeedbackOfflineProps> = ({
  message = 'Sem conexão',
  imageSize = 180,
}) => (
  <Container testID="feedback-offline">
    <OfflineImage source={offlineImg} style={{ width: imageSize, height: imageSize }} />
    <Typography variant="lead" color="primary">
      Erro!
    </Typography>
    <Typography variant="lead" color="primary" bold>
      {message}
    </Typography>
  </Container>
);

export default FeedbackOffline;
