import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.white};
`;

export const WrapperPicker = styled.View`
  padding: 0 16px;
  margin: 28px 0;
`;

export const IncentivesList = styled.FlatList.attrs({
  contentContainerStyle: {
    marginHorizontal: 27,
  },
})``;

export const IncentiveListItem = styled.View`
  margin-top: 18px;
  margin-bottom: 22px;
`;

export const IncentiveListItemData = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
`;
