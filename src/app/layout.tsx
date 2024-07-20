import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SubscribeProvider } from "@/lib/SubscribeContext";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Razzy's Sports Institute",
  description: "Your life is busy. We plan. You Workout",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={`bg-primary-background ${inter.className}`}>
        <SubscribeProvider>{children}</SubscribeProvider>
        <Analytics />
      </body>
    </html>
  );
}
