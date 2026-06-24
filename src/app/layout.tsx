import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Orbitron } from "next/font/google";
import { cn } from "@/lib/utils";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["700", "900"], variable: "--font-orbitron" });

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Kareeb Sadab | Security Engineer & AI/ML Developer",
  description: "Matrix command portfolio for Kareeb Sadab, Security Engineer and AI/ML Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans dark", orbitron.variable)}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
