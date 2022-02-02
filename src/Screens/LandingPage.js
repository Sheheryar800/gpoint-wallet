import React from 'react';
import CryptoCash from '../Components/LandingPage/CryptoCash';
import GpointWalet from '../Components/LandingPage/GpointWalet';
import HeroSection from '../Components/LandingPage/HeroSection';
import TradSection from '../Components/LandingPage/TradSection';
import VisaCardSection from '../Components/LandingPage/VisaCardSection';

function LandingPage() {
  return (
    <>
        <HeroSection />
        <TradSection />
        <CryptoCash />
        <VisaCardSection />
        <GpointWalet />
    </>
)}

export default LandingPage;
