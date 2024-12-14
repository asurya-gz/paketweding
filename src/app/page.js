"use client";
import React, { useState } from "react";
import BaseLayout from "./page/Base/page";
import HeroSection from "./page/Hero/page";
import FeaturedServices from "./page/Fitur/page";
import WhatsAppFloat from "./page/wa/page";
import SplashScreen from "./page/SplashScreen/page";
import OurTeamPage from "./page/Tim/page";
import LocationPage from "./page/Maps/page";
import WhyUs from "./page/KenapaKami/page";

export default function HomePage() {
  const [splashComplete, setSplashComplete] = useState(false);

  const handleSplashComplete = () => {
    setSplashComplete(true);
  };

  return (
    <>
      {!splashComplete ? (
        <SplashScreen onComplete={handleSplashComplete} />
      ) : (
        <BaseLayout>
          <div className="relative">
            <HeroSection />
            <WhyUs />
            <OurTeamPage />
            <WhatsAppFloat />
            <LocationPage />
          </div>
        </BaseLayout>
      )}
    </>
  );
}
