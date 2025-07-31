import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dive Azure - Professional Diving School | Agatti Island, Lakshadweep",
  description: "Experience world-class diving courses and certifications at Dive Azure, located in the pristine waters of Agatti Island, Lakshadweep. Professional PADI courses, medical clearance, and unforgettable diving experiences.",
  keywords: "diving, PADI, Lakshadweep, Agatti Island, scuba diving, diving courses, underwater, marine life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased min-h-screen bg-transparent`}> 
        {children}
      </body>
    </html>
  );
}
