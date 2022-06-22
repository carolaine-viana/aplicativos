import styled from 'styled-components/native';
import Typography from '@shared/components/Typography/Typography';
import { IPalette, IBackground } from '@shared/types/IThemeInterface';
import { DeviceFeatures } from 'shared/base';

export interface HeaderSCProps {
  backgroundColor?: keyof IPalette | keyof IBackground;
  hideElevation?: boolean;
}

const getElevation = (props: HeaderSCProps) => {
  if (!props.hideElevation) {
    if (DeviceFeatures.isIOS) {
      return { 'box-shadow': '1.5px 1.5px 1.5px grey' };
    }
    return {
      elevation: '3',
    };
  }
  return null;
};

const Container = styled.View<HeaderSCProps>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme, backgroundColor }) =>
    theme.palette.background[backgroundColor as keyof IBackground] ??
    theme.palette[backgroundColor as keyof IPalette]};
  width: 100%;
  height: 49px;
  z-index: 2;

  ${(props) => getElevation(props)}

  padding: 0 16px;
`;

const RightContainer = styled.View`
  right: 0px;
`;

const LeftContainer = styled.View`
  left: 0px;
  z-index: 2;
`;

const Title = styled(Typography)`
  position: absolute;
  text-align: center;
  justify-content: center;
  right: 0px;
  left: 0px;
`;

export { Container, RightContainer, LeftContainer, Title };
