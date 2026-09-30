import { useState } from 'react';
import { AppLayout } from '@/components/common';
import { Preloader } from '@/components/preloader';
import { OpeningVideo } from '@/components/video';
import { HeroMountPoint } from '@/components/hero';
import type { InvitationStage } from '@/types';

function App() {
  const [stage, setStage] = useState<InvitationStage>('preloader');

  return (
    <AppLayout>
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
        <HeroMountPoint onReplay={() => setStage('preloader')} />
      )}
    </AppLayout>
  );
}

export default App;
