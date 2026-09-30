import React from 'react';
import type { BaseComponentProps } from '@/types';
import { cn } from '@/utils/cn';

/**
 * AppLayout Component
 * Provides a mobile-first portrait container wrapper.
 * On desktop and tablet, centers the portrait invitation inside a luxury stage backdrop.
 */
export const AppLayout: React.FC<BaseComponentProps> = ({ className, style, children }) => {
  return (
    <div className="app-viewport">
      <div className={cn('app-wrapper', className)} style={style}>
        <main className="main-content">
          {children}
        </main>
      </div>
    </div>
  );
};
