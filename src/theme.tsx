'use client';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import CssBaseline from '@mui/material/CssBaseline';
import * as React from 'react';
import {
  experimental_extendTheme as extendTheme,
  Experimental_CssVarsProvider as CssVarsProvider,
} from '@mui/material/styles';

const theme = extendTheme({
  cssVarPrefix: 'md-demo',
});

type Props = {
  children: React.ReactNode;
};

export function ThemeProvider({ children }: Props) {
  return (
    <AppRouterCacheProvider
      options={{
        key: 'css',
        prepend: true,
        // enableCssLayer: true,
      }}
    >
      <CssBaseline />
      <CssVarsProvider theme={theme}>{children}</CssVarsProvider>
    </AppRouterCacheProvider>
  );
}
