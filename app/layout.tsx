import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StructuredData from "./components/StructuredData";

const notoSansJP = Noto_Sans_JP({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "買取専門店 | 高価買取で安心・信頼の買取サービス",
  description: "金・貴金属・ブランド品・時計など、幅広い品目を高価買取いたします。店舗買取・出張買取対応。親切丁寧な対応でお客様にご満足いただけるサービスを提供しております。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} font-sans antialiased`}>
        <StructuredData />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
