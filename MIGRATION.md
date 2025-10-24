# Migration Guide

Guide for migrating from `@tawk.to/tawk-messenger-react` v2.x to `react-tawk-messenger` v3.x

## Overview

Version 3.0 is a complete rewrite with:

- ✨ TypeScript support
- ⚛️ React 19 compatibility
- ⚡ Next.js 13+ support (App Router + Pages Router)
- 🧪 Modern testing with Vitest
- 📦 Smaller bundle size
- 🎯 Better type safety

## Installation

### Uninstall Old Package

```bash
npm uninstall @tawk.to/tawk-messenger-react
# or
yarn remove @tawk.to/tawk-messenger-react
```

### Install New Package

```bash
npm install react-tawk-messenger
# or
yarn add react-tawk-messenger
```

## Breaking Changes

### 1. Package Name Change

```tsx
// ❌ Before (v2.x)
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

// ✅ After (v3.x)
import TawkMessenger from 'react-tawk-messenger';
```

### 2. Event Callback Props

Event callback names have been simplified:

```tsx
// ❌ Before (v2.x)
<TawkMessengerReact
  tawkOnLoad={() => {}}
  tawkOnStatusChange={(status) => {}}
  tawkOnChatStarted={() => {}}
/>

// ✅ After (v3.x)
<TawkMessenger
  onLoad={() => {}}
  onStatusChange={(status) => {}}
  onChatStarted={() => {}}
/>
```

**Full mapping:**

| v2.x                       | v3.x                   |
| -------------------------- | ---------------------- |
| `tawkOnLoad`               | `onLoad`               |
| `tawkOnStatusChange`       | `onStatusChange`       |
| `tawkOnBeforeLoad`         | `onBeforeLoad`         |
| `tawkOnChatMaximized`      | `onChatMaximized`      |
| `tawkOnChatMinimized`      | `onChatMinimized`      |
| `tawkOnChatHidden`         | `onChatHidden`         |
| `tawkOnChatStarted`        | `onChatStarted`        |
| `tawkOnChatEnded`          | `onChatEnded`          |
| `tawkOnPrechatSubmit`      | `onPrechatSubmit`      |
| `tawkOnOfflineSubmit`      | `onOfflineSubmit`      |
| `tawkOnChatMessageVisitor` | `onChatMessageVisitor` |
| `tawkOnChatMessageAgent`   | `onChatMessageAgent`   |
| `tawkOnChatMessageSystem`  | `onChatMessageSystem`  |
| `tawkOnAgentJoinChat`      | `onAgentJoinChat`      |
| `tawkOnAgentLeaveChat`     | `onAgentLeaveChat`     |
| `tawkOnChatSatisfaction`   | `onChatSatisfaction`   |
| `tawkOnVisitorNameChanged` | `onVisitorNameChanged` |
| `tawkOnFileUpload`         | `onFileUpload`         |
| `tawkOnTagsUpdated`        | `onTagsUpdated`        |
| `tawkOnUnreadCountChanged` | `onUnreadCountChanged` |

### 3. Ref Method Names

Ref methods have been simplified (removed "tawk" prefix):

```tsx
// ❌ Before (v2.x)
const ref = useRef();
ref.current?.tawkMaximize();
ref.current?.tawkMinimize();
ref.current?.tawkVisitor({ name: 'John' });

// ✅ After (v3.x)
const ref = useRef<TawkMessengerRef>(null);
ref.current?.maximize();
ref.current?.minimize();
ref.current?.setVisitor({ name: 'John' });
```

**Full mapping:**

| v2.x                     | v3.x                             |
| ------------------------ | -------------------------------- |
| `tawkStart()`            | Removed (auto-starts by default) |
| `tawkShutdown()`         | Auto cleanup on unmount          |
| `tawkMaximize()`         | `maximize()`                     |
| `tawkMinimize()`         | `minimize()`                     |
| `tawkToggle()`           | `toggle()`                       |
| `tawkPopup()`            | `popup()`                        |
| `tawkShowWidget()`       | `showWidget()`                   |
| `tawkHideWidget()`       | `hideWidget()`                   |
| `tawkToggleVisibility()` | `toggleVisibility()`             |
| `tawkEndChat()`          | `endChat()`                      |
| `tawkGetWindowType()`    | `getWindowType()`                |
| `tawkGetStatus()`        | `getStatus()`                    |
| `tawkIsChatMaximized()`  | `isChatMaximized()`              |
| `tawkIsChatMinimized()`  | `isChatMinimized()`              |
| `tawkIsChatHidden()`     | `isChatHidden()`                 |
| `tawkIsChatOngoing()`    | `isChatOngoing()`                |
| `tawkIsVisitorEngaged()` | `isVisitorEngaged()`             |
| `tawkWidgetPosition()`   | `widgetPosition()`               |
| `tawkVisitor(data)`      | `setVisitor(data)`               |
| `tawkSetAttributes()`    | `setAttributes()`                |
| `tawkAddEvent()`         | `addEvent()`                     |
| `tawkAddTags()`          | `addTags()`                      |
| `tawkRemoveTags()`       | `removeTags()`                   |
| `tawkSwitchWidget()`     | `switchWidget()`                 |

### 4. TypeScript Support

v3.x is written in TypeScript with full type definitions:

```tsx
// ✅ v3.x with TypeScript
import TawkMessenger, { TawkMessengerRef, TawkMessengerProps } from 'react-tawk-messenger';
import { useRef } from 'react';

function App() {
  const tawkRef = useRef<TawkMessengerRef>(null);

  const props: TawkMessengerProps = {
    propertyId: 'YOUR_PROPERTY_ID',
    widgetId: 'YOUR_WIDGET_ID',
    onLoad: () => console.log('Loaded'),
  };

  return <TawkMessenger ref={tawkRef} {...props} />;
}
```

## Migration Examples

### Basic Usage

```tsx
// ❌ Before (v2.x)
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

function App() {
  return (
    <div>
      <TawkMessengerReact
        propertyId="YOUR_PROPERTY_ID"
        widgetId="default"
        tawkOnLoad={() => console.log('Loaded')}
      />
    </div>
  );
}

// ✅ After (v3.x)
import TawkMessenger from 'react-tawk-messenger';

function App() {
  return (
    <div>
      <TawkMessenger
        propertyId="YOUR_PROPERTY_ID"
        widgetId="default"
        onLoad={() => console.log('Loaded')}
      />
    </div>
  );
}
```

### With Ref

```tsx
// ❌ Before (v2.x)
import { useRef } from 'react';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

function App() {
  const tawkRef = useRef();

  const handleClick = () => {
    tawkRef.current.tawkMaximize();
  };

  return (
    <div>
      <button onClick={handleClick}>Open Chat</button>
      <TawkMessengerReact ref={tawkRef} propertyId="YOUR_PROPERTY_ID" widgetId="default" />
    </div>
  );
}

// ✅ After (v3.x)
import { useRef } from 'react';
import TawkMessenger, { TawkMessengerRef } from 'react-tawk-messenger';

function App() {
  const tawkRef = useRef<TawkMessengerRef>(null);

  const handleClick = () => {
    tawkRef.current?.maximize();
  };

  return (
    <div>
      <button onClick={handleClick}>Open Chat</button>
      <TawkMessenger ref={tawkRef} propertyId="YOUR_PROPERTY_ID" widgetId="default" />
    </div>
  );
}
```

### Next.js Integration

```tsx
// ✅ New in v3.x - Next.js App Router
// app/layout.tsx
import { TawkMessenger } from 'react-tawk-messenger/nextjs';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <TawkMessenger propertyId="YOUR_PROPERTY_ID" widgetId="default" />
      </body>
    </html>
  );
}

// ✅ New in v3.x - Next.js Pages Router
// pages/_app.tsx
import type { AppProps } from 'next/app';
import { TawkMessenger } from 'react-tawk-messenger/nextjs';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <TawkMessenger propertyId="YOUR_PROPERTY_ID" widgetId="default" />
    </>
  );
}
```

## New Features in v3.x

### 1. React 19 Support

Full compatibility with React 19 while maintaining backward compatibility with React 18.

### 2. Next.js 13+ Support

Built-in support for both App Router and Pages Router with proper SSR handling.

### 3. Better TypeScript Support

Complete TypeScript rewrite with comprehensive type definitions.

### 4. Automatic Cleanup

The component now automatically cleans up event listeners on unmount.

### 5. Improved Error Messages

Better error messages for missing required props.

### 6. Smaller Bundle Size

Optimized build with tree-shaking support for smaller bundle sizes.

## Troubleshooting

### "Module not found" error

Make sure you've installed the new package:

```bash
npm install react-tawk-messenger
```

### TypeScript errors

Update your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "moduleResolution": "bundler",
    "jsx": "react-jsx"
  }
}
```

### Next.js "window is not defined" error

Use the Next.js-specific import:

```tsx
import { TawkMessenger } from 'react-tawk-messenger/nextjs';
```

## Need Help?

- 📖 [Documentation](./docs/how-to-use.md)
- 🔍 [API Reference](./docs/api-reference.md)
- 💬 [GitHub Issues](https://github.com/alphaolomi/tawk-messenger-react/issues)
- 📝 [Examples](./examples)

## Rollback

If you need to rollback to v2.x:

```bash
npm uninstall react-tawk-messenger
npm install @tawk.to/tawk-messenger-react@2.1.0
```
