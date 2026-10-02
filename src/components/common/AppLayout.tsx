import React, { useEffect } from 'react';
import type { BaseComponentProps, InvitationStage } from '@/types';
import { cn } from '@/utils/cn';

export interface AppLayoutProps extends BaseComponentProps {
  stage?: InvitationStage;
}

/**
 * AppLayout Component
 * Provides an edge-to-edge mobile web app viewport container wrapper.
 * Handles safe-area insets, dynamic viewport heights (100dvh), and desktop stage presentation.
 */
export const AppLayout: React.FC<AppLayoutProps> = ({
  className,
  style,
  children,
  stage = 'preloader',
}) => {
  useEffect(() => {
    const isOpeningStage = stage === 'preloader' || stage === 'opening-video';

    if (isOpeningStage) {
      document.documentElement.classList.add('opening-stage-active');
      document.body.classList.add('opening-stage-active');
    } else {
      document.documentElement.classList.remove('opening-stage-active');
      document.body.classList.remove('opening-stage-active');
    }

    return () => {
      document.documentElement.classList.remove('opening-stage-active');
      document.body.classList.remove('opening-stage-active');
    };
  }, [stage]);

  return (
    <div className={cn('app-viewport', `stage-${stage}`)}>
      <div className={cn('app-wrapper', className)} style={style}>
        <main className="main-content">{children}</main>
      </div>
    </div>
  );
};

