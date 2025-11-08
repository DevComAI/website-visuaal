'use client';

import { ReactNode } from 'react';

interface PageReadyProviderProps {
  children: ReactNode;
}

/**
 * Simplified provider - no loading screen needed with static images
 */
export function PageReadyProvider({ children }: PageReadyProviderProps) {
  return <>{children}</>;
}
