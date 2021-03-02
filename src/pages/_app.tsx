import { NextRouter } from 'next/dist/next-server/lib/router/router';
import { AppPropsType } from 'next/dist/next-server/lib/utils';
import { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
import { GlobalStyle } from '../theme/global';

export default function App({
  Component,
  pageProps,
}: PropsWithChildren<AppPropsType<NextRouter, {}>>) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
