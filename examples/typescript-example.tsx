// Full TypeScript example with all features

import { useRef, useEffect } from 'react';
import TawkMessenger, { TawkMessengerRef, TawkMessengerProps } from 'react-tawk-messenger';

function App() {
  const tawkRef = useRef<TawkMessengerRef>(null);

  useEffect(() => {
    // Set visitor information
    tawkRef.current?.setVisitor({
      name: 'John Doe',
      email: 'john.doe@example.com',
      hash: 'hash-value', // For secure mode
    });

    // Add custom attributes
    tawkRef.current?.setAttributes(
      {
        plan: 'premium',
        userId: '12345',
      },
      (error) => {
        if (error) {
          console.error('Failed to set attributes:', error);
        }
      }
    );

    // Add tags
    tawkRef.current?.addTags(['vip', 'premium'], (error) => {
      if (error) {
        console.error('Failed to add tags:', error);
      }
    });
  }, []);

  const tawkConfig: TawkMessengerProps = {
    propertyId: 'YOUR_PROPERTY_ID',
    widgetId: 'YOUR_WIDGET_ID',
    embedId: 'tawk-embed', // Optional: for embedded widget
    customStyle: {
      visibility: {
        desktop: {
          position: 'br',
          xOffset: 20,
          yOffset: 20,
        },
        mobile: {
          position: 'br',
          xOffset: 10,
          yOffset: 10,
        },
      },
    },
    onLoad: () => {
      console.log('Tawk widget loaded');
    },
    onStatusChange: (status) => {
      console.log('Status changed:', status);
    },
    onChatStarted: () => {
      console.log('Chat started');
    },
    onChatEnded: () => {
      console.log('Chat ended');
    },
    onChatMessageVisitor: (message) => {
      console.log('Visitor message:', message);
    },
    onChatMessageAgent: (message) => {
      console.log('Agent message:', message);
    },
  };

  return (
    <div>
      <h1>My App with Full Tawk Integration</h1>
      <TawkMessenger ref={tawkRef} {...tawkConfig} />
    </div>
  );
}

export default App;
