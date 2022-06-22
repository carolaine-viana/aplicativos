import { IFeatrueFlagsState } from 'shared/redux/featureFlags/featureFlagsSlice';
import { TFeatureFlags } from 'shared/types';
import { arrayContainsString, isArrayEmpty, checkArrayIsSubSet } from 'shared/utils';
import { useRedux } from '../useRedux';

export const useFlags = (...flagsToCheck: TFeatureFlags[]) => {
  let isFeatureFlagAllowed = false;
  const { sliceState } = useRedux<IFeatrueFlagsState>('featureFlags');

  if (!isArrayEmpty(flagsToCheck)) {
    if (flagsToCheck.length === 1) {
      isFeatureFlagAllowed = arrayContainsString(sliceState.flags as string[], flagsToCheck[0]);
    } else {
      isFeatureFlagAllowed = checkArrayIsSubSet(sliceState.flags, flagsToCheck);
    }
  }

  return {
    allFeatureFlags: sliceState.flags,
    isFeatureFlagAllowed,
  };
};
