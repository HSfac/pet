import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PetCare Hub - 반려동물을 위한 최고의 서비스",
  description: "반려동물을 위한 최고의 서비스를 한 곳에서 찾아보세요. 신뢰할 수 있는 동물병원, 펫샵, 펫시터 서비스를 제공합니다.",
  keywords: "반려동물, 펫케어, 동물병원, 펫샵, 펫시터, 반려동물용품",
  openGraph: {
    title: "PetCare Hub - 반려동물을 위한 최고의 서비스",
    description: "반려동물을 위한 최고의 서비스를 한 곳에서 찾아보세요.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
