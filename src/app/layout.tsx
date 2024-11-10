import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/common/Header/Header";

export const metadata: Metadata = {
  title: "취얼업",
  description: "취준생들을 위한 취준 프로세스 관리 서비스",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script src="https://developers.kakao.com/sdk/js/kakao.min.js"></script>
      </head>
      <body className="font-pre">
        <Header />
        {children}
      </body>
    </html>
  );
}
