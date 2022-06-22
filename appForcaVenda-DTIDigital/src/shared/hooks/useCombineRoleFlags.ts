import { useNavigation } from '@react-navigation/native';
import { ImageSourcePropType } from 'react-native';
import { EventsNames, IRoleInfo, KnownFeatureFlags, RoutesNames } from 'shared/types';
import Bem from '@assets/images/logoBem.png';
import { Analytics } from 'shared/base/Analytics';
import FeatureFlag from 'shared/base/FeatureFlag';
import { sortListByKey } from 'shared/utils';
import { useFlags } from './useFeatureFlag';

export interface IMenuItem {
  title: string;
  description?: string;
  iconName?: string;
  icontImg?: ImageSourcePropType;
  action: () => void;
  shouldRender: boolean;
  roles?: string[];
  onlyMenu?: boolean;
}

const metrics = Analytics.getInstance();

export const useCombineRoleFlags = (
  roleInfo: IRoleInfo | undefined,
  version?: string,
  handleLogout?: () => void,
  openBestResult?: (open: boolean) => void,
  isMenu?: boolean
): IMenuItem[] => {
  const { isFeatureFlagAllowed: isFeatureFlagAllowedSaldoBEM } = useFlags(
    KnownFeatureFlags.SALDO_BEM
  );

  const isHom = FeatureFlag.getInstance().getEnv() === 'hom';

  const navigation = useNavigation();

  const { isFeatureFlagAllowed: isFeatureFlagAllowedSAC } = useFlags(KnownFeatureFlags.SAC);

  const { isFeatureFlagAllowed: isFeatureFlagAllowedIncentivos } = useFlags(
    KnownFeatureFlags.INCENTIVOS
  );
  const { isFeatureFlagAllowed: isFeatureFlagAllowedPositivacoes } = useFlags(
    KnownFeatureFlags.POSITIVACOES
  );
  const { isFeatureFlagAllowed: isFeatureFlagAllowedExtrato } = useFlags(KnownFeatureFlags.EXTRATO);

  const { isFeatureFlagAllowed: isFeatureFlagAllowedPolitica } = useFlags(
    KnownFeatureFlags.POLITICA_PRIVACIDADE
  );

  const isRCAOrGT = roleInfo?.isRCA || roleInfo?.isGT;

  function goToBEM() {
    navigation.navigate(RoutesNames.BEM);
  }

  function goToSAC() {
    navigation.navigate(RoutesNames.SAC);
  }

  function goToStatement() {
    navigation.navigate(RoutesNames.STATEMENT);
  }

  function goToIncentives() {
    navigation.navigate(RoutesNames.INCENTIVES, { screen: RoutesNames.INCENTIVES_LIST });
    metrics.sendEvent(EventsNames.INCENTIVES);
  }

  function goToPrivacyPolicy() {
    navigation.navigate(RoutesNames.PRIVACYPOLICY);
  }

  const cardsMenu: IMenuItem[] = [
    {
      title: 'Extrato de comissão',
      iconName: 'file-text',
      description: 'Consulte o seu extrato\nde comissões',
      action: goToStatement,
      shouldRender: !!(isFeatureFlagAllowedExtrato && roleInfo?.isRCA),
      onlyMenu: true,
    },

    {
      title: 'Incentivos',
      description: 'Consulte os incentivos,\nmecânicas e seu histórico',
      iconName: 'award',
      action: goToIncentives,
      shouldRender: !!(isFeatureFlagAllowedIncentivos && isRCAOrGT),
      onlyMenu: true,
    },
    {
      title: 'Positivações',
      description: 'Consulte sua maior positivação',
      iconName: 'star',
      action: () => openBestResult?.(true),
      shouldRender:
        (!!isFeatureFlagAllowedPositivacoes && roleInfo?.isRCA) ||
        (!!isFeatureFlagAllowedPositivacoes && roleInfo?.isGT),
      onlyMenu: true,
    },

    {
      title: 'SAC',
      description: 'Criar ocorrências, Histórico\ne Chat',
      iconName: 'message-square',
      action: goToSAC,
      shouldRender:
        (!!isFeatureFlagAllowedSAC && roleInfo?.isRCA) ||
        (!!isFeatureFlagAllowedSAC && roleInfo?.isGT),
      onlyMenu: true,
    },

    {
      title: 'Política de privacidade',
      action: () => goToPrivacyPolicy?.(),
      iconName: 'shield',
      shouldRender: isFeatureFlagAllowedPolitica && isHom,
      description: 'Acesse o contrato de\npolítica de privacidade',
      onlyMenu: true,
    },
    {
      title: 'Saldo do BEM',
      description: 'Baixe ou compartilhe o\nextrato',
      icontImg: Bem,
      action: goToBEM,
      shouldRender: isFeatureFlagAllowedSaldoBEM,
      onlyMenu: true,
    },
  ];
  sortListByKey(cardsMenu, 'title', 'az');
  return [
    ...cardsMenu,
    {
      title: 'Sair',
      description: `Versão ${version}`,
      iconName: 'log-out',
      action: () => handleLogout?.(),
      shouldRender: !!isMenu,
    },
  ];
};
