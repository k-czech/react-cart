import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow-x: scroll;
  overflow-y: hidden;
  margin: 0;
  padding: 0;
  background-color: ${({ theme }) => theme.colors.white};
`;
