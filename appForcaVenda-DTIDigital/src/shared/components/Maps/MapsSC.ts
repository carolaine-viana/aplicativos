import styled from 'styled-components/native';

const UserMarker = styled.View`
  height: 23px;
  width: 23px;
  background-color: ${(props) => props.theme.palette.gray200};
  border-width: 7px;
  border-color: ${(props) => props.theme.palette.blue600};
  border-radius: 11.5px;
`;
const CenterLocationButton = styled.TouchableOpacity`
  position: absolute;
  z-index: 2;
  bottom: 16px;
  right: 16px;
  height: 44px;
  width: 44px;
  background-color: ${(props) => props.theme.palette.blue600};
  border-radius: 22px;
  align-items: center;
  justify-content: center;
`;

const InvisibleTextMarker = styled.Text`
  z-index: 2;
`;

export { UserMarker, CenterLocationButton, InvisibleTextMarker };
