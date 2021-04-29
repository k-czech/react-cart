import React from 'react';
import { Logo, NavWrapper, StyledLink, Wrapper } from 'components/organisms/Navigation/Navigation.styles';

const Navigation = () => {
  return (
    <Wrapper>
      <Logo>
        <h1>Shoplo</h1>
      </Logo>
      <NavWrapper>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/blog">Blog</StyledLink>
      </NavWrapper>
    </Wrapper>
  );
};

export default Navigation;
