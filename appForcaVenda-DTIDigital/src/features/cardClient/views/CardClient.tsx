import React from 'react';
import * as navigationHooks from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';

import { ICustomerReadDto } from '@shared/models/Customer';
import {
  DefaultIcon,
  Badge,
  TBadgeColors,
  CardPaper,
  Typography,
  TouchableButton,
} from '@shared/components';
import { IVisitCustomer, CreditStatus } from '@shared/types';
import { formatHour, formatDateOnlyPtBr, formatCNPJ } from '@shared/utils';

import {
  Container,
  InfoText,
  CalendarIcon,
  ContainerButtons,
  ClockIcon,
  ContainerIcons,
  Info,
  BadgeWrapper,
  ClientName,
  ClientCNPJ,
  Address,
  DefaultButton,
  DeleteButton,
  BadgeContent,
  BadgeSpace,
  Content,
  PinIcon,
  InfoAdress,
  InfoStatus,
  InfoLastAcquisition,
  ContainerStatus,
  NewCustumerContainer,
  ButtonText,
} from './CardClientSC';
import { mountAddress } from '../customerCardUtils';

interface CardClientProps {
  customer: IVisitCustomer;
  disabled?: boolean;
  openForm: (customer: ICustomerReadDto) => void;
  openFormAdditional?: (customer: ICustomerReadDto) => void;
  onComplete?: () => void;
  handlReportOccurrence?: (customer: ICustomerReadDto) => void;
  handleHistory?: (customer: ICustomerReadDto) => void;
  onCall?: (customer: ICustomerReadDto) => void;
}

export type CustomerListParams = {
  origin: {
    fromSAC: boolean;
    isOccurrence?: boolean;
    isHistory?: boolean;
  };
};

const CardClient: React.FC<CardClientProps> = ({
  customer,
  disabled,
  openForm,
  openFormAdditional,
  onComplete,
  onCall,
  handlReportOccurrence,
  handleHistory,
}) => {
  const { name } = navigationHooks.useRoute();
  const isRoadMap = name !== 'Clientes';
  const route = navigationHooks.useRoute<RouteProp<CustomerListParams, 'origin'>>();

  const { isHistory, isOccurrence } = route.params;

  const creditStatusColors = {
    [CreditStatus.REABILITADO]: 'primary',
    [CreditStatus.SUSPENSO]: 'secondary',
    [CreditStatus.NOVO]: 'success',
    [CreditStatus.CORTADO]: 'danger',
    [CreditStatus.NORMAL_CASH]: 'warning',
    [CreditStatus.NORMAL]: 'info',
  };
  const renderSegment = () => (
    <Typography variant="overline" color="default">
      Segmento:{' '}
      <Typography
        variant="overline"
        color="primary"
        fallbackText="-"
        testID="cardClientBusinessUnit"
      >
        {customer?.businessUnit}
      </Typography>
    </Typography>
  );

  const renderPositivization = () => (
    <InfoStatus>
      <Typography variant="overline" color="default" bold>
        Status:{' '}
      </Typography>

      <Typography variant="overline" color={customer.purchasedThisMonth ? 'success' : 'error'}>
        {customer.purchasedThisMonth ? 'Positivado' : 'Não positivado'}
      </Typography>
    </InfoStatus>
  );

  const renderLastAcquisition = () => (
    <InfoLastAcquisition>
      <Typography variant="overlineMedium" color="default" bold>
        Última compra:{' '}
      </Typography>

      <Typography variant="overline" color="default">
        {customer?.lastPurchaseDate}
      </Typography>
    </InfoLastAcquisition>
  );
  const renderRoadMapButtons = () => {
    if (isRoadMap) {
      return (
        <>
          <ContainerButtons testID="testaQ">
            <DefaultButton onPress={onComplete} selected>
              <DefaultIcon name="check" size={26} color="primary" />
              <ButtonText variant="overline" color="primary">
                Concluir
              </ButtonText>
            </DefaultButton>

            <DefaultButton onPress={() => onCall(customer)} selected>
              <DefaultIcon name="phone" size={26} color="primary" />
              <ButtonText variant="overline" color="primary" align="center">
                Ligar para o cliente
              </ButtonText>
            </DefaultButton>

            <DefaultButton onPress={() => openForm(customer)} last selected>
              <DefaultIcon name="edit" size={26} color="primary" />
              <ButtonText variant="overline" color="primary">
                Editar
              </ButtonText>
            </DefaultButton>
          </ContainerButtons>
          <DeleteButton onPress={() => openFormAdditional()}>
            <DefaultIcon name="trash-2" size={20} color="errorLight" />
          </DeleteButton>
        </>
      );
    }
  };

  const renderSchedule = () => {
    if (isRoadMap && customer?.schedule) {
      return (
        <>
          <Info>
            <CalendarIcon testID="calendarIconTest" />
            <InfoText size={12}>{formatDateOnlyPtBr(customer?.schedule)}</InfoText>
          </Info>

          <Info>
            <ClockIcon testID="clockIconTest" />
            <InfoText size={12}>{formatHour(customer?.schedule)}</InfoText>
          </Info>
        </>
      );
    }
    return null;
  };

  if (customer) {
    return (
      <Container testID="resolved">
        <CardPaper
          bg="light"
          alignItems="stretch"
          renderBody={() => (
            <Content>
              {customer?.newCustomer && (
                <NewCustumerContainer>
                  <Typography color="gray800" size={14} variant="leadBody">
                    Novo
                  </Typography>
                </NewCustumerContainer>
              )}
              <BadgeWrapper>
                <BadgeContent>
                  <BadgeSpace>
                    <Badge
                      color={creditStatusColors[customer.creditStatus!] as TBadgeColors}
                      text={customer.creditStatus!}
                    />
                  </BadgeSpace>
                </BadgeContent>
              </BadgeWrapper>

              <ContainerStatus>
                {renderPositivization()}
                {renderLastAcquisition()}
              </ContainerStatus>

              <ClientCNPJ variant="bodyMedium" color="gray800" bold>
                {`${formatCNPJ(customer?.cnpj)} • ${customer?.customerId || customer?.id}`}
              </ClientCNPJ>

              <ClientName variant="overline" color={customer?.tradeName ? 'default' : 'gray500'}>
                {customer?.tradeName || 'NOME FANTASIA NÃO ENCONTRADO'}
              </ClientName>

              <ClientName variant="overline">{customer?.companyName}</ClientName>

              {renderSegment()}

              <InfoAdress>
                <PinIcon />
                <Address variant="overline" color="default">
                  {`${mountAddress(customer)}`}
                </Address>
              </InfoAdress>
              <ContainerIcons>{renderSchedule()}</ContainerIcons>
              {renderRoadMapButtons()}

              <ContainerButtons>
                {!isRoadMap && !isHistory && (
                  <>
                    <DefaultButton onPress={() => openForm(customer)} selected disabled={disabled}>
                      <DefaultIcon
                        name="plus-circle"
                        size={26}
                        color={disabled ? 'default' : 'primary'}
                      />
                      <ButtonText
                        variant="overline"
                        color={disabled ? 'gray200' : 'primary'}
                        align="center"
                      >
                        {disabled ? 'Cliente já agendado' : 'Adicionar ao roteiro'}
                      </ButtonText>
                    </DefaultButton>
                    <DefaultButton onPress={() => onCall(customer)} selected>
                      <DefaultIcon name="phone" size={26} color="primary" />
                      <ButtonText variant="overline" color="primary" align="center">
                        Ligar para o cliente
                      </ButtonText>
                    </DefaultButton>
                  </>
                )}
                {isOccurrence && handlReportOccurrence && (
                  <DefaultButton
                    borderColor="red600"
                    last
                    onPress={() => handlReportOccurrence?.(customer)}
                  >
                    <DefaultIcon name="alert-triangle" size={26} color="error" />
                    <Typography variant="overline" color="error" align="center">
                      Reportar ocorrência
                    </Typography>
                  </DefaultButton>
                )}
                {isHistory && handleHistory && (
                  <TouchableButton
                    title="Selecionar"
                    color="primary"
                    onPress={() => handleHistory?.(customer)}
                  />
                )}
              </ContainerButtons>
            </Content>
          )}
        />
      </Container>
    );
    return null;
  }
};

function areEqual(prevProps: CardClientProps, nextProps: CardClientProps) {
  return prevProps.customer?.id === nextProps.customer?.id;
}

export default React.memo(CardClient, areEqual);
