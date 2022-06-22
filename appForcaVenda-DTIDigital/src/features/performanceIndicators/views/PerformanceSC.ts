import { FlexCenter, FlexBox, Typography } from 'shared/components';
import styled from 'styled-components/native';

export const IndicatorsWrapper = styled.View`
  width: 100%;
`;

export const Wrapper = styled.View`
  padding: 16px;
`;

export const SpaceSeparator = styled.View`
  height: 26px;
`;

const Container = styled(FlexCenter)`
  padding: 0 0 16px 0;
`;

const Content = styled.View`
  padding: 0 32px 8px 32px;
  width: 327px;
`;

const ContentGT = styled.View`
  padding: 16px;
  width: 327px;
`;

const TitleContent = styled.View`
  padding-bottom: 36px;
`;
const ContainerDashManager = styled.View`
  padding: 24px 16px;
  width: 326px;
`;

const RowContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const ValueContent = styled.View`
  margin-top: 6px;
`;

const ContainerProgress = styled.View`
  margin-bottom: 8px;
`;

const DetailsButtonContainer = styled(FlexBox)`
  padding: 4px 20px 4px 4px;
  height: 48px;
  flex-direction: row;
  flex: 0;
  align-items: center;
  border-radius: 16px;
  margin-top: 28px;
`;

const DetailsIconContainer = styled(FlexCenter)`
  height: 48px;
  width: 48px;
  border-radius: 16px;
  background-color: ${(props) => props.theme.palette.background.default};
`;

const ColumnContent = styled.View`
  flex-direction: column;
`;

const Label = styled(Typography)`
  margin-bottom: 8px;
`;

const ObjectivesContainer = styled.View`
  margin: 16px 0 16px 0;
`;

const Value = styled(Typography)`
  margin-bottom: 24px;
`;

const OwnBrandContainer = styled.View`
  margin-top: 22px;
  align-items: center;
`;

const OwnBrandContent = styled.View`
  margin-top: 10px;
  width: 100%;
`;

export {
  OwnBrandContainer,
  OwnBrandContent,
  Content,
  RowContent,
  Container,
  ContainerDashManager,
  ValueContent,
  ContainerProgress,
  DetailsIconContainer,
  DetailsButtonContainer,
  ColumnContent,
  Label,
  ObjectivesContainer,
  Value,
  ContentGT,
  TitleContent,
};
