import { ThemeProvider } from 'styled-components';
import { theme } from '../theme/theme';
import { GlobalStyle } from '../theme/global';

import { IApps } from '../interfaces/basics';

export default function App({ Component, pageProps }: IApps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
