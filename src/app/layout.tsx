import type { Metadata } from "next";
import "./globals.css";
import PostHogClient from "@/components/PostHogClient";

export const metadata: Metadata = {
  title: "CollinsAI | Automation Intelligence for SMBs",
  description: "CollinsAI builds automation, AI agents, dashboards, and operational systems for SMBs in Colombia and Latin America.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <PostHogClient />
        {children}
      </body>
    </html>
  );
}
