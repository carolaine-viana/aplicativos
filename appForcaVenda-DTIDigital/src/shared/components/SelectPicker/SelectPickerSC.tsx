import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  height: 70px;
  border-radius: 17px;
  padding: 0 16px;
  font-size: 18px;
  border: ${(props) => props.theme.palette.blue100};
  border-width: 1px;
  background-color: ${(props) => props.theme.palette.blue50};
  justify-content: center;
`;

export const LabelContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Label = styled.Text`
  font-size: 14px;
  color: ${(props) => props.theme.palette.black};
`;

export const HeaderModal = styled.View`
  align-items: flex-end;
  padding: 16px 8px 8px 0;
`;

export const Options = styled.TouchableOpacity`
  min-height: 70px;
  border-radius: 17px;
  padding: 0 16px;
  font-size: 18px;
  border: ${(props) => props.theme.palette.blue100};
  border-width: 1px;
  justify-content: center;
`;

export const ContainerOptions = styled.View`
  margin-bottom: 8px;
`;
export const ContainerList = styled.View`
  padding: 0 16px;
`;

export const SearchContainer = styled.View`
  margin-top: 26px;
  margin-bottom: 26px;
  border: ${(props) => props.theme.palette.blue100};
  border-width: 1px;
  border-radius: 35px;
  justify-content: center;
`;
