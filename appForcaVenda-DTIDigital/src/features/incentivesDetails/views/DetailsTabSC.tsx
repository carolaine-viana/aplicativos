import styled from 'styled-components/native';
import { ScrollView } from 'react-native';
import { DeviceFeatures } from 'shared/base';

export const Wrapper = styled.View`
  padding: 12px 0;
`;

export const DetailsTabContainer = styled(ScrollView).attrs({
  contentContainerStyle: {
    paddingBottom: 16,
    paddingTop: 16,
    flexGrow: 1,
    justifyContent: 'center',
  },
})`
  background-color: ${(props) => props.theme.palette.white};
  padding: 0 16px;
  position: absolute;
  top: 0px;
  left: 0;
  height: 100%;
  width: 100%;
`;

export const DetailsTabContent = styled.View`
  width: ${DeviceFeatures.dimensions.width * 0.9}px;
  padding: 0 8px;
`;

export const DetailsTabHeader = styled.View`
  padding: 14px 0;
  align-items: center;
`;

export const DetailsTabBody = styled.View`
  padding: 8px 16px;
`;

export const DetailsTabDescription = styled(DetailsTabBody)`
  padding-bottom: 32px;
  margin-bottom: 16px;
`;

export const RowContent = styled.View`
  padding: 4px 0;
  flex-direction: row;
`;

export const SectionSpace = styled.View`
  width: 100%;
  height: 22px;
`;

export const AwardCardContent = styled.View`
  padding: 24px 22px;
  height: 75px;
  background-color: ${(props) => props.theme.palette.blue50};
  border-radius: 16px;
  margin-bottom: 16px;
`;
