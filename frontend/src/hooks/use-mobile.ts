import * as React from 'react';

const MOBILE_BREAKPOINT = 768;
const QUERY = `(max-width: ${MOBILE_BREAKPOINT - 1}px)`;

export function useIsMobile() {
  const getSnapshot = React.useCallback(
    () => typeof window !== 'undefined' && window.matchMedia(QUERY).matches,
    []
  );

  const subscribe = React.useCallback((listener: () => void) => {
    if (typeof window === 'undefined') return () => {};
    const mql = window.matchMedia(QUERY);
    const handler = () => listener();
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  return React.useSyncExternalStore(subscribe, getSnapshot, () => false);
}

