import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 25px ${({ theme }) => theme.containerSize.n};
  border-bottom: 1px solid ${({ theme }) => theme.colors.kinglyCloud};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  h1 {
    font-size: ${({ theme }) => theme.fontSize.xxl};
    font-weight: 900;
    color: ${({ theme }) => theme.colors.black};
    text-transform: uppercase;
    margin: 0;
  }
`;

export const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const activeClassName = 'active-link';
export const StyledLink = styled(NavLink).attrs({ activeClassName })`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 400;
  line-height: 1.2em;
  color: ${({ theme }) => theme.colors.blackOut};
  text-decoration: none;
  text-transform: uppercase;
  padding: 0 ${({ theme }) => theme.containerSize.s};
  transition: color 0.3s ease-in;

  &.${activeClassName}, &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
