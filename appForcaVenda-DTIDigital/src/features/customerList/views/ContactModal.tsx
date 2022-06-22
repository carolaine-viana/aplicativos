import React from 'react';
import { View } from 'react-native';

import { DefaultIcon, ModalPopUp, Typography, Divider } from '@shared/components';
import { ICustomerReadDto } from '@shared/models';
import { DeviceFeatures } from '@shared/base';

import { Container, Wrapper, Contact, ContactWrapper, EmptyContentPhone } from './ContactModalSC';

interface ContactModalProps {
  modalVisible: boolean;
  onCloseModal: () => void;
  selectedCustomer: ICustomerReadDto | null | undefined;
}

const ContactModal: React.FC<ContactModalProps> = ({
  modalVisible,
  onCloseModal,
  selectedCustomer,
}) => {
  function handleCall(whoToCall: 'buyer' | 'customer') {
    if (selectedCustomer) {
      DeviceFeatures.callPhone(
        whoToCall === 'buyer' ? selectedCustomer.buyerPhoneNumber : selectedCustomer.phoneNumber
      );
    }
  }

  const isThereAnyNumber = selectedCustomer?.phoneNumber || selectedCustomer?.buyerPhoneNumber;
  return (
    <ModalPopUp visible={modalVisible} onCloseModal={onCloseModal}>
      {!isThereAnyNumber ? (
        <EmptyContentPhone>
          <Typography variant="bodyMedium" color="red600">
            Telefones não encontrados
          </Typography>
        </EmptyContentPhone>
      ) : (
        <Container>
          <Typography variant="bodyMedium">Escolha um número</Typography>

          <Wrapper>
            {selectedCustomer.phoneNumber !== '' && (
              <>
                <Typography variant="overline" color="blue600">
                  {selectedCustomer?.tradeName}
                </Typography>
                <ContactWrapper onPress={() => handleCall('customer')}>
                  <Typography variant="bodyMedium" bold color="gray500">
                    {selectedCustomer?.phoneNumber}
                  </Typography>
                  <View testID="customerPhoneIcon">
                    <DefaultIcon name="phone" size={16} color="primary" />
                  </View>
                </ContactWrapper>
                <Divider color="blue100" />
              </>
            )}
            <Contact>
              {selectedCustomer.buyerPhoneNumber !== '' && (
                <>
                  <Typography variant="overline" color="blue600">
                    {selectedCustomer?.buyerName}
                  </Typography>
                  <ContactWrapper onPress={() => handleCall('buyer')}>
                    <Typography variant="bodyMedium" bold color="gray500">
                      {selectedCustomer?.buyerPhoneNumber}
                    </Typography>
                    <View testID="buyerPhoneIcon">
                      <DefaultIcon name="phone" size={16} color="primary" />
                    </View>
                  </ContactWrapper>
                </>
              )}
            </Contact>
          </Wrapper>
        </Container>
      )}
    </ModalPopUp>
  );
};

export default ContactModal;
