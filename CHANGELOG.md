# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [3.0.0] - 2024-10-24

### 🎉 Major Release - Complete Rewrite

This is a complete rewrite of the package with modern tooling and best practices.

### ✨ Added

- **React 19 Support**: Full compatibility with React 19
- **TypeScript**: Complete TypeScript rewrite with comprehensive type definitions
- **Next.js 13+ Support**: Built-in support for both App Router and Pages Router
- **Modern Build System**: Migrated from Vite to tsup for better build performance
- **Vitest**: Migrated from Jest to Vitest for faster and more modern testing
- **ESM & CJS**: Dual module format support with proper exports
- **Tree-shaking**: Better bundle size optimization
- **Comprehensive Documentation**: Updated with TypeScript examples and Next.js guides
- **Better Error Handling**: Improved error messages and validation
- **Event Cleanup**: Proper cleanup of event listeners on unmount
- **Type Safety**: Full TypeScript types for all API methods and events

### 🔧 Changed

- **Package Name**: Changed from `@tawk.to/tawk-messenger-react` to `react-tawk-messenger`
- **Build System**: Replaced Vite with tsup for library builds
- **Test Framework**: Replaced Jest with Vitest
- **File Extensions**: All source files migrated from `.js` to `.ts/.tsx`
- **API**: Simplified and more type-safe API methods through refs
- **Event Naming**: Standardized event callback naming (e.g., `tawkOnLoad` → `onLoad`)
- **Code Structure**: Cleaner, more maintainable code structure

### 🗑️ Removed

- **PropTypes**: Removed in favor of TypeScript types
- **Legacy Dependencies**: Removed outdated dependencies
- **React Scripts**: Removed react-scripts dependency

### 📦 Package Updates

- React peer dependency: `^18.0.0 || ^19.0.0`
- React DOM peer dependency: `^18.0.0 || ^19.0.0`
- Added optional Next.js peer dependency

### 🐛 Fixed

- Memory leaks from event listeners
- Next.js SSR compatibility issues
- TypeScript definition issues
- Bundle size optimization

### 📚 Documentation

- Complete rewrite of README with modern examples
- Added comprehensive API reference
- Added detailed usage guide
- Added TypeScript examples
- Added Next.js integration examples

### 🚀 Migration Guide

If you're upgrading from v2.x:

1. Update package name:

   ```bash
   npm uninstall @tawk.to/tawk-messenger-react
   npm install react-tawk-messenger
   ```

2. Update imports:

   ```tsx
   // Before
   import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

   // After
   import TawkMessenger from 'react-tawk-messenger';
   // or for Next.js
   import { TawkMessenger } from 'react-tawk-messenger/nextjs';
   ```

3. Update prop names (event callbacks):

   ```tsx
   // Before
   <TawkMessengerReact tawkOnLoad={() => {}} />

   // After
   <TawkMessenger onLoad={() => {}} />
   ```

4. Update ref method names:

   ```tsx
   // Before
   ref.current?.tawkMaximize();

   // After
   ref.current?.maximize();
   ```

---

## [2.1.0] - Previous Version

### Added

- Basic React 18 support
- Vite build system
- Basic TypeScript definitions

### Changed

- Improved widget loading

---

## [1.0.0] - Initial Release

### Added

- Initial release with React support
- Basic Tawk.to widget integration
- PropTypes for type checking
