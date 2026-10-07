import React from 'react';
import { HeroSection } from './HeroSection';
import { ParentsSection } from '../parents/ParentsSection';
import { ScratchDateSection } from '../scratch/ScratchDateSection';
import { NikahSection } from '../nikah/NikahSection';
import { ReceptionSection } from '../reception/ReceptionSection';
import { DuaAttendSection } from '../dua/DuaAttendSection';
import { Footer } from '../footer/Footer';

export interface HeroMountPointProps {
  onReplay?: () => void;
}

/**
 * Main Invitation Flow Container (Hero -> Parents -> Scratch Date Reveal -> Nikah -> Reception -> Dua -> Footer)
 */
export const HeroMountPoint: React.FC<HeroMountPointProps> = ({ onReplay }) => {
  return (
    <div className="main-invitation-flow" style={{ width: '100%' }}>
      <HeroSection onReplay={onReplay} />
      <ParentsSection />
      <ScratchDateSection />  
      <NikahSection />
      <ReceptionSection />
      <DuaAttendSection />
      <Footer />
    </div>
  );
};




