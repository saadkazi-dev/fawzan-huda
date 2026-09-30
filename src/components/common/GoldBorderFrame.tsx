import React from 'react';
import type { BaseComponentProps } from '@/types';
import { cn } from '@/utils/cn';

/**
 * GoldBorderFrame Component
 * Static 2D ornamental gold framing container.
 */
export const GoldBorderFrame: React.FC<BaseComponentProps> = ({ className, style, children }) => {
  return (
    <div className={cn('border-gold-frame', className)} style={style}>
      {children}
    </div>
  );
};
