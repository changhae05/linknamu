import type { Metadata, Viewport } from "next";
import "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "링크나무",
  description: "내 모든 링크를 한 페이지에",
};

export const viewport: Viewport = {
  themeColor: "#fff9f2",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="relative flex min-h-full flex-col">
        {/* 배경: 크림 → 살구 그라데이션 + 은은한 빛 번짐 (장식용) */}
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-b from-cream via-[#fff1e3] to-apricot" />
          <div className="absolute -top-32 -left-24 size-96 rounded-full bg-[#ffd3b5]/60 blur-3xl" />
          <div className="absolute top-1/3 -right-32 size-96 rounded-full bg-[#ffe6c2]/70 blur-3xl" />
          <div className="absolute -bottom-40 left-1/4 size-[28rem] rounded-full bg-[#f9c8b0]/50 blur-3xl" />
        </div>
        {children}
      </body>
    </html>
  );
}
