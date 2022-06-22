import React from 'react';
import { Alert, TouchableOpacity, Linking } from 'react-native';
import { DefaultIcon, FlexBox, Typography, Maps, TouchableButton } from '@shared/components';
import { IMarker } from '@shared/types';
import { useLoadDados } from '@shared/hooks';
import { mountAddress } from '@features/cardClient/customerCardUtils';
import { formatCNPJ } from 'shared/utils';
import {
  DetailsContainer,
  Container,
  CompanyName,
  CNPJCode,
  ButtonContainer,
  InfoContainer,
  SegmentContainer,
} from './CustomerRoutesSC';
import { CustomerRoutesManager } from '../service/CustomerRoutesManager';
import { mountGpsUrl } from '../customerRoutesUtils';

interface CustomerDetailsProps {
  selectedMarker: IMarker | null;
  isClickemon: boolean;
  renderMarker?: (params: IMarker) => void;

  closeModal?: () => void;
}

// TODO: CRASH AO VISUALIZAR DETALHES CLICKEMON
const CustomerDetails: React.FC<CustomerDetailsProps> = (props) => {
  const { renderMarker, isClickemon } = props;
  const { data: customer } = useLoadDados(
    () => {
      if (selectedMarker?.identifier) {
        const manager = new CustomerRoutesManager();
        return manager.getCustomer(selectedMarker.identifier, isClickemon);
      }
    },
    [isClickemon],
    []
  );

  const handleLinkGPS = async () => {
    try {
      if (selectedMarker) {
        const url = mountGpsUrl(selectedMarker, customer.companyName);
        if (url) {
          await Linking.openURL(url);
        } else {
          throw new Error();
        }
      }
    } catch (err) {
      Alert.alert('Não foi possível abrir GPS');
    }
  };

  const { closeModal, selectedMarker } = props;

  if (!selectedMarker?.identifier) {
    // TODO: incluir componente feedback
    return null;
  }

  return (
    <Container>
      <FlexBox>
        <Maps
          region={{ ...selectedMarker, latitudeDelta: 0.5, longitudeDelta: 0.2 }}
          markers={[selectedMarker]}
          renderMarker={renderMarker}
        />
      </FlexBox>

      <DetailsContainer>
        <InfoContainer>
          <FlexBox direction="row" align="center">
            <CompanyName>
              <Typography variant="lead" bold>
                {customer.companyName}
              </Typography>
            </CompanyName>
            <TouchableOpacity onPress={closeModal}>
              <DefaultIcon name="x" size={32} color="default" />
            </TouchableOpacity>
          </FlexBox>

          <CNPJCode>
            <Typography variant="lead" color="secondary">
              {`${formatCNPJ(customer.cnpj)}${!isClickemon ? ` - ${customer.id}` : ''}`}
            </Typography>
            {customer.businessUnit && (
              <SegmentContainer>
                <Typography variant="overlineMedium" color="primary">
                  SEGMENTO:
                  <Typography variant="overline" color="primary">
                    {` ${customer.businessUnit}`}
                  </Typography>
                </Typography>
              </SegmentContainer>
            )}
          </CNPJCode>

          <Typography variant="lead" color="secondary">
            {mountAddress(customer)}
          </Typography>
        </InfoContainer>

        <ButtonContainer>
          <TouchableButton
            color="primary"
            title="Ir para GPS"
            width="136px"
            onPress={handleLinkGPS}
            typographyProps={{ variant: 'overline' }}
            iconProps={{
              side: 'left',
              name: 'send',
              size: 16,
              color: 'light',
            }}
          />
        </ButtonContainer>
      </DetailsContainer>
    </Container>
  );
};

export default CustomerDetails;
