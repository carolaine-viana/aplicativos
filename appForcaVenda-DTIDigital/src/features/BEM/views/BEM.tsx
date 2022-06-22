import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { PermissionsAndroid, View } from 'react-native';
import { useTheme } from 'styled-components';

import {
  SearchHeader,
  CustomStatusBar,
  DefaultIcon,
  Typography,
  Divider,
} from '@shared/components';
import { DeviceFeatures } from '@shared/base';

import { FileContainer, ContainerTitle, Container } from './BEMSC';
import CardsBEM from './CardsBEM';
import BEMManager from '../services/BEMManager';

const bemManager = new BEMManager();

const ERROR_GET_FILE = 'Error from getFile';

const BEM: React.FC = () => {
  const [processingFileStatus, setProcessingFileStatus] = useState({
    success: false,
    loading: false,
    error: false,
  });

  const [errorMessage, setErrorMessage] = useState('');

  const getFile = async () => {
    try {
      const fileResponse = await bemManager.getBEMBalance();
      if (fileResponse) {
        return fileResponse;
      }
    } catch (error) {
      throw new Error(ERROR_GET_FILE);
    }
  };

  const getPermission = async () => {
    if (DeviceFeatures.isIOS) return true;

    const rationale = {
      title: 'Permissão de Acesso seus arquivos',
      message: 'Este aplicativo precisa acessar seus arquivos.',
      buttonNeutral: 'Pergunte-me depois',
      buttonNegative: 'Cancelar',
      buttonPositive: 'OK',
    };

    const permission = await DeviceFeatures.androidPermissionGranted(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      rationale
    );
    return permission;
  };

  const updateStatus = (loading = false, error = false, success = false) => {
    setProcessingFileStatus({
      success,
      error,
      loading,
    });
  };

  const handleAction = async (action: 'download' | 'share') => {
    const permissionGranted = await getPermission();

    if (permissionGranted) {
      updateStatus(true, false, false);

      try {
        await bemManager.createFolder();
        const file = await getFile();

        if (file) {
          if (action === 'share') {
            await bemManager.shareBEMBalanceSheet(file.fileName, file.fileContent);
          } else {
            await bemManager.openBEMBalanceSheet(file.fileName, file.fileContent);
          }
        }
        updateStatus(false, false, true);
      } catch (error: any) {
        setErrorMessage(error.message);
        updateStatus(false, true, false);
      }
    } else {
      updateStatus(false, true, false);
    }
  };

  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <Container>
      <CustomStatusBar backgroundColor={theme.palette.blue50} barStyle="dark-content" />
      <SearchHeader
        headerProps={{
          title: 'Extrato BEM',
        }}
        onClickArrow={() => {
          navigation.goBack();
        }}
      />

      <FileContainer>
        <DefaultIcon name="file-text" size={110} color="link" />
        <ContainerTitle>
          <Typography variant="bodyMedium" size={16}>
            {'Extrato do\nsaldo BEM'}
          </Typography>
        </ContainerTitle>
        <View>
          {processingFileStatus.loading && (
            <Typography variant="bodyMedium" size={16} color="primary">
              Carregando arquivo...
            </Typography>
          )}
          {processingFileStatus.error && (
            <Typography variant="bodyMedium" size={16} color="red600" align="center">
              {errorMessage}
            </Typography>
          )}
        </View>
      </FileContainer>
      <Divider color="blue100" width="60%" />
      <CardsBEM
        onCLickSend={() => handleAction('share')}
        onClickDownload={() => handleAction('download')}
      />
    </Container>
  );
};

export default BEM;
