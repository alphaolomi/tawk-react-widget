// Example using React with ref to control the widget

import { useRef } from 'react';
import TawkMessenger, { TawkMessengerRef } from 'tawk-react-widget';

function App() {
  const tawkRef = useRef<TawkMessengerRef>(null);

  const handleMaximize = () => {
    tawkRef.current?.maximize();
  };

  const handleMinimize = () => {
    tawkRef.current?.minimize();
  };

  const handleToggle = () => {
    tawkRef.current?.toggle();
  };

  return (
    <div>
      <h1>My App</h1>

      <button onClick={handleMaximize}>Open Chat</button>
      <button onClick={handleMinimize}>Minimize Chat</button>
      <button onClick={handleToggle}>Toggle Chat</button>

      <TawkMessenger
        ref={tawkRef}
        propertyId="YOUR_PROPERTY_ID"
        widgetId="YOUR_WIDGET_ID"
        onLoad={() => console.log('Tawk loaded!')}
        onChatStarted={() => console.log('Chat started')}
      />
    </div>
  );
}

export default App;
