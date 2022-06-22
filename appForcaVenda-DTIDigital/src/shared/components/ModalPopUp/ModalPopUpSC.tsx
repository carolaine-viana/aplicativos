import { DeviceFeatures } from 'shared/base';
import styled from 'styled-components/native';

export interface ModalBackDropProps {
  visible: boolean;
  customStyles?: {
    backdropColor?: string;
    modalBorderRadius?: number;
    positionTop?: number;
  };
}

const ModalBackDrop = styled.View<ModalBackDropProps>`
  background-color: ${(props) =>
    props.visible ? props.customStyles?.backdropColor : 'transparent'};
  position: ${(props) => (props.visible ? 'absolute' : 'relative')};
  align-self: center;
  justify-content: center;
  top: ${(props) => props.customStyles?.positionTop || 0}px;
  height: ${DeviceFeatures.dimensions.height}px;
  width: 100%;
  padding: 0 20px;
  z-index: 3;
`;

const ModalContainer = styled.View<Omit<ModalBackDropProps, 'visible'>>`
  background-color: #fff;
  border-radius: 30px;
  elevation: 20;
  padding: 16px;
  z-index: 4;
`;

const ModalHeader = styled.View`
  width: 100%;
  align-items: flex-end;
`;
const CloseModalNotification = styled.Pressable`
  width: 46px;
  height: 46px;
  border-radius: 23px;
  background-color: ${({ theme }) => theme.palette.blue300};
  align-items: center;
  justify-content: center;
  position: absolute;
`;

const ContainerCloseModal = styled.View`
  z-index: 5;
  flex-direction: row;
  justify-content: flex-end;
  margin: 0px -10px 10px;
`;

const ModalContent = styled.View`
  justify-content: center;
  align-items: center;
`;

export {
  ModalBackDrop,
  ModalContainer,
  ContainerCloseModal,
  ModalContent,
  ModalHeader,
  CloseModalNotification,
};
