import React from 'react';
import { HeroSection } from './HeroSection';
import { ParentsSection } from '../parents/ParentsSection';
import { ScratchDateSection } from '../scratch/ScratchDateSection';
import { NikahSection } from '../nikah/NikahSection';
import { ReceptionSection } from '../reception/ReceptionSection';
import { WeddingFilmSection } from '../wedding-film/WeddingFilmSection';
import { DuaAttendSection } from '../dua/DuaAttendSection';
import { Footer } from '../footer/Footer';

export interface HeroMountPointProps {
  onReplay?: () => void;
  onNavigateToVideo?: () => void;
}

/**
 * Main Invitation Flow Container:
 * Hero -> Parents -> Scratch Date Reveal -> Nikah -> Reception -> Wedding Film -> Dua -> Footer
 */
export const HeroMountPoint: React.FC<HeroMountPointProps> = ({
  onReplay,
  onNavigateToVideo,
}) => {
  return (
    <div className="main-invitation-flow" style={{ width: '100%' }}>
      <HeroSection onReplay={onReplay} />
      <ParentsSection />
      <ScratchDateSection />  
      <NikahSection />
      <ReceptionSection />
      <WeddingFilmSection onNavigateToVideo={onNavigateToVideo} />
      <DuaAttendSection />
      <Footer />
    </div>
  );
};
