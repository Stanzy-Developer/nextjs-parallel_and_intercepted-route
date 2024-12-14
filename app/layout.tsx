import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { geistSans, geistMono } from "./fonts/fonts";
import NavBar from "@/components/navBar";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  analytics,
  team,
}: Readonly<{
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white px-10`}
      >
        <NavBar />
        {children}
        <div className="flex gap-4 py-2">
          {analytics}
          {team}
        </div>
        <Toaster />
      </body>
    </html>
  );
}