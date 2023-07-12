'use client';

import { ReactNode } from 'react';
import theme from '../utils/theme';
import {
  CssBaseline,
  StyledEngineProvider,
  Experimental_CssVarsProvider as ThemeProvider,
} from '@mui/material';

interface CssVarsProviderProps {
  children: ReactNode;
}

function CssVarsProvider({ children }: CssVarsProviderProps) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default CssVarsProvider;
