// Example for Next.js 13+ App Router
// app/layout.tsx or app/page.tsx

import { TawkMessenger } from 'tawk-react-widget/nextjs';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <TawkMessenger
          propertyId="YOUR_PROPERTY_ID"
          widgetId="YOUR_WIDGET_ID"
          onLoad={() => console.log('Tawk loaded')}
        />
      </body>
    </html>
  );
}
