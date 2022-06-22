/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useNetInfo } from '@react-native-community/netinfo';

import { Container, ContainerOffline, Text } from './NetworkStatusSC';

export default function NetworkStatus() {
  const netInfo = useNetInfo();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isConnected, setIsConnected] = useState(true);
  const [recent, setRecent] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (netInfo.isConnected && isMounted) {
      setIsConnected(true);
      setRecent(true);
      setTimeout(() => {
        setRecent(false);
      }, 5000);
    } else if (!netInfo.isConnected && isMounted) {
      setIsConnected(false);
    }

    return () => {
      setIsMounted(true);
    };
  }, [netInfo.isConnected]);

  function render() {
    if (netInfo.isConnected && recent && isMounted) {
      return (
        <Container>
          <Text>Você está online</Text>
        </Container>
      );
    }

    if (!netInfo.isConnected && isMounted) {
      return (
        <ContainerOffline>
          <Text>Você está offline</Text>
        </ContainerOffline>
      );
    }
  }

  return <>{render()}</>;
}
