export interface TawkAPI {
  start: () => void;
  shutdown: () => void;
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
  onLoaded: boolean;
  onBeforeLoaded: boolean;
  widgetPosition: () => { left: number; right: number; top: number; bottom: number } | null;
  visitor: Record<string, any>;
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
  customStyle?: Record<string, any>;
  embedded?: string;
  autoStart?: boolean;
}

export interface TawkMessengerRef {
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

export interface TawkMessengerProps {
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

export interface LoadScriptOptions {
  propertyId: string;
  widgetId: string;
  embedId?: string;
  basePath?: string;
  autoStart?: boolean;
}

declare global {
  interface Window {
    Tawk_API: TawkAPI;
    Tawk_LoadStart: Date;
  }
}
