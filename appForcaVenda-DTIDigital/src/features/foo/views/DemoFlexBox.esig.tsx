import React from 'react';

import {
  Typography,
  FlexBox,
  FlexCenter,
  FlexStart,
  FlexEnd,
  FlexBottom,
  FlexTop,
} from '../../../shared/components';

interface DemoFlexBoxProps {}

const DemoFlexBox: React.FC<DemoFlexBoxProps> = () => (
  <FlexBox>
    <FlexBox bg="light">
      <Typography>Flex default</Typography>
    </FlexBox>
    <FlexCenter>
      <Typography>Flex center</Typography>
    </FlexCenter>
    <FlexStart bg="light">
      <Typography>Flex left</Typography>
    </FlexStart>
    <FlexEnd>
      <Typography>Flex right</Typography>
    </FlexEnd>
    <FlexBox bg="light" space="between" direction="row">
      <Typography>Flex space</Typography>
      <Typography>Flex between</Typography>
    </FlexBox>
    <FlexBox space="around" direction="row">
      <Typography>Flex space</Typography>
      <Typography>Flex around</Typography>
    </FlexBox>
    <FlexBox bg="light" space="evenly" direction="row">
      <Typography>Flex space</Typography>
      <Typography>Flex evenly</Typography>
    </FlexBox>
    <FlexTop align="center">
      <Typography>Flex top</Typography>
    </FlexTop>
    <FlexBottom bg="light" align="center">
      <Typography>Flex bottom</Typography>
    </FlexBottom>
  </FlexBox>
);

export default DemoFlexBox;
