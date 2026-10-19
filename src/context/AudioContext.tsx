import React, {
  createContext,
  useRef,
  useState,
  useEffect,
  useCallback,
} from 'react';

export interface AudioContextValue {
  isMuted: boolean;
  isPlaying: boolean;
  toggleMute: () => void;
  pauseForVideo: () => void;
  resumeFromVideo: () => void;
}

export const AudioContext = createContext<AudioContextValue | null>(null);

const AUDIO_SRC = '/Audio/audio%20website.mp3';

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // References to preserve user intent & video ducking across re-renders
  const userHasMutedRef = useRef<boolean>(false);
  const activeVideoCountRef = useRef<number>(0);
  const wasPlayingBeforeVideoRef = useRef<boolean>(false);

  useEffect(() => {
    // Instantiate single audio instance
    const audio = new Audio(AUDIO_SRC);
    audio.loop = true;
    audio.preload = 'auto';
    audio.volume = 1;
    audioRef.current = audio;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    // One-time interaction unlocker for browsers enforcing strict autoplay policies
    const unlockAndPlay = async () => {
      window.removeEventListener('click', unlockAndPlay);
      window.removeEventListener('touchstart', unlockAndPlay);
      window.removeEventListener('keydown', unlockAndPlay);

      if (audioRef.current && !userHasMutedRef.current && activeVideoCountRef.current === 0) {
        try {
          await audioRef.current.play();
          setIsMuted(false);
        } catch (err) {
          console.warn('Audio playback on interaction was blocked or interrupted:', err);
        }
      }
    };

    // Attempt direct unmuted autoplay on initial mount
    const startPlayback = async () => {
      if (userHasMutedRef.current || activeVideoCountRef.current > 0) return;

      try {
        await audio.play();
        setIsMuted(false);
      } catch {
        // Autoplay blocked: listen for first valid user interaction anywhere on the page
        window.addEventListener('click', unlockAndPlay, { passive: true });
        window.addEventListener('touchstart', unlockAndPlay, { passive: true });
        window.addEventListener('keydown', unlockAndPlay, { passive: true });
      }
    };

    startPlayback();

    return () => {
      window.removeEventListener('click', unlockAndPlay);
      window.removeEventListener('touchstart', unlockAndPlay);
      window.removeEventListener('keydown', unlockAndPlay);

      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.pause();
      audio.src = '';
      audio.remove();
      audioRef.current = null;
    };
  }, []);

  const toggleMute = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isMuted) {
      // Unmuting by explicit user action
      userHasMutedRef.current = false;
      setIsMuted(false);

      if (activeVideoCountRef.current === 0) {
        audio.play().catch((err) => {
          console.warn('Audio play request failed:', err);
        });
      } else {
        // If a video is currently active, mark that music should resume once video finishes
        wasPlayingBeforeVideoRef.current = true;
      }
    } else {
      // Muting by explicit user action
      userHasMutedRef.current = true;
      setIsMuted(true);
      wasPlayingBeforeVideoRef.current = false;
      audio.pause();
    }
  }, [isMuted]);

  const pauseForVideo = useCallback(() => {
    activeVideoCountRef.current += 1;
    const audio = audioRef.current;
    if (!audio) return;

    // If audio is currently playing or user desires sound, remember to resume after video
    if (!audio.paused && !userHasMutedRef.current) {
      wasPlayingBeforeVideoRef.current = true;
    }
    audio.pause();
  }, []);

  const resumeFromVideo = useCallback(() => {
    activeVideoCountRef.current = Math.max(0, activeVideoCountRef.current - 1);
    const audio = audioRef.current;
    if (!audio) return;

    // Only resume if all videos have stopped and the user has not explicitly muted
    if (activeVideoCountRef.current === 0 && !userHasMutedRef.current) {
      if (wasPlayingBeforeVideoRef.current || !isMuted) {
        audio.play().catch((err) => {
          console.warn('Audio resume after video playback was interrupted:', err);
        });
      }
      wasPlayingBeforeVideoRef.current = false;
    }
  }, [isMuted]);

  return (
    <AudioContext.Provider
      value={{
        isMuted,
        isPlaying,
        toggleMute,
        pauseForVideo,
        resumeFromVideo,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export { useAudio } from './useAudio';

