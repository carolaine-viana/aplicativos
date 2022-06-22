/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';

export const useNavigationFocus = ({
  callback,
  dependencies = [],
}: {
  callback: () => void;
  dependencies?: Array<unknown>;
}) => {
  useFocusEffect(
    useCallback(() => {
      callback?.();
    }, dependencies)
  );
};
