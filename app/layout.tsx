import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Gözde İzolasyon | Kayseri Su ve Çatı Yalıtım Çözümleri',
  description: 'Kayseri ve çevre illerde profesyonel çatı izolasyonu, su yalıtımı, temel ve perde beton uygulamaları. Ücretsiz keşif için hemen ulaşın.',
  keywords: ['Kayseri izolasyon', 'çatı tamiri Kayseri', 'su yalıtımı ustası', 'Gözde İzolasyon', 'Kayseri çatı yalıtımı'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
