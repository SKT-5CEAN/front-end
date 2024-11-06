"use client";
import React, { useEffect } from "react";
import ReactFullPage from "@fullpage/react-fullpage";
import FeatureSection1 from "@/components/domain/main/sections/FeatureSection1";
import IntroSection from "@/components/domain/main/sections/IntroSection";
import FeatureSection2 from "@/components/domain/main/sections/FeatureSection2";
import LoginComponent from "@/components/domain/main/LoginComponent/LoginComponent";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useUserStore } from "@/store/useUserStore";

const queryClient = new QueryClient();
export default function Home() {
  const { accessTkn } = useUserStore();

  useEffect(() => {
    const creditsElement = document.querySelector(".fp-watermark");
    if (creditsElement) {
      creditsElement.remove();
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        {accessTkn ? (
          <LoginComponent />
        ) : (
          <ReactFullPage
            scrollingSpeed={1000}
            navigation={true}
            credits={{ enabled: false }}
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
        )}
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
