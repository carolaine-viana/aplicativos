import React from 'react';
import { ModalPopUp } from '@shared/components';

import { Container, Title, Description } from './CardColapseModalSC';

interface CardColapseModalProps {}

const CardColapseModal: React.FC<CardColapseModalProps> = ({
  modalVisible,
  onCloseModal,
  indicator,
}) => (
  <ModalPopUp visible={modalVisible} onCloseModal={onCloseModal}>
    <Container>
      <Title variant="bodyMedium" color="primary">
        {indicator.title}
      </Title>
      <Description variant="overline" color="gray400">
        {indicator.description}
      </Description>
    </Container>
  </ModalPopUp>
);

export default CardColapseModal;
