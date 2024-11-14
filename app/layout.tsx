import type { Metadata } from "next";
import localFont from "next/font/local";
import { Manrope } from "next/font/google";
import "./globals.css";
import ConvexClerkProvider from "../providers/ConvexClerkProvider";
import AudioProvider from "@/providers/AudioProvider";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Podcast",
  description: "Gerar podcast usando IA",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexClerkProvider >
      <html lang="en">
        <AudioProvider>
          <body className={`${manrope.className}`}>{children}</body>{" "}
        </AudioProvider>
      </html>
    </ConvexClerkProvider>
  );
}
