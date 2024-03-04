'use client';

import { ThemeProvider } from '@/components/theme-provider';
import AppLayout from '@/layout/app-layout';
import { PropsWithChildren } from 'react';

const GlobalLayout = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="font-sans antialiased">
        <AppLayout>{children}</AppLayout>
      </div>
    </ThemeProvider>
  );
};

export default GlobalLayout;
