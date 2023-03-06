import { ModalWindowProvider } from '@/context/ModalWindowContext';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ModalWindowProvider>
      <Component {...pageProps} />
    </ModalWindowProvider>
  );
}
