import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Unity Code | Website & Application Development",
  description:
    "Unity Code รับทำเว็บไซต์ ระบบจอง ระบบร้านค้าออนไลน์ ระบบแอดมิน และ Web Application สำหรับธุรกิจ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}