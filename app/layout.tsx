import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alejandro Diaz Barreiro - Sport, Systems & Team Performance",
  description:
    "A cinematic personal website for Alejandro Diaz Barreiro Aldana, exploring sports analytics, team optimisation, systems thinking, storytelling and human performance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
