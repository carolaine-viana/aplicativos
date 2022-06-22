import styled from 'styled-components/native';
import { Typography } from 'shared/components';

export const Container = styled.View`
  padding: 0px 16px;
`;

export const HeaderContainer = styled.View`
  padding: 0 16px;
`;

export const ListContainer = styled.View`
  flex: 1;
  padding: 0 24px;
`;

export const SearchContainer = styled.View<{ isKeyBoardOpen: boolean }>`
  margin-bottom: 24px;
  border: ${(props) => props.theme.palette.blue100};
  border-width: 1px;
  border-radius: 36px;
  justify-content: center;
  height: 54px;
`;

export const CardPaperCustom = styled.View`
  margin-bottom: 16px;
`;

export const Content = styled.View`
  padding: 28px 24px;
`;

export const ListItemText = styled(Typography)`
  padding: 6px 0 6px 6px;
`;

export const Title = styled(Typography)`
  line-height: 17px;
`;

export const ContainerTitle = styled.View`
  margin: 36px 0 36px;
`;

export const CardContainer = styled.View`
  margin-bottom: 16px;
`;

export const CardContent = styled.View`
  padding: 26px 24px;
`;

export const DividerContainer = styled.View`
  margin: 18px 0 0px 0;
`;
