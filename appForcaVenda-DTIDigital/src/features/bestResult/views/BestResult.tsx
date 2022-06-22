import React, { useCallback } from 'react';

import { DefaultIcon, FallbackWrapper, ModalPopUp, Typography, Divider } from '@shared/components';
import { usePromise, useRoleInfo } from '@shared/hooks';
import BestResultManager from '../services/BestResultManager';
import { getBestMonth } from '../bestResultUtils';
import {
  Container,
  ModalWrapper,
  ModalTitle,
  ModalDescription,
  NumberClient,
  DateContainer,
  InfoContainer,
} from './BestResultSC';

interface Props {
  modalVisible: boolean;
  closeModal: () => void;
}

const Manager = new BestResultManager();

function BestResult({ modalVisible, closeModal }: Props) {
  const { roleInfo } = useRoleInfo();
  const loadData = useCallback(() => {
    if (modalVisible) {
      return Manager.getBestResult();
    }
    return Promise.resolve(null);
  }, [modalVisible]);

  const { data, ...promiseStatus } = usePromise(loadData);

  const bestResultDateResp = data?.month;

  const bestDate = getBestMonth(bestResultDateResp);

  const bestResultValidation = (data?.bestResult && bestDate) || !roleInfo?.isRCA;

  const message =
    bestDate || !roleInfo?.isRCA
      ? 'Sua maior positivação foi de:'
      : 'Não existe registro\nde maior positivação';
  return (
    <ModalPopUp visible={modalVisible} onCloseModal={closeModal}>
      <Container>
        <FallbackWrapper
          {...promiseStatus}
          loadingComponent="spinner"
          useOfflineFeedback
          offlineProps={{ imageSize: 100 }}
          renderContent={() => (
            <>
              <ModalWrapper>
                <DefaultIcon name="star" size={24} color="primary" />
                <ModalTitle variant="leadMedium" color="gray900">
                  Maior positivação
                </ModalTitle>
                {bestDate && (
                  <>
                    <DateContainer>
                      <Typography color="primary" variant="leadMedium" size={11} fallbackText="-">
                        {bestDate}
                      </Typography>
                    </DateContainer>
                    <Divider color="blue50" width="218" />
                  </>
                )}
                <InfoContainer>
                  <ModalDescription variant="body" color="gray300" align="center">
                    {message}
                  </ModalDescription>

                  {bestResultValidation && (
                    <NumberClient variant="header" color="primary" bold testID="number-client">
                      {`${data?.bestResult} clientes`}
                    </NumberClient>
                  )}
                </InfoContainer>
              </ModalWrapper>
            </>
          )}
        />
      </Container>
    </ModalPopUp>
  );
}
export default BestResult;
