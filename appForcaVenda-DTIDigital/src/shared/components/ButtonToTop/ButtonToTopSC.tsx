import styled from 'styled-components/native';

export default styled.Pressable`
  position: absolute;
  right: 16px;
  bottom: 24px;
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background-color: ${({ theme }) => theme.palette.blue600};
  align-items: center;
  justify-content: center;
`;
