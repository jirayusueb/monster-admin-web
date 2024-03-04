'use client';

import { ThemeProvider } from '@/components/theme-provider';
import AppLayout from '@/layout/app-layout';
import { IBM_Plex_Mono, Noto_Sans_Thai } from 'next/font/google';
import { PropsWithChildren } from 'react';

const fontSans = Noto_Sans_Thai({
  subsets: ['latin', 'thai'],
  variable: '--font-sans',
  weight: ['100', '200', '300', '400', '500', '600'],
});

const fontMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
});

const GlobalLayout = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <style jsx global>
        {`
          :root {
            --font-sans: ${fontSans.style.fontFamily};
            --font-mono: ${fontMono.style.fontFamily};
          }
        `}
      </style>
      <div className="font-sans font-[400] antialiased">
        <AppLayout>{children}</AppLayout>
      </div>
    </ThemeProvider>
  );
};

export default GlobalLayout;
