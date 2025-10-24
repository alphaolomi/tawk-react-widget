# tawk-react-widget

<p align="center">
  <img src="./images/tawk-react-logo.png" alt="Tawk React Logo" width="200"/>
</p>

<p align="center">
  <strong>Modern React component for Tawk.to live chat messenger</strong>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/tawk-react-widget"><img src="https://img.shields.io/npm/v/tawk-react-widget.svg" alt="npm version"></a>
  <a href="https://github.com/alphaolomi/tawk-react-widget/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/tawk-react-widget.svg" alt="license"></a>
  <img src="https://img.shields.io/badge/TypeScript-Ready-blue.svg" alt="TypeScript">
  <img src="https://img.shields.io/badge/React-19-61dafb.svg" alt="React 19">
</p>

## ✨ Features

- ⚛️ **React 19 Support** - Full compatibility with the latest React version
- 📘 **TypeScript First** - Written in TypeScript with comprehensive type definitions
- ⚡ **Next.js 13+ Ready** - Built-in support for both App Router and Pages Router
- 🪝 **React Hooks** - Modern hooks-based API
- 🎯 **Fully Typed API** - All Tawk.to JavaScript API methods with TypeScript support
- 📦 **Zero Dependencies** - No external runtime dependencies (except React peer deps)
- 🔧 **ESM & CJS** - Dual module format support
- 🧪 **Well Tested** - Comprehensive test coverage with Vitest
- 📝 **Documented** - Extensive documentation and examples
- 🚀 **Optimized** - Small bundle size, tree-shakeable

## 📦 Installation

```bash
# npm
npm install tawk-react-widget

# yarn
yarn add tawk-react-widget

# pnpm
pnpm add tawk-react-widget
```

## 🚀 Quick Start

### Basic Usage (React)

```tsx
import TawkMessenger from 'tawk-react-widget';

function App() {
  return (
    <div className="App">
      <h1>My Application</h1>
      <TawkMessenger propertyId="YOUR_PROPERTY_ID" widgetId="YOUR_WIDGET_ID" />
    </div>
  );
}

export default App;
```

### Next.js 13+ (App Router)

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

### Next.js (Pages Router)

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

## 🎯 Getting Your Credentials

1. Log in to your [Tawk.to Dashboard](https://dashboard.tawk.to/)
2. Go to **Administration** → **Channels** → **Chat Widget**
3. Copy your **Property ID** and **Widget ID**

## 📖 Usage with Ref

Control the widget programmatically using refs:

```tsx
import { useRef } from 'react';
import TawkMessenger, { TawkMessengerRef } from 'tawk-react-widget';

function App() {
  const tawkRef = useRef<TawkMessengerRef>(null);

  const handleOpenChat = () => {
    tawkRef.current?.maximize();
  };

  const handleMinimizeChat = () => {
    tawkRef.current?.minimize();
  };

  return (
    <div>
      <button onClick={handleOpenChat}>Open Chat</button>
      <button onClick={handleMinimizeChat}>Minimize Chat</button>

      <TawkMessenger ref={tawkRef} propertyId="YOUR_PROPERTY_ID" widgetId="YOUR_WIDGET_ID" />
    </div>
  );
}
```

## 🔧 API Reference

### Props

| Prop                   | Type                        | Required | Default     | Description                      |
| ---------------------- | --------------------------- | -------- | ----------- | -------------------------------- |
| `propertyId`           | `string`                    | ✅       | -           | Your Tawk.to Property ID         |
| `widgetId`             | `string`                    | ✅       | -           | Your Tawk.to Widget ID           |
| `embedId`              | `string`                    | ❌       | `''`        | ID for embedded widget mode      |
| `basePath`             | `string`                    | ❌       | `'tawk.to'` | Custom base path for self-hosted |
| `autoStart`            | `boolean`                   | ❌       | `true`      | Auto-start the widget            |
| `customStyle`          | `object`                    | ❌       | `undefined` | Custom widget styling            |
| `onLoad`               | `() => void`                | ❌       | -           | Called when widget loads         |
| `onStatusChange`       | `(status: string) => void`  | ❌       | -           | Called when status changes       |
| `onChatStarted`        | `() => void`                | ❌       | -           | Called when chat starts          |
| `onChatEnded`          | `() => void`                | ❌       | -           | Called when chat ends            |
| `onChatMaximized`      | `() => void`                | ❌       | -           | Called when chat is maximized    |
| `onChatMinimized`      | `() => void`                | ❌       | -           | Called when chat is minimized    |
| `onChatMessageVisitor` | `(message: string) => void` | ❌       | -           | Called on visitor message        |
| `onChatMessageAgent`   | `(message: string) => void` | ❌       | -           | Called on agent message          |

### Ref Methods

All methods are available through the component ref:

```typescript
interface TawkMessengerRef {
  // Widget Control
  maximize(): void;
  minimize(): void;
  toggle(): void;
  popup(): void;
  showWidget(): void;
  hideWidget(): void;
  toggleVisibility(): void;
  endChat(): void;

  // Widget State
  getWindowType(): 'inline' | 'popup' | null;
  getStatus(): 'online' | 'away' | 'offline';
  isChatMaximized(): boolean;
  isChatMinimized(): boolean;
  isChatHidden(): boolean;
  isChatOngoing(): boolean;
  isVisitorEngaged(): boolean;

  // Visitor Management
  setVisitor(data: Record<string, any>): void;
  setAttributes(attributes: Record<string, any>, callback?: (error: Error | null) => void): void;
  addEvent(
    event: string,
    metadata?: Record<string, any>,
    callback?: (error: Error | null) => void
  ): void;
  addTags(tags: string[], callback?: (error: Error | null) => void): void;
  removeTags(tags: string[], callback?: (error: Error | null) => void): void;
}
```

## 📚 Examples

Check out the [`examples`](./examples) directory for more detailed examples:

- [Next.js App Router](./examples/nextjs-app-router.tsx)
- [Next.js Pages Router](./examples/nextjs-pages-router.tsx)
- [React with Ref](./examples/react-with-ref.tsx)
- [Full TypeScript Example](./examples/typescript-example.tsx)

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## 🏗️ Building

```bash
# Build the package
npm run build

# Type check
npm run typecheck
```

## 📄 Documentation

For detailed documentation, see:

- [How to Use](./docs/how-to-use.md) - Comprehensive usage guide
- [API Reference](./docs/api-reference.md) - Complete API documentation

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the Apache-2.0 License - see the [LICENSE](./LICENSE) file for details.

## 🙏 Credits

This package is a modern TypeScript fork of [@tawk.to/tawk-messenger-react](https://github.com/tawk/tawk-messenger-react) with additional features and improvements.

## 🔗 Links

- [Tawk.to Website](https://www.tawk.to)
- [Tawk.to JavaScript API Documentation](https://developer.tawk.to/jsapi/)
- [GitHub Repository](https://github.com/alphaolomi/tawk-react-widget)
- [npm Package](https://www.npmjs.com/package/tawk-react-widget)

## 💬 Support

For issues, questions, or contributions, please visit our [GitHub Issues](https://github.com/alphaolomi/tawk-react-widget/issues).
