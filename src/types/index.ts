/**
 * Core Type Definitions for Mobile-First Wedding Invitation Application
 */

import React from 'react';

export interface BaseComponentProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export type ThemeVariant = 'cream' | 'midnight' | 'maroon';

export type InvitationStage = 'preloader' | 'opening-video' | 'hero-mount';

export interface SectionMeta {
  id: string;
  title: string;
  enabled: boolean;
}

