"use client";
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';

import Header from "@/components/Header/Header";
import FeatureSection1 from "@/components/sections/FeatureSection1";
import IntroSection from "@/components/sections/IntroSection";
import FeatureSection2 from '@/components/sections/FeatureSection2';

export default function Home() {
  return (
    <div>
      <Header />
      <Fullpage>
        <FullPageSections>
          <FullpageSection>
            <IntroSection />
          </FullpageSection>
          <FullpageSection>
            <FeatureSection1 />
          </FullpageSection>
          <FullpageSection>
            <FeatureSection2 />
          </FullpageSection>
        </FullPageSections>
        <FullpageNavigation />
      </Fullpage>
    </div>
  );
}
