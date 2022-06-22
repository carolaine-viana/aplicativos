import { Typography } from 'shared/components';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  /* justify-content: center;
  align-items: center; */
  /* padding: 0 24px; */
`;

export const Content = styled.View`
  width: 100%;
  flex: 1;
`;

export const SectionContainer = styled.View`
  margin-bottom: 12px;
  align-items: flex-start;
  height: 128px;
  padding: 0 24px;
`;

export const SectionContent = styled.View`
  padding: 10px 21px 10px 21px;
  margin: 0 4px;
  height: 100%;
`;

export const SectionTitle = styled(Typography)`
  margin: 10px 0;
`;
