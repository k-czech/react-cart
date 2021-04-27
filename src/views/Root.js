import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainTemplate>
        <div>Welcome React Cart</div>
      </MainTemplate>
    </ThemeProvider>
  );
};

export default Root;
