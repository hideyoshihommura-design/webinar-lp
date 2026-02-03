import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "無料セミナー | ホリエモンAI学校 介護校 - 介護×AI研修×助成金活用",
  description:
    "介護施設の経営者・管理者向け無料オンラインセミナー。AI研修の助成金活用法、導入事例、カリキュラム詳細を60分で解説。参加無料・先着50名。",
  keywords: [
    "介護 AI 研修",
    "介護 DX",
    "助成金 AI研修",
    "ホリエモン AI学校",
    "介護 業務効率化",
    "ウェビナー",
    "無料セミナー",
  ],
  openGraph: {
    title: "無料セミナー | ホリエモンAI学校 介護校",
    description:
      "介護×AI研修、助成金で75%オフ。その仕組み、60分で全部わかります。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">{children}</body>
    </html>
  );
}
