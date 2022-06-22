import styled from 'styled-components/native';
import { ScrollView } from 'react-native';

export const Container = styled(ScrollView).attrs({
  contentContainerStyle: {
    paddingBottom: 16,
    flexGrow: 1,
    justifyContent: 'center',
  },
})`
  flex: 1;
  height: 100%;
  padding: 0px 16px 16px 16px;
  background-color: ${({ theme }) => theme.palette.white};
`;

export const CardContainer = styled.View`
  margin-top: 24px;
`;
export const CardContentInfo = styled.View`
  margin-bottom: 16px;
`;

export const ContainerButton = styled.View`
  align-items: center;
  padding: 15px 16px 16px 16px;
`;

export const Button = styled.TouchableOpacity`
  width: 102px;
  height: 33px;
  background-color: ${({ theme }) => theme.palette.blue600};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;
