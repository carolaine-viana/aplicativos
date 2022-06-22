import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const RCA_CARD_HIGHT = 100;

const ListContainer = styled.View`
  padding: 16px 16px 0 16px;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 0;
`;

const PaperWrapper = styled.View`
  width: 100%;
  margin-bottom: 8px;
  padding: 8px;
  align-items: center;
`;

const CardContainer = styled.View`
  height: ${RCA_CARD_HIGHT}px;
  width: 85%;
`;

const ItemWrapper = styled.View`
  width: 100%;
`;

const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;

export { PaperWrapper, CardContainer, ListContainer, ItemWrapper, SafeArea };
