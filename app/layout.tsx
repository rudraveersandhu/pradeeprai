import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DisclaimerPopup from "@/app/components/DisclaimerPopup";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pradeep Rai | Senior Advocate, Supreme Court of India",
  description: "Senior Advocate Pradeep Rai - Supreme Court of India. Over two decades of practice in Constitutional Law, Corporate Litigation, Arbitration, and Criminal Defence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <DisclaimerPopup />
        {children}
      </body>
    </html>
  );
}
