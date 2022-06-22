import React from 'react';

import { ModalPopUp } from '@shared/components';
import { Container, ModalTitle, ModalDescription } from './ModalNotificationSC';

interface Props {
  modalVisible: boolean;
  closeModal: () => void;
}

function ModalNotification({ modalVisible, closeModal }: Props) {
  return (
    <ModalPopUp visible={modalVisible} onCloseModal={closeModal} isNotification>
      <Container>
        <ModalTitle color="primary" variant="titleLarge">
          Title
        </ModalTitle>
        <ModalDescription color="default" variant="overline" size={14} numberOfLines={2}>
          Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title
          Title Title Title
        </ModalDescription>
      </Container>
    </ModalPopUp>
  );
}
export default ModalNotification;
