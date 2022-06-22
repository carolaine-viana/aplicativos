import styled, { css } from 'styled-components/native';

const TabsContainer = styled.View<{ isFilter: boolean }>`
  width: 100%;
  flex-direction: row;
  padding: 24px 0;

  ${({ isFilter }) =>
    !isFilter &&
    css`
      justify-content: center;
    `}
`;

const Tab = styled.View<{ active: boolean; isFilter: boolean }>`
  height: 24px;
  border-radius: 12px;
  padding: 4px 16px;
  margin: ${({ isFilter }) => (isFilter ? '0px 12px' : '0px 30px')};
  background-color: ${({ theme, active, isFilter }) => {
    if (isFilter) {
      if (active) {
        return theme.palette.blue300;
      }
      return theme.palette.gray100;
    }
    if (!isFilter) {
      if (active) {
        return theme.palette.background.dark;
      }
      return theme.palette.background.default;
    }
  }};
`;

const FilterContainer = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  padding: 0px 42px 24px 42px;
  justify-content: center;
`;

export { TabsContainer, Tab, FilterContainer };
