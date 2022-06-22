import styled from 'styled-components/native';

export const RowContainer = styled.View<{ marginBetweenRows: number }>`
  margin-bottom: ${(props) => props.marginBetweenRows}px;
  flex-direction: row;
  justify-content: space-between;
`;
