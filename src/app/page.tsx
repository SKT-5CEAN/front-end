"use client";
import React, { useEffect, useState } from "react";
import ReactFullPage from '@fullpage/react-fullpage';
import Header from "@/components/Header/Header";
import FeatureSection1 from "@/components/sections/FeatureSection1";
import IntroSection from "@/components/sections/IntroSection";
import FeatureSection2 from '@/components/sections/FeatureSection2';
import LoginComponent from "@/components/LoginComponent";
import { Query, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();
export default function Home() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const creditsElement = document.querySelector('.fp-watermark');
    if (creditsElement) {
      creditsElement.remove();
    }
  }, []);
  const handleLogoClick = () => {
    console.log("로고 클릭");
    setIsLogin(false); 
  }

  const handleLoginClick = () => {
    console.log("로그인 버튼 클릭");
    setIsLogin(true);
  };
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Header onLogoClick={handleLogoClick} onLoginClick={handleLoginClick} /> 
        {isLogin ? (
          <LoginComponent />
        ) : (
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
        )}
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
