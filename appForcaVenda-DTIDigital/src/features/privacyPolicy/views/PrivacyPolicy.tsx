import React, { useCallback, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Modal } from 'react-native';
import {
  DefaultScreen,
  SearchHeader,
  Spinner,
  TouchableButton,
  Typography,
} from 'shared/components';
import { usePromise, useRoleInfo } from 'shared/hooks';
import { Container, Title, ContainerButton, ErrorMessage } from './PrivacyPolicySC';
import { policyText } from '../privacyPolicyUtils';
import PrivacyPolicyManager from '../services/PrivacyPolicyManager';

const Manager = new PrivacyPolicyManager();

interface PrivacyPolicyProps {
  fromMenu?: boolean;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ fromMenu }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const [sendinAcceptance, setSendinAcceptance] = useState(false);
  const [errorOnAccept, setErrorOnAccept] = useState(false);

  const navigation = useNavigation();
  const { roleInfo } = useRoleInfo();
  const role = roleInfo?.role;

  const loadPrivayPolicy = useCallback(() => {
    if (role) {
      return Manager.shouldLoadPrivacyPolicy(role);
    }
    return null;
  }, [role]);

  const { data: shouldOpenTermUse } = usePromise<boolean | null>(loadPrivayPolicy);

  useEffect(() => {
    if (shouldOpenTermUse) {
      setModalVisible(true);
    }
  }, [shouldOpenTermUse]);

  const handleAcceptTermOfUse = async () => {
    if (roleInfo && roleInfo?.role) {
      setErrorOnAccept(false);
      setSendinAcceptance(true);

      const { error, accepted } = await Manager.acceptTermOfUse(roleInfo?.role);

      setSendinAcceptance(false);

      if (error || !accepted) {
        setErrorOnAccept(true);
      } else if (accepted) {
        setModalVisible(false);
      }
    }
  };

  const renderButton = () => {
    if (sendinAcceptance) {
      return <Spinner color="primary" size="small" />;
    }
    return (
      <TouchableButton
        title="Aceitar"
        color="primary"
        width="116px"
        height="54px"
        disabled={sendinAcceptance}
        onPress={handleAcceptTermOfUse}
      />
    );
  };
  const renderContent = () => (
    <Container showsVerticalScrollIndicator={false}>
      {!fromMenu && (
        <Title variant="titleMedium" color="primary">
          Politica de privacidade
        </Title>
      )}
      <Typography variant="overline">{policyText}</Typography>
      {!fromMenu && (
        <ContainerButton>
          {renderButton()}
          {errorOnAccept && (
            <ErrorMessage color="red600" variant="overline" align="center">
              {'Não foi possível concluir a ação\nTente novamente mais tarde'}
            </ErrorMessage>
          )}
        </ContainerButton>
      )}
    </Container>
  );

  if (fromMenu) {
    return (
      <DefaultScreen>
        <SearchHeader
          onClickArrow={fromMenu ? () => navigation.goBack() : undefined}
          testID="privacyPolicyHeader"
          headerProps={{
            title: 'Política de privacidade',
          }}
        />

        {renderContent()}
      </DefaultScreen>
    );
  }
  return (
    <DefaultScreen backgroundColor="light">
      <Modal visible={modalVisible} testID="privacyPolicyModal">
        {renderContent()}
      </Modal>
    </DefaultScreen>
  );
};

export default PrivacyPolicy;
