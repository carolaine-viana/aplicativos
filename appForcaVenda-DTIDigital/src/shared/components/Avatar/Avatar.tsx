import React from 'react';
import { getNameLetters } from 'shared/utils';
import Typography from '../Typography/Typography';
import { AvatarContainer } from './AvatarSC';

interface AvatarProps {
  name: string;
}

const Avatar: React.FC<AvatarProps> = ({ name }) => (
  <AvatarContainer>
    <Typography color="light" variant="titleMedium">
      {getNameLetters(name)}
    </Typography>
  </AvatarContainer>
);

export default Avatar;
