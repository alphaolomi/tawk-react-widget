import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import type { TawkMessengerProps, TawkMessengerRef } from './types';
import { isValidString, isBrowser } from './utils/helper';
import { loadScript } from './utils/widget';

const TawkMessenger = forwardRef<TawkMessengerRef, TawkMessengerProps>((props, ref) => {
  const {
    propertyId,
    widgetId,
    embedId = '',
    basePath = 'tawk.to',
    autoStart = true,
    customStyle,
    onLoad = () => {},
    onStatusChange = () => {},
    onBeforeLoad = () => {},
    onChatMaximized = () => {},
    onChatMinimized = () => {},
    onChatHidden = () => {},
    onChatStarted = () => {},
    onChatEnded = () => {},
    onPrechatSubmit = () => {},
    onOfflineSubmit = () => {},
    onChatMessageVisitor = () => {},
    onChatMessageAgent = () => {},
    onChatMessageSystem = () => {},
    onAgentJoinChat = () => {},
    onAgentLeaveChat = () => {},
    onChatSatisfaction = () => {},
    onVisitorNameChanged = () => {},
    onFileUpload = () => {},
    onTagsUpdated = () => {},
    onUnreadCountChanged = () => {},
  } = props;

  const listenersAttached = useRef(false);

  useEffect(() => {
    if (!isValidString(propertyId)) {
      console.error('[react-tawk-messenger]: propertyId is required');
      return;
    }

    if (!isValidString(widgetId)) {
      console.error('[react-tawk-messenger]: widgetId is required');
      return;
    }

    if (!isBrowser()) {
      return;
    }

    // Initialize Tawk API
    window.Tawk_API = window.Tawk_API || ({} as any);
    window.Tawk_LoadStart = new Date();

    // Load the Tawk script
    loadScript({ propertyId, widgetId, embedId, basePath, autoStart });

    // Set custom style if provided
    if (customStyle && typeof customStyle === 'object') {
      window.Tawk_API.customStyle = customStyle;
    }

    // Attach event listeners only once
    if (!listenersAttached.current) {
      attachEventListeners();
      listenersAttached.current = true;
    }

    // Cleanup on unmount
    return () => {
      if (window.Tawk_API) {
        window.Tawk_API.shutdown();
      }
    };
  }, []);

  const attachEventListeners = () => {
    if (!isBrowser()) return;

    window.addEventListener('tawkLoad', onLoad);
    window.addEventListener('tawkStatusChange', (event: any) => onStatusChange(event.detail));
    window.addEventListener('tawkBeforeLoad', onBeforeLoad);
    window.addEventListener('tawkChatMaximized', onChatMaximized);
    window.addEventListener('tawkChatMinimized', onChatMinimized);
    window.addEventListener('tawkChatHidden', onChatHidden);
    window.addEventListener('tawkChatStarted', onChatStarted);
    window.addEventListener('tawkChatEnded', onChatEnded);
    window.addEventListener('tawkPrechatSubmit', (event: any) => onPrechatSubmit(event.detail));
    window.addEventListener('tawkOfflineSubmit', (event: any) => onOfflineSubmit(event.detail));
    window.addEventListener('tawkChatMessageVisitor', (event: any) =>
      onChatMessageVisitor(event.detail)
    );
    window.addEventListener('tawkChatMessageAgent', (event: any) =>
      onChatMessageAgent(event.detail)
    );
    window.addEventListener('tawkChatMessageSystem', (event: any) =>
      onChatMessageSystem(event.detail)
    );
    window.addEventListener('tawkAgentJoinChat', (event: any) => onAgentJoinChat(event.detail));
    window.addEventListener('tawkAgentLeaveChat', (event: any) => onAgentLeaveChat(event.detail));
    window.addEventListener('tawkChatSatisfaction', (event: any) =>
      onChatSatisfaction(event.detail)
    );
    window.addEventListener('tawkVisitorNameChanged', (event: any) =>
      onVisitorNameChanged(event.detail)
    );
    window.addEventListener('tawkFileUpload', (event: any) => onFileUpload(event.detail));
    window.addEventListener('tawkTagsUpdated', (event: any) => onTagsUpdated(event.detail));
    window.addEventListener('tawkUnreadCountChanged', (event: any) =>
      onUnreadCountChanged(event.detail)
    );
  };

  useImperativeHandle(ref, () => ({
    maximize: () => window.Tawk_API?.maximize(),
    minimize: () => window.Tawk_API?.minimize(),
    toggle: () => window.Tawk_API?.toggle(),
    popup: () => window.Tawk_API?.popup(),
    showWidget: () => window.Tawk_API?.showWidget(),
    hideWidget: () => window.Tawk_API?.hideWidget(),
    toggleVisibility: () => window.Tawk_API?.toggleVisibility(),
    endChat: () => window.Tawk_API?.endChat(),
    getWindowType: () => window.Tawk_API?.getWindowType(),
    getStatus: () => window.Tawk_API?.getStatus(),
    isChatMaximized: () => window.Tawk_API?.isChatMaximized(),
    isChatMinimized: () => window.Tawk_API?.isChatMinimized(),
    isChatHidden: () => window.Tawk_API?.isChatHidden(),
    isChatOngoing: () => window.Tawk_API?.isChatOngoing(),
    isVisitorEngaged: () => window.Tawk_API?.isVisitorEngaged(),
    onLoaded: () => window.Tawk_API?.onLoaded,
    onBeforeLoaded: () => window.Tawk_API?.onBeforeLoaded,
    widgetPosition: () => window.Tawk_API?.widgetPosition(),
    setVisitor: (data: Record<string, any>) => {
      if (window.Tawk_API) {
        window.Tawk_API.visitor = data;
      }
    },
    setAttributes: (attributes, callback) => window.Tawk_API?.setAttributes(attributes, callback),
    addEvent: (event, metadata, callback) => window.Tawk_API?.addEvent(event, metadata, callback),
    addTags: (tags, callback) => window.Tawk_API?.addTags(tags, callback),
    removeTags: (tags, callback) => window.Tawk_API?.removeTags(tags, callback),
    switchWidget: (options, callback) => window.Tawk_API?.switchWidget(options, callback),
  }));

  return null;
});

TawkMessenger.displayName = 'TawkMessenger';

export default TawkMessenger;
export type { TawkMessengerProps, TawkMessengerRef };
