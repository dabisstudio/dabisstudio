import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const matter = localFont({
  src: [
    {
      path: '../fonts/Matter-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-matter',
});
