import { useContext } from 'react';
import { AudioContext } from './AudioContext';
import type { AudioContextValue } from './AudioContext';

export const useAudio = (): AudioContextValue => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};
