import React from 'react';

import { Typography, FlexBox } from '../../../shared/components';
import { DeviceFeatures } from '../../../shared/base';

interface DemoTypographyProps {}

const DemoTypography: React.FC<DemoTypographyProps> = () => (
  <FlexBox>
    <Typography variant="header">HEADER</Typography>
    <Typography variant="title">TITLE</Typography>
    <Typography variant="lead">LEAD</Typography>
    <Typography variant="body">BODY</Typography>
    <Typography variant="bodyMedium">BODYMEDIUM</Typography>
    <Typography variant="overline">OVERLINE</Typography>
    <Typography variant="overlineM">overlineM</Typography>

    <FlexBox bg="light">
      <Typography color="default">COLOR DEFAULT</Typography>
      <Typography color="primary">COLOR PRIMARY</Typography>
      <Typography color="secondary">COLOR SECONDARY</Typography>
      <Typography>TESTE</Typography>
    </FlexBox>
    <FlexBox bg="dark">
      <Typography color="light">COLOR LIGHT</Typography>
    </FlexBox>
    <FlexBox bg="light">
      <Typography>width: {DeviceFeatures.dimensions.width}</Typography>
      <Typography>height: {DeviceFeatures.dimensions.height}</Typography>
      <Typography>scale: {DeviceFeatures.dimensions.scale}</Typography>
      <Typography>fontScale: {DeviceFeatures.dimensions.fontScale}</Typography>
      <Typography>is android: {DeviceFeatures.isAndroid}</Typography>
    </FlexBox>
  </FlexBox>
);

export default DemoTypography;
