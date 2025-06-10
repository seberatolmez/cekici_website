import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "İzmir Oto Çekici ve Yol Yardım Hizmeti | 7/24 Hizmet",
  description: "İzmir Bulut Oto Çekici olarak oto çekici, yol yardım ve araç kurtarma hizmetinde 7/24 hızlı, güvenilir ve profesyonel destek. Yolda kaldıysanız hemen arayın!",
  keywords: "izmir oto çekici, izmir yol yardım, Çiğli çekici , Bornova Çekici , Gaziemir Çekici , Çekici İzmir, oto kurtarma izmir",
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
        <FloatingButton />
      </body>
    </html>
  );
}
