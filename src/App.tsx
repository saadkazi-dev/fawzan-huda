import { useState, useEffect } from 'react';
import { AppLayout } from '@/components/common';
import { Preloader } from '@/components/preloader';
import { OpeningVideo } from '@/components/video';
import { HeroMountPoint } from '@/components/hero';
import { InvitationVideoPage } from '@/components/video-page';
import { GuestAccessCard } from '@/components/guest';
import { AudioProvider } from '@/context/AudioContext';
import { AudioControl } from '@/components/audio';
import type { InvitationStage } from '@/types';

function AppContent() {
  const [stage, setStage] = useState<InvitationStage>('preloader');
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname.replace(/\/+$/, '');
    }
    return '';
  });

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname.replace(/\/+$/, ''));
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path.replace(/\/+$/, ''));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isVideoPage = currentPath === '/invitation-video';
  const isGuestPage = currentPath === '/guest';

  const layoutStage: InvitationStage = isGuestPage || isVideoPage ? 'hero-mount' : stage;
  const layoutClass = isGuestPage
    ? 'guest-card-app-wrapper'
    : isVideoPage
    ? 'invitation-video-app-wrapper'
    : undefined;

  return (
    <>
      <AudioControl />
      <AppLayout stage={layoutStage} className={layoutClass}>
        {isGuestPage && (
          <GuestAccessCard
            onOpenInvitation={() => navigateTo('/')}
            onWatchFilm={() => navigateTo('/invitation-video')}
          />
        )}

        {isVideoPage && (
          <InvitationVideoPage onNavigateHome={() => navigateTo('/')} />
        )}

        {!isGuestPage && !isVideoPage && (
          <>
            {stage === 'preloader' && (
              <Preloader onOpen={() => setStage('opening-video')} />
            )}

            {stage === 'opening-video' && (
              <OpeningVideo 
                videoSrc="/assets/videos/opening-video.mp4"
                onEnded={() => setStage('hero-mount')} 
              />
            )}

            {stage === 'hero-mount' && (
              <HeroMountPoint
                onReplay={() => setStage('preloader')}
                onNavigateToVideo={() => navigateTo('/invitation-video')}
              />
            )}
          </>
        )}
      </AppLayout>
    </>
  );
}

function App() {
  return (
    <AudioProvider>
      <AppContent />
    </AudioProvider>
  );
}

export default App;
