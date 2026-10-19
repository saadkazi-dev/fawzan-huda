import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  useImperativeHandle,
  forwardRef,
} from 'react';
import { useAudio } from '@/context/AudioContext';
import './VideoPlayer.css';

export interface VideoPlayerProps {
  src: string;
  poster?: string;
  onEnded?: () => void;
  onCastUnavailable?: () => void;
  showCastButton?: boolean;
}

export interface VideoPlayerHandle {
  cast: () => Promise<void>;
  play: () => Promise<void>;
  pause: () => void;
  getVideoElement: () => HTMLVideoElement | null;
}

export const VideoPlayer = forwardRef<VideoPlayerHandle, VideoPlayerProps>(
  (
    {
      src,
      poster,
      onEnded,
      onCastUnavailable,
      showCastButton = true,
    },
    ref
  ) => {
    const { pauseForVideo, resumeFromVideo } = useAudio();
    const hasPausedAudioRef = useRef<boolean>(false);

    const containerRef = useRef<HTMLDivElement | null>(null);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const scrubberRef = useRef<HTMLDivElement | null>(null);
    const hideControlsTimer = useRef<number | null>(null);

    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [isBuffering, setIsBuffering] = useState<boolean>(false);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [duration, setDuration] = useState<number>(0);
    const [bufferedEnd, setBufferedEnd] = useState<number>(0);
    const [isMuted, setIsMuted] = useState<boolean>(false);
    const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
    const [showControls, setShowControls] = useState<boolean>(true);
    const [hasEnded, setHasEnded] = useState<boolean>(false);
    const [isScrubbing, setIsScrubbing] = useState<boolean>(false);
    const [isCastSupported, setIsCastSupported] = useState<boolean>(true);

    // Format seconds to mm:ss
    const formatTime = (seconds: number): string => {
      if (!Number.isFinite(seconds) || seconds < 0) return '0:00';
      const mins = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    // Schedule auto-hiding controls
    const scheduleHideControls = useCallback(() => {
      if (hideControlsTimer.current) {
        window.clearTimeout(hideControlsTimer.current);
      }
      setShowControls(true);
      if (isPlaying && !isScrubbing) {
        hideControlsTimer.current = window.setTimeout(() => {
          setShowControls(false);
        }, 3500);
      }
    }, [isPlaying, isScrubbing]);

    const handleUserActivity = useCallback(() => {
      scheduleHideControls();
    }, [scheduleHideControls]);

    // Video playback toggling
    const togglePlay = useCallback(async () => {
      const video = videoRef.current;
      if (!video) return;

      if (video.paused || video.ended) {
        try {
          if (hasEnded) {
            video.currentTime = 0;
            setHasEnded(false);
          }
          await video.play();
          setIsPlaying(true);
          scheduleHideControls();
        } catch (err) {
          console.warn('Playback request error:', err);
        }
      } else {
        video.pause();
        setIsPlaying(false);
        setShowControls(true);
        if (hideControlsTimer.current) {
          window.clearTimeout(hideControlsTimer.current);
        }
      }
    }, [hasEnded, scheduleHideControls]);

    // Volume toggling
    const toggleMute = useCallback(() => {
      const video = videoRef.current;
      if (!video) return;
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }, []);

    // Fullscreen toggling
    const toggleFullscreen = useCallback(async () => {
      const container = containerRef.current;
      const video = videoRef.current;
      if (!container || !video) return;

      try {
        if (!document.fullscreenElement) {
          if (container.requestFullscreen) {
            await container.requestFullscreen();
          } else if (
            (video as HTMLVideoElement & { webkitEnterFullscreen?: () => void })
              .webkitEnterFullscreen
          ) {
            // iOS Safari specific fullscreen
            (
              video as HTMLVideoElement & { webkitEnterFullscreen?: () => void }
            ).webkitEnterFullscreen!();
          }
        } else {
          if (document.exitFullscreen) {
            await document.exitFullscreen();
          }
        }
      } catch (err) {
        console.warn('Fullscreen request failed:', err);
      }
    }, []);

    // Listen to fullscreen changes
    useEffect(() => {
      const handleFullscreenChange = () => {
        setIsFullscreen(!!document.fullscreenElement);
      };

      document.addEventListener('fullscreenchange', handleFullscreenChange);
      document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
      return () => {
        document.removeEventListener('fullscreenchange', handleFullscreenChange);
        document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      };
    }, []);

    // Cast to TV handler: handles WebKit AirPlay, Remote Playback API, and Presentation API
    const handleCast = useCallback(async () => {
      const video = videoRef.current;
      if (!video) {
        onCastUnavailable?.();
        return;
      }

      try {
        // 1. WebKit AirPlay (Safari on iOS & macOS)
        if (
          typeof (video as HTMLVideoElement & { webkitShowPlaybackTargetPicker?: () => void })
            .webkitShowPlaybackTargetPicker === 'function'
        ) {
          (
            video as HTMLVideoElement & { webkitShowPlaybackTargetPicker?: () => void }
          ).webkitShowPlaybackTargetPicker!();
          return;
        }

        // 2. Standard Remote Playback API (Chrome, Edge, Android)
        if (
          'remote' in video &&
          video.remote &&
          typeof (video.remote as { prompt?: () => Promise<void> }).prompt === 'function'
        ) {
          await (video.remote as { prompt: () => Promise<void> }).prompt();
          return;
        }

        // 3. Fallback: Presentation API
        if (typeof window !== 'undefined' && 'PresentationRequest' in window) {
          try {
            const request = new (window as unknown as { PresentationRequest: new (urls: string[]) => { start: () => Promise<void> } }).PresentationRequest([src]);
            await request.start();
            return;
          } catch (presErr: unknown) {
            if ((presErr as Error)?.name === 'AbortError' || (presErr as Error)?.name === 'NotAllowedError') {
              return;
            }
          }
        }

        // 4. If none available, notify parent
        onCastUnavailable?.();
      } catch (err: unknown) {
        if ((err as Error)?.name === 'AbortError' || (err as Error)?.name === 'NotAllowedError') {
          // User closed the device selector dialog
          return;
        }
        console.warn('Cast request failed:', err);
        onCastUnavailable?.();
      }
    }, [src, onCastUnavailable]);

    // Expose imperative handle to parent (for external "Cast to TV" buttons)
    useImperativeHandle(
      ref,
      () => ({
        cast: handleCast,
        play: async () => {
          if (videoRef.current) await videoRef.current.play();
        },
        pause: () => {
          if (videoRef.current) videoRef.current.pause();
        },
        getVideoElement: () => videoRef.current,
      }),
      [handleCast]
    );

    // Detect casting capabilities & device availability
    useEffect(() => {
      const video = videoRef.current;
      if (!video) return;

      let isSupported = false;

      // Check WebKit AirPlay
      if (
        'WebKitPlaybackTargetAvailabilityEvent' in window ||
        typeof (video as HTMLVideoElement & { webkitShowPlaybackTargetPicker?: () => void })
          .webkitShowPlaybackTargetPicker === 'function'
      ) {
        isSupported = true;
        const onAvailability = (e: Event & { availability?: string }) => {
          setIsCastSupported(e.availability !== 'not-available');
        };
        video.addEventListener(
          'webkitplaybacktargetavailabilitychanged',
          onAvailability as EventListener
        );
        return () => {
          video.removeEventListener(
            'webkitplaybacktargetavailabilitychanged',
            onAvailability as EventListener
          );
        };
      }

      // Check Remote Playback API
      if ('remote' in video && video.remote) {
        isSupported = true;
        const remote = video.remote as {
          watchAvailability?: (cb: (avail: boolean) => void) => Promise<number>;
          cancelWatchAvailability?: (id: number) => Promise<void>;
        };

        if (typeof remote.watchAvailability === 'function') {
          let watchId: number | null = null;
          remote
            .watchAvailability((avail: boolean) => {
              setIsCastSupported(avail);
            })
            .then((id) => {
              watchId = id;
            })
            .catch(() => {
              // If discovery rejects, keep available for manual click
              setIsCastSupported(true);
            });

          return () => {
            if (watchId !== null && remote.cancelWatchAvailability) {
              remote.cancelWatchAvailability(watchId).catch(() => {});
            }
          };
        }
      }

      // Check Presentation API
      if (typeof window !== 'undefined' && 'PresentationRequest' in window) {
        isSupported = true;
      }

      setIsCastSupported(isSupported);
    }, []);

    // Sync video event listeners
    useEffect(() => {
      const video = videoRef.current;
      if (!video) return;

      const onTimeUpdate = () => {
        if (!isScrubbing) {
          setCurrentTime(video.currentTime);
        }
        if (video.buffered.length > 0) {
          for (let i = video.buffered.length - 1; i >= 0; i--) {
            if (video.buffered.start(i) <= video.currentTime) {
              setBufferedEnd(video.buffered.end(i));
              break;
            }
          }
        }
      };

      const onLoadedMetadata = () => {
        setDuration(video.duration);
        setIsMuted(video.muted);
      };

      const onDurationChange = () => {
        setDuration(video.duration);
      };

      const onPlay = () => {
        setIsPlaying(true);
        setHasEnded(false);
        scheduleHideControls();
        if (!hasPausedAudioRef.current) {
          hasPausedAudioRef.current = true;
          pauseForVideo();
        }
      };

      const onPause = () => {
        setIsPlaying(false);
        setShowControls(true);
        if (hasPausedAudioRef.current) {
          hasPausedAudioRef.current = false;
          resumeFromVideo();
        }
      };

      const onWaiting = () => setIsBuffering(true);
      const onPlaying = () => setIsBuffering(false);
      const onCanPlay = () => setIsBuffering(false);

      const onVideoEnded = () => {
        setIsPlaying(false);
        setHasEnded(true);
        setShowControls(true);
        if (hasPausedAudioRef.current) {
          hasPausedAudioRef.current = false;
          resumeFromVideo();
        }
        if (onEnded) onEnded();
      };

      video.addEventListener('timeupdate', onTimeUpdate);
      video.addEventListener('loadedmetadata', onLoadedMetadata);
      video.addEventListener('durationchange', onDurationChange);
      video.addEventListener('play', onPlay);
      video.addEventListener('pause', onPause);
      video.addEventListener('waiting', onWaiting);
      video.addEventListener('playing', onPlaying);
      video.addEventListener('canplay', onCanPlay);
      video.addEventListener('ended', onVideoEnded);

      return () => {
        video.removeEventListener('timeupdate', onTimeUpdate);
        video.removeEventListener('loadedmetadata', onLoadedMetadata);
        video.removeEventListener('durationchange', onDurationChange);
        video.removeEventListener('play', onPlay);
        video.removeEventListener('pause', onPause);
        video.removeEventListener('waiting', onWaiting);
        video.removeEventListener('playing', onPlaying);
        video.removeEventListener('canplay', onCanPlay);
        video.removeEventListener('ended', onVideoEnded);
        if (hideControlsTimer.current) {
          window.clearTimeout(hideControlsTimer.current);
        }
        if (hasPausedAudioRef.current) {
          hasPausedAudioRef.current = false;
          resumeFromVideo();
        }
      };
    }, [isScrubbing, scheduleHideControls, onEnded, pauseForVideo, resumeFromVideo]);

    // Scrubber seeking calculations
    const calculateScrubPosition = useCallback(
      (clientX: number) => {
        if (!scrubberRef.current || duration <= 0) return 0;
        const rect = scrubberRef.current.getBoundingClientRect();
        const clampedX = Math.max(0, Math.min(clientX - rect.left, rect.width));
        const percent = clampedX / rect.width;
        return percent * duration;
      },
      [duration]
    );

    const handleScrubberPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
      e.stopPropagation();
      setIsScrubbing(true);
      setShowControls(true);
      if (hideControlsTimer.current) {
        window.clearTimeout(hideControlsTimer.current);
      }
      const newTime = calculateScrubPosition(e.clientX);
      setCurrentTime(newTime);

      const onPointerMove = (moveEvent: PointerEvent) => {
        const scrubTime = calculateScrubPosition(moveEvent.clientX);
        setCurrentTime(scrubTime);
      };

      const onPointerUp = (upEvent: PointerEvent) => {
        const finalTime = calculateScrubPosition(upEvent.clientX);
        if (videoRef.current) {
          videoRef.current.currentTime = finalTime;
        }
        setCurrentTime(finalTime);
        setIsScrubbing(false);
        window.removeEventListener('pointermove', onPointerMove);
        window.removeEventListener('pointerup', onPointerUp);
        scheduleHideControls();
      };

      window.addEventListener('pointermove', onPointerMove);
      window.addEventListener('pointerup', onPointerUp);
    };

    const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;
    const bufferedPercent = duration > 0 ? (bufferedEnd / duration) * 100 : 0;

    return (
      <div
        ref={containerRef}
        className="custom-video-player-container"
        onPointerMove={handleUserActivity}
        onClick={handleUserActivity}
      >
        {/* Decorative Islamic Corner Accents */}
        <span className="player-corner-accent corner-tl" aria-hidden="true" />
        <span className="player-corner-accent corner-tr" aria-hidden="true" />
        <span className="player-corner-accent corner-bl" aria-hidden="true" />
        <span className="player-corner-accent corner-br" aria-hidden="true" />

        {/* HTML5 Video Element with Contain Fit to Avoid Any Cropping */}
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          playsInline
          preload="metadata"
          className="custom-video-element"
          onClick={togglePlay}
          aria-label="Fawzan & Huda Wedding Invitation Video"
        />

        {/* Center Big Play / Replay Overlay (Cleaned: No dark tint or blur covering the video) */}
        <div
          className={`player-center-overlay ${isPlaying && !isScrubbing ? 'is-hidden' : ''}`}
        >
          <button
            type="button"
            onClick={togglePlay}
            className="center-play-button"
            aria-label={
              hasEnded
                ? 'Replay Invitation Video'
                : isPlaying
                ? 'Pause Video'
                : 'Play Invitation Video'
            }
          >
            {hasEnded ? (
              <svg viewBox="0 0 24 24" className="center-replay-icon" fill="currentColor">
                <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="center-play-icon" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
        </div>

        {/* Buffering Spinner */}
        {isBuffering && (
          <div className="player-buffering-overlay" aria-live="polite">
            <div className="buffering-spinner" />
          </div>
        )}

        {/* Bottom Controls Bar */}
        <div
          className={`player-controls-bar ${!showControls && isPlaying ? 'controls-hidden' : ''}`}
        >
          {/* Scrubber / Progress Bar */}
          <div
            ref={scrubberRef}
            className="scrubber-container"
            onPointerDown={handleScrubberPointerDown}
            role="slider"
            aria-label="Video seek timeline"
            aria-valuemin={0}
            aria-valuemax={duration}
            aria-valuenow={currentTime}
          >
            <div className="scrubber-track">
              <div
                className="scrubber-buffered"
                style={{ width: `${Math.min(100, bufferedPercent)}%` }}
              />
              <div
                className="scrubber-progress"
                style={{ width: `${Math.min(100, progressPercent)}%` }}
              />
            </div>
            <div
              className="scrubber-thumb"
              style={{ left: `${Math.min(100, progressPercent)}%` }}
            />
          </div>

          {/* Buttons & Indicators Row */}
          <div className="player-buttons-row">
            {/* Left: Play/Pause and Time */}
            <div className="player-left-group">
              <button
                type="button"
                className="player-btn"
                onClick={togglePlay}
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? (
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>

              <div className="player-time-display">
                <span className="player-time-current">{formatTime(currentTime)}</span>
                <span className="player-time-divider">/</span>
                <span className="player-time-duration">{formatTime(duration)}</span>
              </div>
            </div>

            {/* Right: Audio, Cast to TV, and Fullscreen */}
            <div className="player-right-group">
              {/* Audio Mute/Unmute */}
              <button
                type="button"
                className="player-btn"
                onClick={toggleMute}
                aria-label={isMuted ? 'Unmute Audio' : 'Mute Audio'}
              >
                {isMuted ? (
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                  </svg>
                )}
              </button>

              {/* Accessible Cast to TV Control in player control bar */}
              {showCastButton && isCastSupported && (
                <button
                  type="button"
                  className="player-btn player-cast-btn"
                  onClick={handleCast}
                  aria-label="Cast to TV"
                  title="Cast to TV (Smart TV / AirPlay / Chromecast)"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6M2 20h.01" />
                  </svg>
                </button>
              )}

              {/* Fullscreen Button */}
              <button
                type="button"
                className="player-btn"
                onClick={toggleFullscreen}
                aria-label={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
              >
                {isFullscreen ? (
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

VideoPlayer.displayName = 'VideoPlayer';
