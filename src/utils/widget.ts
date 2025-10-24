import type { LoadScriptOptions } from '../types';

/**
 * Loads the Tawk.to widget script into the document
 * @param options - Configuration options for the Tawk widget
 */
export function loadScript({
  propertyId,
  widgetId,
  embedId = '',
  basePath = 'tawk.to',
  autoStart = true,
}: LoadScriptOptions): void {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  // Handle embedded widget
  if (embedId.length > 0) {
    if (!document.getElementById(embedId)) {
      const element = document.createElement('div');
      element.id = embedId;
      document.body.appendChild(element);
    }
    window.Tawk_API.embedded = embedId;
  }

  // Configure auto-start
  if (!autoStart) {
    window.Tawk_API.autoStart = autoStart;
  }

  // Create and inject the script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://embed.${basePath}/${propertyId}/${widgetId}`;
  script.charset = 'UTF-8';
  script.setAttribute('crossorigin', '*');

  const firstScript = document.getElementsByTagName('script')[0];
  if (firstScript?.parentNode) {
    firstScript.parentNode.insertBefore(script, firstScript);
  }
}
