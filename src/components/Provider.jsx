'use client'

import { Roboto } from 'next/font/google';
import appStore from '@/redux/store';
import { Provider } from 'react-redux';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function TODOProvider({ children }) {
  return (
    <Provider store={appStore}>
      <html lang="en">
        <body className={roboto.className}>
          {children}
        </body>
      </html>
    </Provider>
  )
}
