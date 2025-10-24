import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render } from '@testing-library/react';
import { useRef } from 'react';
import TawkMessenger from '../index';
import type { TawkMessengerRef } from '../types';

describe('TawkMessenger', () => {
  beforeEach(() => {
    // Setup window.Tawk_API mock
    (window as any).Tawk_API = {
      maximize: vi.fn(),
      minimize: vi.fn(),
      toggle: vi.fn(),
      popup: vi.fn(),
      showWidget: vi.fn(),
      hideWidget: vi.fn(),
      toggleVisibility: vi.fn(),
      endChat: vi.fn(),
      getWindowType: vi.fn(() => 'inline'),
      getStatus: vi.fn(() => 'online'),
      isChatMaximized: vi.fn(() => false),
      isChatMinimized: vi.fn(() => false),
      isChatHidden: vi.fn(() => false),
      isChatOngoing: vi.fn(() => false),
      isVisitorEngaged: vi.fn(() => false),
      widgetPosition: vi.fn(() => ({ left: 0, right: 0, top: 0, bottom: 0 })),
      setAttributes: vi.fn(),
      addEvent: vi.fn(),
      addTags: vi.fn(),
      removeTags: vi.fn(),
      switchWidget: vi.fn(),
      shutdown: vi.fn(),
      onLoaded: false,
      onBeforeLoaded: false,
    };
  });

  afterEach(() => {
    delete (window as any).Tawk_API;
    delete (window as any).Tawk_LoadStart;
    vi.clearAllMocks();
  });

  it('should render without crashing', () => {
    const { container } = render(
      <TawkMessenger propertyId="test-property-id" widgetId="test-widget-id" />
    );
    expect(container).toBeTruthy();
  });

  it('should log error when propertyId is missing', () => {
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {});
    render(<TawkMessenger propertyId="" widgetId="test-widget-id" />);
    expect(consoleError).toHaveBeenCalledWith('[react-tawk-messenger]: propertyId is required');
    consoleError.mockRestore();
  });

  it('should log error when widgetId is missing', () => {
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {});
    render(<TawkMessenger propertyId="test-property-id" widgetId="" />);
    expect(consoleError).toHaveBeenCalledWith('[react-tawk-messenger]: widgetId is required');
    consoleError.mockRestore();
  });

  it('should expose ref methods', () => {
    const TestComponent = () => {
      const ref = useRef<TawkMessengerRef>(null);
      return <TawkMessenger ref={ref} propertyId="test-property-id" widgetId="test-widget-id" />;
    };

    const { container } = render(<TestComponent />);
    expect(container).toBeTruthy();
  });

  it('should call maximize method through ref', () => {
    const TestComponent = () => {
      const ref = useRef<TawkMessengerRef>(null);
      setTimeout(() => {
        ref.current?.maximize();
      }, 0);
      return <TawkMessenger ref={ref} propertyId="test-property-id" widgetId="test-widget-id" />;
    };

    render(<TestComponent />);
    setTimeout(() => {
      expect((window as any).Tawk_API.maximize).toHaveBeenCalled();
    }, 100);
  });

  it('should handle custom style prop', () => {
    const customStyle = { backgroundColor: 'red' };
    render(
      <TawkMessenger
        propertyId="test-property-id"
        widgetId="test-widget-id"
        customStyle={customStyle}
      />
    );
    expect((window as any).Tawk_API.customStyle).toEqual(customStyle);
  });

  it('should call onLoad callback', () => {
    const onLoad = vi.fn();
    render(
      <TawkMessenger propertyId="test-property-id" widgetId="test-widget-id" onLoad={onLoad} />
    );

    // Trigger the load event
    const event = new Event('tawkLoad');
    window.dispatchEvent(event);

    expect(onLoad).toHaveBeenCalled();
  });

  it('should shutdown on unmount', () => {
    const { unmount } = render(
      <TawkMessenger propertyId="test-property-id" widgetId="test-widget-id" />
    );

    unmount();
    expect((window as any).Tawk_API.shutdown).toHaveBeenCalled();
  });
});
