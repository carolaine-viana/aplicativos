import React from 'react';
import { TouchableOpacity } from 'react-native';
import AnimatedViewScale from '../AnimatedViewScale/AnimatedViewScale';
import DefaultIcon from '../DefaultIcon/DefaultIcon';
import {
  ModalBackDropProps,
  ModalBackDrop,
  ModalContainer,
  ModalHeader,
  ModalContent,
  CloseModalNotification,
  ContainerCloseModal,
} from './ModalPopUpSC';

export interface ModalPopUpProps extends ModalBackDropProps {
  onCloseModal?: () => void;
  onOpenModal?: () => void;
  isNotification?: boolean;
}

const ModalPopUp: React.FC<ModalPopUpProps> = (props) => {
  const {
    visible,
    onCloseModal,
    children,
    isNotification,
    customStyles = {
      backdropColor: 'rgba(0,0,0,0.7)',
      modalBorderRadius: 4,
      positionTop: 0,
    },
  } = props;

  return (
    <>
      <ModalBackDrop visible={visible} customStyles={customStyles}>
        <AnimatedViewScale showContent={visible}>
          {isNotification && (
            <ContainerCloseModal>
              <CloseModalNotification onPress={() => onCloseModal?.()}>
                <DefaultIcon name="x" size={26} color="light" />
              </CloseModalNotification>
            </ContainerCloseModal>
          )}
          <ModalContainer customStyles={customStyles}>
            <ModalHeader>
              {!isNotification && (
                <TouchableOpacity onPress={() => onCloseModal?.()}>
                  <DefaultIcon name="x" size={26} />
                </TouchableOpacity>
              )}
            </ModalHeader>
            <ModalContent>{children}</ModalContent>
          </ModalContainer>
        </AnimatedViewScale>
      </ModalBackDrop>
    </>
  );
};

export default ModalPopUp;
