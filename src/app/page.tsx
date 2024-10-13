"use client";
import React, { useEffect } from "react";
import ReactFullPage from '@fullpage/react-fullpage';
import Header from "@/components/Header/Header";
import FeatureSection1 from "@/components/sections/FeatureSection1";
import IntroSection from "@/components/sections/IntroSection";
import FeatureSection2 from '@/components/sections/FeatureSection2';

export default function Home() {
  useEffect(() => {
    const creditsElement = document.querySelector('.fp-watermark');
    if (creditsElement) {
      creditsElement.remove();
    }
  }, []);
  return (
    <div>
      <Header />
      <ReactFullPage
        scrollingSpeed={1000} 
        navigation={true} 
        credits={{enabled: false}}
        render={() => {
          return (
            <div id="fullpage-wrapper">
              <div className="section h-screen flex justify-center items-center">
                <IntroSection />
              </div>
              <div className="section h-screen flex justify-center items-center">
                <FeatureSection1 />
              </div>
              <div className="section h-screen flex justify-center items-center">
                <FeatureSection2 />
              </div>
            </div>
          );
        }}
      />
    </div>
  );
}
