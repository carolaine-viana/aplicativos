import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import FeatureFlag from 'shared/base/FeatureFlag';
import { setFeatureFlags } from 'shared/redux/featureFlags/featureFlagsSlice';
import { RoutesNames } from 'shared/types';
import { useRedux } from '../useRedux';

export const useSetupFlags = () => {
  const { dispatch } = useRedux('featureFlags');
  const navigation = useNavigation();
  useEffect(() => {
    const loadFeatureFlag = async () => {
      try {
        const featureFlag = FeatureFlag.getInstance();
        const flags = featureFlag.getAllFlags();
        dispatch(setFeatureFlags(flags));
      } catch (error) {
        navigation.navigate(RoutesNames.LOGIN);
      }
    };
    loadFeatureFlag();
  }, [dispatch, navigation]);
};
