import styled from 'styled-components/native';

const FlexContainer = styled.View<FlexContainerProps>`
  ${({ theme, direction = 'column', bg = 'default' }) => {
    const { palette } = theme;
    return {
      flex: 1,
      'flex-direction': direction,
      'background-color': palette.background[bg],
    };
  }}
`;

interface FlexContainerProps {
  direction?: string;
  bg?: 'dark' | 'light' | 'default';
}

export default FlexContainer;
