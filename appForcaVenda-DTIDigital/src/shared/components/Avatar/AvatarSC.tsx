import styled from 'styled-components/native';

const AvatarContainer = styled.View`
  height: 42px;
  width: 42px;
  padding: 8px 4px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.blue300};
  border-radius: 42px;
`;

export { AvatarContainer };
