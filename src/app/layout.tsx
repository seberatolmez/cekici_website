import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "İzmir Oto Çekici ve Yol Yardım Hizmeti | 7/24 Hizmet",
  description: "İzmir'de 7/24 oto çekici ve yol yardım hizmeti. Akü takviyesi, lastik değişimi, araç kurtarma ve daha fazlası için hemen arayın.",
  keywords: "izmir oto çekici, yol yardım, akü takviyesi, lastik değişimi, araç kurtarma, 7/24 çekici",
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
