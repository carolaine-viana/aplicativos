import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import { Typography } from '@shared/components';
import themePallet from 'shared/constants/theme';

interface ITextProps {
  primary?: boolean;
}

interface DefaultButtonProps {
  selected?: boolean;
  last?: boolean;
  disabled?: boolean;
}

function getBorderCollor(selected?: boolean, disabled?: boolean) {
  if (disabled) {
    return themePallet.palette.gray200;
  }
  if (selected) {
    return themePallet.palette.blue600;
  }
  return themePallet.palette.red600;
}

export const Container = styled.View`
  flex-direction: column;
  margin-bottom: 16px;
`;

export const Content = styled.View`
  padding: 27px 22px 0;
`;

export const NewCustumerContainer = styled.View`
  padding: 0px 0px 18px 0px;
`;

export const BadgeWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
`;

export const BadgeContent = styled.View`
  flex-direction: row;
`;

export const BadgeSpace = styled.View`
  margin-right: 8px;
`;

export const ContainerStatus = styled.View`
  align-items: flex-start;
`;

export const InfoStatus = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 6px;
`;
export const InfoLastAcquisition = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const ClientCNPJ = styled(Typography)`
  margin: 12px 0;
`;

export const PinIcon = styled(Icon).attrs({
  name: 'map-pin',
})`
  color: ${({ theme }) => theme.palette.blue300};
  font-size: 24px;
  margin-right: 10px;
`;

export const Address = styled(Typography)`
  font-size: 12px;
  line-height: 14px;
  width: 80%;
`;

export const InfoAdress = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 22px 0px 5px 0px;
  width: 100%;
  margin-bottom: 8px;
`;

export const ContainerIcons = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
`;

export const ContainerButtons = styled.View<ITextProps>`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding-top: 8px;
  padding-bottom: 32px;
`;

export const DefaultButton = styled.TouchableOpacity<DefaultButtonProps>`
  flex: 1;
  padding: 8px 2px 2px 2px;
  height: 80px;
  margin-right: ${({ last }) => (last ? '0px' : '14px')};
  border-radius: 4px;
  align-items: center;
  border: 1px solid;
  border-color: ${({ selected, disabled }) => getBorderCollor(selected, disabled)};
  margin-bottom: 20px;
`;

export const DeleteButton = styled.TouchableOpacity`
  position: absolute;
  top: 14px;
  right: 18px;
`;

export const CalendarIcon = styled(Icon).attrs({
  name: 'calendar',
})`
  color: ${({ theme }) => theme.palette.blue300};
  font-size: 24px;
  margin-right: 4px;
`;

export const ClockIcon = styled(Icon).attrs({
  name: 'clock',
})`
  color: ${({ theme }) => theme.palette.blue300};
  font-size: 24px;
  margin-right: 4px;
  margin-left: 78px;
`;

export const Info = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const InfoText = styled(Typography)`
  text-align: center;
  margin-right: 12px;
  font-weight: 400;
`;

export const ClientName = styled(Typography)`
  font-size: 12px;
  margin-bottom: 12px;
`;

export const ButtonText = styled(Typography)`
  margin-top: 10px;
`;
