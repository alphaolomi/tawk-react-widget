// Example for Next.js Pages Router
// pages/_app.tsx

import type { AppProps } from 'next/app';
import { TawkMessenger } from 'react-tawk-messenger/nextjs';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <TawkMessenger
        propertyId="YOUR_PROPERTY_ID"
        widgetId="YOUR_WIDGET_ID"
        onLoad={() => console.log('Tawk loaded')}
      />
    </>
  );
}
