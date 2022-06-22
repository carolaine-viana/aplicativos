import styled from 'styled-components/native';
import { Typography } from '@shared/components';

interface ClickemonProps {
  color: string;
}

export const Container = styled.View`
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
`;

export const FooterClickemons = styled.View`
  height: 40px;
  background-color: ${({ theme }) => theme.palette.background.default};
  padding-right: 19px;
`;

export const ClickemonsBadge = styled.View`
  height: 20px;
  width: 20px;
  background-color: ${({ theme }) => theme.palette.green600};
  margin-right: 6px;
  border-radius: 10px;
`;

export const ClickemonMarker = styled.View<ClickemonProps>`
  height: 20px;
  width: 20px;
  background-color: ${({ theme, color }) => theme.palette[color]};
  border-radius: 10px;
`;

export const DetailsContainer = styled.View`
  height: 45%;
  padding: 20px 20px 16px 20px;
  background-color: ${({ theme }) => theme.palette.background.default};
  justify-content: space-between;
`;

export const CompanyName = styled.View`
  margin-bottom: 4px;
`;

export const CNPJCode = styled.View`
  margin-bottom: 24px;
`;

export const ButtonGPS = styled.View`
  width: 200px;
`;

export const ButtonContainer = styled.View`
  margin-top: 8px;
  width: 100%;
  align-items: center;
`;

export const InfoContainer = styled.View`
  height: 50%;
`;

export const SegmentContainer = styled.View`
  margin-top: 8px;
`;

export const CarouselItem = styled.View`
  width: 320px;
  height: 320px;
  align-items: center;
  justify-content: center;
  padding: 0 48px;
`;

export const CarouselText = styled(Typography)`
  text-align: center;
  margin-top: 16px;
`;
