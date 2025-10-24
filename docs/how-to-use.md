# How to Use tawk-react-widget

This guide provides detailed instructions on how to use `tawk-react-widget` in your React and Next.js applications.

## Table of Contents

- [Installation](#installation)
- [Basic Setup](#basic-setup)
- [Next.js Integration](#nextjs-integration)
- [Advanced Usage](#advanced-usage)
- [Customization](#customization)
- [TypeScript Support](#typescript-support)

## Installation

Install the package using your preferred package manager:

```bash
npm install tawk-react-widget
# or
yarn add tawk-react-widget
# or
pnpm add tawk-react-widget
```

## Basic Setup

### Simple React Application

```tsx
import TawkMessenger from 'react-tawk-messenger';

function App() {
  return (
    <div>
      <h1>My App</h1>
      <TawkMessenger
        propertyId="YOUR_PROPERTY_ID"
        widgetId="YOUR_WIDGET_ID"
        onLoad={() => console.log('Tawk loaded!')}
      />
    </div>
  );
}

export default App;
```

### With Event Callbacks

```tsx
import TawkMessenger from 'react-tawk-messenger';

function App() {
  const handleLoad = () => {
    console.log('Widget loaded');
  };

  const handleChatStarted = () => {
    console.log('Chat started with visitor');
  };

  const handleChatEnded = () => {
    console.log('Chat ended');
  };

  return (
    <div>
      <TawkMessenger
        propertyId="YOUR_PROPERTY_ID"
        widgetId="YOUR_WIDGET_ID"
        onLoad={handleLoad}
        onChatStarted={handleChatStarted}
        onChatEnded={handleChatEnded}
      />
    </div>
  );
}
```

## Next.js Integration

### App Router (Next.js 13+)

For Next.js App Router, use the special `nextjs` import which includes the `'use client'` directive:

```tsx
// app/layout.tsx
import { TawkMessenger } from 'tawk-react-widget/nextjs';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <TawkMessenger propertyId="YOUR_PROPERTY_ID" widgetId="YOUR_WIDGET_ID" />
      </body>
    </html>
  );
}
```

### Pages Router

For Next.js Pages Router, add the component to your `_app.tsx`:

```tsx
// pages/_app.tsx
import type { AppProps } from 'next/app';
import { TawkMessenger } from 'tawk-react-widget/nextjs';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <TawkMessenger propertyId="YOUR_PROPERTY_ID" widgetId="YOUR_WIDGET_ID" />
    </>
  );
}
```

## Advanced Usage

### Using Ref for Programmatic Control

```tsx
import { useRef } from 'react';
import TawkMessenger, { TawkMessengerRef } from 'react-tawk-messenger';

function App() {
  const tawkRef = useRef<TawkMessengerRef>(null);

  const handleOpenChat = () => {
    tawkRef.current?.maximize();
  };

  const handleCloseChat = () => {
    tawkRef.current?.minimize();
  };

  const checkChatStatus = () => {
    const isMaximized = tawkRef.current?.isChatMaximized();
    console.log('Chat is maximized:', isMaximized);
  };

  return (
    <div>
      <button onClick={handleOpenChat}>Open Chat</button>
      <button onClick={handleCloseChat}>Close Chat</button>
      <button onClick={checkChatStatus}>Check Status</button>

      <TawkMessenger ref={tawkRef} propertyId="YOUR_PROPERTY_ID" widgetId="YOUR_WIDGET_ID" />
    </div>
  );
}
```

### Setting Visitor Information

```tsx
import { useRef, useEffect } from 'react';
import TawkMessenger, { TawkMessengerRef } from 'react-tawk-messenger';

function App() {
  const tawkRef = useRef<TawkMessengerRef>(null);

  useEffect(() => {
    // Set visitor info when component mounts
    tawkRef.current?.setVisitor({
      name: 'John Doe',
      email: 'john.doe@example.com',
    });

    // Set custom attributes
    tawkRef.current?.setAttributes({
      userId: '12345',
      plan: 'premium',
      signupDate: '2024-01-01',
    });

    // Add tags
    tawkRef.current?.addTags(['vip', 'premium-user']);
  }, []);

  return <TawkMessenger ref={tawkRef} propertyId="YOUR_PROPERTY_ID" widgetId="YOUR_WIDGET_ID" />;
}
```

### Tracking Custom Events

```tsx
import { useRef } from 'react';
import TawkMessenger, { TawkMessengerRef } from 'react-tawk-messenger';

function CheckoutPage() {
  const tawkRef = useRef<TawkMessengerRef>(null);

  const handlePurchase = (productId: string, amount: number) => {
    // Track custom event
    tawkRef.current?.addEvent('purchase', {
      productId,
      amount,
      currency: 'USD',
      timestamp: new Date().toISOString(),
    });
  };

  return (
    <div>
      <button onClick={() => handlePurchase('prod-123', 99.99)}>Complete Purchase</button>

      <TawkMessenger ref={tawkRef} propertyId="YOUR_PROPERTY_ID" widgetId="YOUR_WIDGET_ID" />
    </div>
  );
}
```

## Customization

### Custom Styling

```tsx
import TawkMessenger from 'react-tawk-messenger';

function App() {
  const customStyle = {
    visibility: {
      desktop: {
        position: 'br', // bottom-right
        xOffset: 20,
        yOffset: 20,
      },
      mobile: {
        position: 'br',
        xOffset: 10,
        yOffset: 10,
      },
    },
  };

  return (
    <TawkMessenger
      propertyId="YOUR_PROPERTY_ID"
      widgetId="YOUR_WIDGET_ID"
      customStyle={customStyle}
    />
  );
}
```

### Embedded Widget

For an embedded (inline) widget instead of a popup:

```tsx
import TawkMessenger from 'react-tawk-messenger';

function App() {
  return (
    <div>
      <h2>Chat with us</h2>
      <div id="tawk-container" style={{ height: '500px' }}>
        <TawkMessenger
          propertyId="YOUR_PROPERTY_ID"
          widgetId="YOUR_WIDGET_ID"
          embedId="tawk-container"
        />
      </div>
    </div>
  );
}
```

## TypeScript Support

The package is written in TypeScript and provides full type definitions:

```tsx
import TawkMessenger, { TawkMessengerProps, TawkMessengerRef } from 'tawk-react-widget';

// Props are fully typed
const config: TawkMessengerProps = {
  propertyId: 'YOUR_PROPERTY_ID',
  widgetId: 'YOUR_WIDGET_ID',
  onLoad: () => {
    console.log('Loaded');
  },
};

// Ref methods are fully typed
const tawkRef = useRef<TawkMessengerRef>(null);

// TypeScript will provide autocomplete and type checking
tawkRef.current?.maximize();
const status = tawkRef.current?.getStatus(); // Type: 'online' | 'away' | 'offline'
```

## Common Patterns

### Conditional Loading

```tsx
import { useState } from 'react';
import TawkMessenger from 'tawk-react-widget';

function App() {
  const [showChat, setShowChat] = useState(false);

  return (
    <div>
      <button onClick={() => setShowChat(true)}>Enable Chat Support</button>

      {showChat && <TawkMessenger propertyId="YOUR_PROPERTY_ID" widgetId="YOUR_WIDGET_ID" />}
    </div>
  );
}
```

### Multi-language Support

```tsx
import TawkMessenger from 'react-tawk-messenger';

function App() {
  const locale = 'es'; // Spanish

  return (
    <TawkMessenger
      propertyId="YOUR_PROPERTY_ID"
      widgetId={locale === 'es' ? 'SPANISH_WIDGET_ID' : 'ENGLISH_WIDGET_ID'}
    />
  );
}
```

## Best Practices

1. **Single Instance**: Only include one `TawkMessenger` component per page
2. **Root Level**: Place the component at the root level of your app (in layout or \_app)
3. **Ref Usage**: Use refs for programmatic control rather than direct window.Tawk_API access
4. **Event Handlers**: Use the provided event callbacks for better React integration
5. **TypeScript**: Take advantage of TypeScript types for better developer experience

## Troubleshooting

### Widget Not Appearing

1. Check that your `propertyId` and `widgetId` are correct
2. Ensure the component is rendered (check with React DevTools)
3. Check browser console for any error messages
4. Verify your Tawk.to account is active

### Next.js "window is not defined" Error

Make sure you're using the `tawk-react-widget/nextjs` import for Next.js applications:

```tsx
// ❌ Wrong
import TawkMessenger from 'tawk-react-widget';

// ✅ Correct for Next.js
import { TawkMessenger } from 'tawk-react-widget/nextjs';
```

### TypeScript Errors

Ensure you have the latest version installed and that your `tsconfig.json` includes:

```json
{
  "compilerOptions": {
    "moduleResolution": "bundler", // or "node16"
    "jsx": "react-jsx"
  }
}
```

## Next Steps

- Check out the [API Reference](./api-reference.md) for complete method documentation
- Explore the [examples](../examples) directory for more use cases
- Visit [Tawk.to Developer Docs](https://developer.tawk.to/jsapi/) for widget API details
