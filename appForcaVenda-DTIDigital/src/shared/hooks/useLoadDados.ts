/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react';

export function useLoadDados(
  loadDados: () => Promise<void>,
  dependencies: Array<any>,
  defaultData?: any,
  validateDeps = () => true,
  cleanUp?: () => void
) {
  const [status, setStatus] = useState({
    success: false,
    loading: false,
    error: false,
  });

  const data = useRef(defaultData);

  const callLoadDados = async () => {
    try {
      setStatus({
        ...status,
        loading: true,
      });
      data.current = await loadDados();
      setStatus({
        ...status,
        loading: false,
        success: true,
        error: false,
      });
    } catch (error) {
      setStatus({
        ...status,
        loading: false,
        error: true,
        success: false,
      });
    }
  };

  // const callLoadDados = useCallback(() => load(), [loadDados, status]);

  useEffect(() => {
    if (validateDeps) {
      const shouldCallLoad = validateDeps();
      if (shouldCallLoad) {
        callLoadDados();
      }
    }

    return () => cleanUp?.();
  }, dependencies);

  return {
    ...status,
    callLoadDados,
    data: data.current,
  };
}
