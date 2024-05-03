import * as React from 'react';
import { ThemeProvider } from '@/theme';
import { Toaster } from '../components/Toaster';

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <ThemeProvider>
          <Toaster />
          <>{props.children}</>
        </ThemeProvider>
      </body>
    </html>
  );
}
