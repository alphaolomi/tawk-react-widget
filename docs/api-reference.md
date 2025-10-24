# API Reference

Complete API reference for `react-tawk-messenger`.

## Table of Contents

- [Component Props](#component-props)
- [Ref Methods](#ref-methods)
- [TypeScript Types](#typescript-types)
- [Events](#events)

## Component Props

### Required Props

#### `propertyId`

- **Type:** `string`
- **Required:** Yes
- **Description:** Your Tawk.to Property ID. Found in your Tawk.to dashboard under Administration → Channels → Chat Widget.

```tsx
<TawkMessenger propertyId="YOUR_PROPERTY_ID" widgetId="default" />
```

#### `widgetId`

- **Type:** `string`
- **Required:** Yes
- **Description:** Your Tawk.to Widget ID. Found in your Tawk.to dashboard under Administration → Channels → Chat Widget.

```tsx
<TawkMessenger propertyId="YOUR_PROPERTY_ID" widgetId="default" />
```

### Optional Props

#### `embedId`

- **Type:** `string`
- **Default:** `''`
- **Description:** ID of the DOM element where the widget should be embedded (for inline/embedded mode).

```tsx
<TawkMessenger propertyId="YOUR_PROPERTY_ID" widgetId="default" embedId="tawk-container" />
```

#### `basePath`

- **Type:** `string`
- **Default:** `'tawk.to'`
- **Description:** Custom base path for self-hosted Tawk instances.

```tsx
<TawkMessenger propertyId="YOUR_PROPERTY_ID" widgetId="default" basePath="chat.yourdomain.com" />
```

#### `autoStart`

- **Type:** `boolean`
- **Default:** `true`
- **Description:** Whether to automatically start the widget on load.

```tsx
<TawkMessenger propertyId="YOUR_PROPERTY_ID" widgetId="default" autoStart={false} />
```

#### `customStyle`

- **Type:** `object`
- **Default:** `undefined`
- **Description:** Custom styling configuration for the widget.

```tsx
<TawkMessenger
  propertyId="YOUR_PROPERTY_ID"
  widgetId="default"
  customStyle={{
    visibility: {
      desktop: { position: 'br', xOffset: 20, yOffset: 20 },
      mobile: { position: 'br', xOffset: 10, yOffset: 10 },
    },
  }}
/>
```

## Events

### `onLoad`

- **Type:** `() => void`
- **Description:** Called when the widget has finished loading.

```tsx
<TawkMessenger
  propertyId="YOUR_PROPERTY_ID"
  widgetId="default"
  onLoad={() => console.log('Widget loaded')}
/>
```

### `onStatusChange`

- **Type:** `(status: string) => void`
- **Description:** Called when the widget status changes (online, away, offline).

```tsx
<TawkMessenger
  propertyId="YOUR_PROPERTY_ID"
  widgetId="default"
  onStatusChange={(status) => console.log('Status:', status)}
/>
```

### `onBeforeLoad`

- **Type:** `() => void`
- **Description:** Called before the widget loads.

### `onChatMaximized`

- **Type:** `() => void`
- **Description:** Called when the chat widget is maximized.

### `onChatMinimized`

- **Type:** `() => void`
- **Description:** Called when the chat widget is minimized.

### `onChatHidden`

- **Type:** `() => void`
- **Description:** Called when the chat widget is hidden.

### `onChatStarted`

- **Type:** `() => void`
- **Description:** Called when a chat session starts.

### `onChatEnded`

- **Type:** `() => void`
- **Description:** Called when a chat session ends.

### `onPrechatSubmit`

- **Type:** `(data: any) => void`
- **Description:** Called when the pre-chat form is submitted.

### `onOfflineSubmit`

- **Type:** `(data: any) => void`
- **Description:** Called when the offline form is submitted.

### `onChatMessageVisitor`

- **Type:** `(message: string) => void`
- **Description:** Called when the visitor sends a message.

### `onChatMessageAgent`

- **Type:** `(message: string) => void`
- **Description:** Called when an agent sends a message.

### `onChatMessageSystem`

- **Type:** `(message: string) => void`
- **Description:** Called when a system message is displayed.

### `onAgentJoinChat`

- **Type:** `(data: any) => void`
- **Description:** Called when an agent joins the chat.

### `onAgentLeaveChat`

- **Type:** `(data: any) => void`
- **Description:** Called when an agent leaves the chat.

### `onChatSatisfaction`

- **Type:** `(satisfaction: string) => void`
- **Description:** Called when visitor rates the chat.

### `onVisitorNameChanged`

- **Type:** `(visitorName: string) => void`
- **Description:** Called when the visitor's name changes.

### `onFileUpload`

- **Type:** `(link: string) => void`
- **Description:** Called when a file is uploaded.

### `onTagsUpdated`

- **Type:** `(data: any) => void`
- **Description:** Called when visitor tags are updated.

### `onUnreadCountChanged`

- **Type:** `(count: number) => void`
- **Description:** Called when the unread message count changes.

## Ref Methods

Access these methods through a ref:

```tsx
const tawkRef = useRef<TawkMessengerRef>(null);
tawkRef.current?.maximize();
```

### Widget Control Methods

#### `maximize()`

- **Returns:** `void`
- **Description:** Maximizes the chat widget.

```tsx
tawkRef.current?.maximize();
```

#### `minimize()`

- **Returns:** `void`
- **Description:** Minimizes the chat widget.

```tsx
tawkRef.current?.minimize();
```

#### `toggle()`

- **Returns:** `void`
- **Description:** Toggles the chat widget between maximized and minimized states.

```tsx
tawkRef.current?.toggle();
```

#### `popup()`

- **Returns:** `void`
- **Description:** Opens the widget in a popup window.

```tsx
tawkRef.current?.popup();
```

#### `showWidget()`

- **Returns:** `void`
- **Description:** Shows the chat widget.

```tsx
tawkRef.current?.showWidget();
```

#### `hideWidget()`

- **Returns:** `void`
- **Description:** Hides the chat widget.

```tsx
tawkRef.current?.hideWidget();
```

#### `toggleVisibility()`

- **Returns:** `void`
- **Description:** Toggles the visibility of the chat widget.

```tsx
tawkRef.current?.toggleVisibility();
```

#### `endChat()`

- **Returns:** `void`
- **Description:** Ends the current chat session.

```tsx
tawkRef.current?.endChat();
```

### Widget State Methods

#### `getWindowType()`

- **Returns:** `'inline' | 'popup' | null`
- **Description:** Returns the current window type of the widget.

```tsx
const type = tawkRef.current?.getWindowType();
console.log(type); // 'inline', 'popup', or null
```

#### `getStatus()`

- **Returns:** `'online' | 'away' | 'offline'`
- **Description:** Returns the current status of the widget.

```tsx
const status = tawkRef.current?.getStatus();
console.log(status); // 'online', 'away', or 'offline'
```

#### `isChatMaximized()`

- **Returns:** `boolean`
- **Description:** Returns true if the chat is currently maximized.

```tsx
const isMax = tawkRef.current?.isChatMaximized();
```

#### `isChatMinimized()`

- **Returns:** `boolean`
- **Description:** Returns true if the chat is currently minimized.

```tsx
const isMin = tawkRef.current?.isChatMinimized();
```

#### `isChatHidden()`

- **Returns:** `boolean`
- **Description:** Returns true if the chat is currently hidden.

```tsx
const isHidden = tawkRef.current?.isChatHidden();
```

#### `isChatOngoing()`

- **Returns:** `boolean`
- **Description:** Returns true if there's an ongoing chat session.

```tsx
const isOngoing = tawkRef.current?.isChatOngoing();
```

#### `isVisitorEngaged()`

- **Returns:** `boolean`
- **Description:** Returns true if the visitor is engaged (has sent a message).

```tsx
const isEngaged = tawkRef.current?.isVisitorEngaged();
```

#### `widgetPosition()`

- **Returns:** `{ left: number; right: number; top: number; bottom: number } | null`
- **Description:** Returns the current position of the widget.

```tsx
const position = tawkRef.current?.widgetPosition();
console.log(position); // { left: 0, right: 20, top: 0, bottom: 20 }
```

### Visitor Management Methods

#### `setVisitor(data)`

- **Parameters:**
  - `data`: `Record<string, any>` - Visitor data object
- **Returns:** `void`
- **Description:** Sets visitor information.

```tsx
tawkRef.current?.setVisitor({
  name: 'John Doe',
  email: 'john@example.com',
  hash: 'hash-value', // For secure mode
});
```

#### `setAttributes(attributes, callback?)`

- **Parameters:**
  - `attributes`: `Record<string, any>` - Custom attributes
  - `callback?`: `(error: Error | null) => void` - Optional callback
- **Returns:** `void`
- **Description:** Sets custom attributes for the visitor.

```tsx
tawkRef.current?.setAttributes(
  {
    userId: '12345',
    plan: 'premium',
    signupDate: '2024-01-01',
  },
  (error) => {
    if (error) console.error('Failed:', error);
  }
);
```

#### `addEvent(event, metadata?, callback?)`

- **Parameters:**
  - `event`: `string` - Event name
  - `metadata?`: `Record<string, any>` - Optional event metadata
  - `callback?`: `(error: Error | null) => void` - Optional callback
- **Returns:** `void`
- **Description:** Tracks a custom event.

```tsx
tawkRef.current?.addEvent(
  'purchase',
  {
    productId: 'prod-123',
    amount: 99.99,
  },
  (error) => {
    if (error) console.error('Failed:', error);
  }
);
```

#### `addTags(tags, callback?)`

- **Parameters:**
  - `tags`: `string[]` - Array of tags to add
  - `callback?`: `(error: Error | null) => void` - Optional callback
- **Returns:** `void`
- **Description:** Adds tags to the visitor.

```tsx
tawkRef.current?.addTags(['vip', 'premium'], (error) => {
  if (error) console.error('Failed:', error);
});
```

#### `removeTags(tags, callback?)`

- **Parameters:**
  - `tags`: `string[]` - Array of tags to remove
  - `callback?`: `(error: Error | null) => void` - Optional callback
- **Returns:** `void`
- **Description:** Removes tags from the visitor.

```tsx
tawkRef.current?.removeTags(['trial'], (error) => {
  if (error) console.error('Failed:', error);
});
```

#### `switchWidget(options, callback?)`

- **Parameters:**
  - `options`: `{ propertyId: string; widgetId: string }` - New widget configuration
  - `callback?`: `() => void` - Optional callback
- **Returns:** `void`
- **Description:** Switches to a different widget.

```tsx
tawkRef.current?.switchWidget(
  {
    propertyId: 'NEW_PROPERTY_ID',
    widgetId: 'NEW_WIDGET_ID',
  },
  () => {
    console.log('Widget switched');
  }
);
```

## TypeScript Types

### `TawkMessengerProps`

```typescript
interface TawkMessengerProps {
  propertyId: string;
  widgetId: string;
  embedId?: string;
  basePath?: string;
  autoStart?: boolean;
  customStyle?: Record<string, any>;
  onLoad?: () => void;
  onStatusChange?: (status: string) => void;
  onBeforeLoad?: () => void;
  onChatMaximized?: () => void;
  onChatMinimized?: () => void;
  onChatHidden?: () => void;
  onChatStarted?: () => void;
  onChatEnded?: () => void;
  onPrechatSubmit?: (data: any) => void;
  onOfflineSubmit?: (data: any) => void;
  onChatMessageVisitor?: (message: string) => void;
  onChatMessageAgent?: (message: string) => void;
  onChatMessageSystem?: (message: string) => void;
  onAgentJoinChat?: (data: any) => void;
  onAgentLeaveChat?: (data: any) => void;
  onChatSatisfaction?: (satisfaction: string) => void;
  onVisitorNameChanged?: (visitorName: string) => void;
  onFileUpload?: (link: string) => void;
  onTagsUpdated?: (data: any) => void;
  onUnreadCountChanged?: (count: number) => void;
}
```

### `TawkMessengerRef`

```typescript
interface TawkMessengerRef {
  maximize: () => void;
  minimize: () => void;
  toggle: () => void;
  popup: () => void;
  showWidget: () => void;
  hideWidget: () => void;
  toggleVisibility: () => void;
  endChat: () => void;
  getWindowType: () => 'inline' | 'popup' | null;
  getStatus: () => 'online' | 'away' | 'offline';
  isChatMaximized: () => boolean;
  isChatMinimized: () => boolean;
  isChatHidden: () => boolean;
  isChatOngoing: () => boolean;
  isVisitorEngaged: () => boolean;
  onLoaded: () => boolean;
  onBeforeLoaded: () => boolean;
  widgetPosition: () => { left: number; right: number; top: number; bottom: number } | null;
  setVisitor: (data: Record<string, any>) => void;
  setAttributes: (
    attributes: Record<string, any>,
    callback?: (error: Error | null) => void
  ) => void;
  addEvent: (
    event: string,
    metadata?: Record<string, any>,
    callback?: (error: Error | null) => void
  ) => void;
  addTags: (tags: string[], callback?: (error: Error | null) => void) => void;
  removeTags: (tags: string[], callback?: (error: Error | null) => void) => void;
  switchWidget: (options: { propertyId: string; widgetId: string }, callback?: () => void) => void;
}
```

## Examples

See the [How to Use](./how-to-use.md) guide and [examples](../examples) directory for complete usage examples.
